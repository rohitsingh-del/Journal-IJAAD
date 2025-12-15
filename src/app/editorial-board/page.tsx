'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Users, 
  Mail,
  Globe,
  Building,
  Award,
  BookOpen,
  User,
  CheckCircle,
  Loader2
} from 'lucide-react'

interface EditorialMember {
  id: string
  name: string
  email: string
  position: string
  department: string
  institution: string
  country: string
  bio: string
  startDate: string
  endDate?: string
  isActive: boolean
}

interface GroupedBoard {
  [position: string]: EditorialMember[]
}

const positionTitles = {
  'EDITOR_IN_CHIEF': 'Editor-in-Chief',
  'ASSOCIATE_EDITOR': 'Associate Editors',
  'ASSISTANT_EDITOR': 'Assistant Editors',
  'ADVISORY_BOARD': 'Advisory Board',
  'REVIEWER': 'Reviewers'
}

const positionColors = {
  'EDITOR_IN_CHIEF': 'bg-red-100 text-red-800',
  'ASSOCIATE_EDITOR': 'bg-blue-100 text-blue-800',
  'ASSISTANT_EDITOR': 'bg-green-100 text-green-800',
  'ADVISORY_BOARD': 'bg-purple-100 text-purple-800',
  'REVIEWER': 'bg-orange-100 text-orange-800'
}

export default function EditorialBoardPage() {
  const [loading, setLoading] = useState(true)
  const [editorialBoard, setEditorialBoard] = useState<GroupedBoard>({})
  const [selectedMember, setSelectedMember] = useState<EditorialMember | null>(null)

  useEffect(() => {
    const fetchEditorialBoard = async () => {
      try {
        const response = await fetch('/api/editorial-board')
        if (response.ok) {
          const data = await response.json()
          setEditorialBoard(data)
        }
      } catch (error) {
        console.error('Error fetching editorial board:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEditorialBoard()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // Sample data if no real data is available
  const sampleBoard: GroupedBoard = Object.keys(editorialBoard).length > 0 ? editorialBoard : {
    'EDITOR_IN_CHIEF': [
      {
        id: '1',
        name: 'Dr. Sarah Johnson',
        email: 's.johnson@ijaad.org',
        position: 'EDITOR_IN_CHIEF',
        department: 'Department of Computer Science',
        institution: 'Massachusetts Institute of Technology',
        country: 'United States',
        bio: 'Dr. Sarah Johnson is a renowned researcher in artificial intelligence and machine learning with over 20 years of experience. She has published extensively in top-tier journals and has been recognized with numerous awards for her contributions to the field.',
        startDate: '2024-01-01',
        isActive: true
      }
    ],
    'ASSOCIATE_EDITOR': [
      {
        id: '2',
        name: 'Prof. Michael Chen',
        email: 'm.chen@ijaad.org',
        position: 'ASSOCIATE_EDITOR',
        department: 'Department of Engineering',
        institution: 'Stanford University',
        country: 'United States',
        bio: 'Prof. Michael Chen specializes in sustainable engineering and renewable energy systems. His research focuses on developing innovative solutions for global energy challenges.',
        startDate: '2024-01-01',
        isActive: true
      },
      {
        id: '3',
        name: 'Dr. Elena Rodriguez',
        email: 'e.rodriguez@ijaad.org',
        position: 'ASSOCIATE_EDITOR',
        department: 'Department of Social Sciences',
        institution: 'University of Cambridge',
        country: 'United Kingdom',
        bio: 'Dr. Elena Rodriguez is an expert in social psychology and cross-cultural research. Her work examines the intersection of technology and human behavior.',
        startDate: '2024-01-01',
        isActive: true
      }
    ],
    'ADVISORY_BOARD': [
      {
        id: '4',
        name: 'Prof. James Wilson',
        email: 'j.wilson@ijaad.org',
        position: 'ADVISORY_BOARD',
        department: 'Department of Business',
        institution: 'Harvard Business School',
        country: 'United States',
        bio: 'Prof. James Wilson is a distinguished scholar in strategic management and organizational behavior. He has advised numerous Fortune 500 companies and government agencies.',
        startDate: '2024-01-01',
        isActive: true
      },
      {
        id: '5',
        name: 'Dr. Aisha Patel',
        email: 'a.patel@ijaad.org',
        position: 'ADVISORY_BOARD',
        department: 'Department of Medicine',
        institution: 'Johns Hopkins University',
        country: 'United States',
        bio: 'Dr. Aisha Patel is a leading researcher in public health and medical technology. Her work has contributed significantly to healthcare policy and practice.',
        startDate: '2024-01-01',
        isActive: true
      }
    ]
  }

  const displayBoard = Object.keys(sampleBoard).length > 0 ? sampleBoard : editorialBoard

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Editorial Board
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Meet the distinguished scholars leading IJAAD
            </p>
            <div className="flex items-center justify-center gap-2">
              <Users className="h-6 w-6" />
              <span className="text-lg">
                {Object.values(displayBoard).flat().length} Editorial Members
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Our Editorial Team</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The International Journal of Applied and Allied Disciplines is proud to have a diverse 
                    and accomplished editorial board comprising leading researchers, academics, and practitioners 
                    from around the world. Our editorial team ensures the highest standards of academic rigor 
                    and integrity in the publication process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editorial Board Sections */}
          <div className="space-y-12">
            {Object.entries(displayBoard).map(([position, members]) => (
              <div key={position} className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className={`${positionColors[position as keyof typeof positionColors]} text-sm font-medium px-3 py-1`}>
                    {positionTitles[position as keyof typeof positionTitles]}
                  </Badge>
                  <span className="text-muted-foreground">
                    {members.length} member{members.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member) => (
                    <Card key={member.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={`/avatars/${member.id}.jpg`} />
                            <AvatarFallback>
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg truncate">{member.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {member.institution}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span className="truncate">{member.department}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe className="h-4 w-4" />
                            <span>{member.country}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            <span className="truncate">{member.email}</span>
                          </div>
                          {member.isActive && (
                            <div className="flex items-center gap-2 text-sm text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              <span>Active</span>
                            </div>
                          )}
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {member.bio}
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => setSelectedMember(member)}
                          >
                            View Full Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Editorial Board Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {Object.values(displayBoard).flat().length}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {new Set(Object.values(displayBoard).flat().map(m => m.country)).size}
                    </div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {new Set(Object.values(displayBoard).flat().map(m => m.institution)).size}
                    </div>
                    <div className="text-sm text-muted-foreground">Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {Object.keys(displayBoard).length}
                    </div>
                    <div className="text-sm text-muted-foreground">Positions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{selectedMember.name}</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedMember(null)}
                >
                  ×
                </Button>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/avatars/${selectedMember.id}.jpg`} />
                  <AvatarFallback className="text-lg">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Badge className={`${positionColors[selectedMember.position as keyof typeof positionColors]} mb-2`}>
                    {positionTitles[selectedMember.position as keyof typeof positionTitles]}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {selectedMember.institution}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>{selectedMember.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4" />
                      <span>{selectedMember.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4" />
                      <span>{selectedMember.country}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Biography</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Editorial Information</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Started: {new Date(selectedMember.startDate).toLocaleDateString()}</div>
                    {selectedMember.endDate && (
                      <div>Ended: {new Date(selectedMember.endDate).toLocaleDateString()}</div>
                    )}
                    <div>Status: {selectedMember.isActive ? 'Active' : 'Inactive'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Editorial Board</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are always looking for qualified researchers and academics to join our editorial team. 
              If you are interested in contributing to the advancement of applied research, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <User className="mr-2 h-5 w-5" />
                Apply to Join
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Contact Editorial Office
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}