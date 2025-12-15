import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get editorial board members with their details
    const editorialBoard = await db.editorialBoard.findMany({
      where: {
        isActive: true
      },
      include: {
        user: true,
        journal: true
      },
      orderBy: [
        { position: 'asc' },
        { startDate: 'asc' }
      ]
    })

    // Group by position
    const groupedBoard = editorialBoard.reduce((acc, member) => {
      const position = member.position
      if (!acc[position]) {
        acc[position] = []
      }
      acc[position].push({
        id: member.id,
        name: member.user.name,
        email: member.user.email,
        position: member.position,
        department: member.department,
        institution: member.institution,
        country: member.country,
        bio: member.bio,
        startDate: member.startDate,
        endDate: member.endDate,
        isActive: member.isActive
      })
      return acc
    }, {} as Record<string, any[]>)

    return NextResponse.json(groupedBoard)
  } catch (error) {
    console.error('Error fetching editorial board:', error)
    return NextResponse.json(
      { error: 'Failed to fetch editorial board' },
      { status: 500 }
    )
  }
}