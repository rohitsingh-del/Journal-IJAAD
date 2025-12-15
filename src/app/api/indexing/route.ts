import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get active indexing services
    const indexing = await db.indexing.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(indexing)
  } catch (error) {
    console.error('Error fetching indexing information:', error)
    return NextResponse.json(
      { error: 'Failed to fetch indexing information' },
      { status: 500 }
    )
  }
}