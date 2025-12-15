import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get active special issues
    const specialIssues = await db.specialIssue.findMany({
      where: {
        isActive: true,
        OR: [
          { deadline: null },
          { deadline: { gte: new Date() } }
        ]
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(specialIssues)
  } catch (error) {
    console.error('Error fetching special issues:', error)
    return NextResponse.json(
      { error: 'Failed to fetch special issues' },
      { status: 500 }
    )
  }
}