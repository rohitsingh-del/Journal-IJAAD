import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get latest published articles
    const articles = await db.article.findMany({
      where: {
        status: 'PUBLISHED'
      },
      include: {
        authors: {
          include: {
            author: true
          }
        },
        issue: true
      },
      orderBy: {
        publishedDate: 'desc'
      },
      take: 6
    })

    // Format the response
    const formattedArticles = articles.map(article => ({
      id: article.id,
      title: article.title,
      abstract: article.abstract,
      doi: article.doi,
      viewCount: article.viewCount,
      downloadCount: article.downloadCount,
      publishedDate: article.publishedDate,
      authors: article.authors.map(aa => aa.author.name),
      issue: article.issue ? {
        volume: article.issue.volume,
        issue: article.issue.issue
      } : null
    }))

    return NextResponse.json(formattedArticles)
  } catch (error) {
    console.error('Error fetching latest articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch latest articles' },
      { status: 500 }
    )
  }
}