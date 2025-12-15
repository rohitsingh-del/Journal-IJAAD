import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get active call for papers
    const callForPapers = await db.callForPapers.findMany({
      where: {
        isActive: true,
        OR: [
          { deadline: null },
          { deadline: { gte: new Date() } }
        ]
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 1
    })

    if (callForPapers.length === 0) {
      return NextResponse.json(null)
    }

    const cfp = callForPapers[0]
    
    // Parse themes if stored as JSON string
    let themes = []
    if (cfp.themes) {
      try {
        themes = JSON.parse(cfp.themes)
      } catch {
        themes = cfp.themes.split(',').map(t => t.trim())
      }
    }

    return NextResponse.json({
      id: cfp.id,
      title: cfp.title,
      description: cfp.description,
      deadline: cfp.deadline,
      themes: themes,
      specialNote: cfp.specialNote
    })
  } catch (error) {
    console.error('Error fetching call for papers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch call for papers' },
      { status: 500 }
    )
  }
}