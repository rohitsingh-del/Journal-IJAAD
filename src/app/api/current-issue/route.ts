import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get the latest published issue
    const latestIssue = await db.issue.findFirst({
      where: {
        isPublished: true
      },
      include: {
        articles: {
          include: {
            authors: {
              include: {
                author: true
              }
            }
          }
        },
        orderBy: {
          publishDate: 'desc'
        }
      },
      orderBy: {
        publishDate: 'desc'
      }
    })

    if (!latestIssue) {
      return NextResponse.json(
        { error: 'No published issue found' },
        { status: 404 }
      )
    }

    // Format the response
    const formattedIssue = {
      id: latestIssue.id,
      volume: latestIssue.volume,
      issue: latestIssue.issue,
      title: latestIssue.title,
      description: latestIssue.description,
      publishDate: latestIssue.publishDate,
      isPublished: latestIssue.isPublished,
      articles: latestIssue.articles.map(article => ({
        id: article.id,
        title: article.title,
        abstract: article.abstract,
        keywords: article.keywords,
        doi: article.doi,
        pageStart: article.pageStart,
        pageEnd: article.pageEnd,
        receivedDate: article.receivedDate,
        acceptedDate: article.acceptedDate,
        publishedDate: article.publishedDate,
        viewCount: article.viewCount,
        downloadCount: article.downloadCount,
        status: article.status,
        articleType: article.articleType,
        authors: article.authors.map(aa => ({
          id: aa.author.id,
          name: aa.author.name,
          email: aa.author.email,
          affiliation: aa.author.affiliation,
          country: aa.author.country,
          orcid: aa.author.orcid,
          order: aa.order,
          isCorresponding: aa.isCorresponding
        }))
      }))
    }

    return NextResponse.json(formattedIssue)
  } catch (error) {
    console.error('Error fetching current issue:', error)
    return NextResponse.json(
      { error: 'Failed to fetch current issue' },
      { status: 500 }
    )
  }
}