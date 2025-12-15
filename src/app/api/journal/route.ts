import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get journal information
    const journal = await db.journal.findFirst({
      include: {
        _count: {
          select: {
            articles: {
              where: {
                status: 'PUBLISHED'
              }
            },
            issues: true
          }
        }
      }
    })

    if (!journal) {
      return NextResponse.json(
        { error: 'Journal not found' },
        { status: 404 }
      )
    }

    // Get additional stats
    const totalViews = await db.article.aggregate({
      where: {
        status: 'PUBLISHED'
      },
      _sum: {
        viewCount: true
      }
    })

    const totalDownloads = await db.article.aggregate({
      where: {
        status: 'PUBLISHED'
      },
      _sum: {
        downloadCount: true
      }
    })

    return NextResponse.json({
      id: journal.id,
      name: journal.name,
      abbreviation: journal.abbreviation,
      issnPrint: journal.issnPrint,
      issnOnline: journal.issnOnline,
      description: journal.description,
      mission: journal.mission,
      scope: journal.scope,
      openAccess: journal.openAccess,
      publicationFrequency: journal.publicationFrequency,
      stats: {
        publishedArticles: journal._count.articles,
        totalIssues: journal._count.issues,
        totalViews: totalViews._sum.viewCount || 0,
        totalDownloads: totalDownloads._sum.downloadCount || 0
      }
    })
  } catch (error) {
    console.error('Error fetching journal information:', error)
    return NextResponse.json(
      { error: 'Failed to fetch journal information' },
      { status: 500 }
    )
  }
}