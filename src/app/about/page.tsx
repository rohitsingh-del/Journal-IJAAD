'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Users, 
  Target,
  Award,
  Globe,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Eye,
  Zap
} from 'lucide-react'

interface Journal {
  id: string
  name: string
  abbreviation: string
  issnPrint: string
  issnOnline: string
  description: string
  mission: string
  scope: string
  peerReviewPolicy: string
  publicationEthics: string
  openAccess: boolean
  publicationFrequency: string
}

export default function AboutPage() {
  const [loading, setLoading] = useState(true)
  const [journal, setJournal] = useState<Journal | null>(null)

  useEffect(() => {
    const fetchJournalData = async () => {
      try {
        const response = await fetch('/api/journal')
        if (response.ok) {
          const journalData = await response.json()
          setJournal(journalData)
        }
      } catch (error) {
        console.error('Error fetching journal data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJournalData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const displayJournal = journal || {
    name: "International Journal of Applied and Allied Disciplines",
    abbreviation: "IJAAD",
    issnPrint: "1234-5678",
    issnOnline: "1234-5686",
    description: "A peer-reviewed, open-access journal dedicated to advancing research across applied sciences, engineering, technology, social sciences, management, humanities, and allied disciplines.",
    mission: "To provide a platform for researchers, academics, and practitioners to share their findings and contribute to the advancement of knowledge in applied sciences and allied disciplines.",
    scope: "Applied sciences, engineering, technology, social sciences, management, humanities, and allied disciplines.",
    peerReviewPolicy: "IJAAD follows a double-blind peer review process to ensure the highest quality and integrity of published research.",
    publicationEthics: "IJAAD is committed to maintaining the highest standards of publication ethics and follows the guidelines of the Committee on Publication Ethics (COPE).",
    openAccess: true,
    publicationFrequency: "Quarterly"
  }

  const aimsAndScope = [
    {
      title: "Applied Sciences",
      description: "Research applying scientific principles to practical problems and real-world applications.",
      topics: ["Applied Mathematics", "Applied Physics", "Applied Chemistry", "Environmental Sciences"]
    },
    {
      title: "Engineering and Technology",
      description: "Innovative solutions and advancements in engineering fields and technological applications.",
      topics: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Science", "Information Technology"]
    },
    {
      title: "Social Sciences",
      description: "Studies addressing human society, social relationships, and contemporary social issues.",
      topics: ["Sociology", "Psychology", "Education", "Political Science", "Economics"]
    },
    {
      title: "Management and Business",
      description: "Research in business administration, management practices, and organizational studies.",
      topics: ["Business Management", "Marketing", "Finance", "Human Resources", "Strategic Management"]
    },
    {
      title: "Humanities and Arts",
      description: "Scholarly work in humanities, cultural studies, and artistic research.",
      topics: ["Literature", "Philosophy", "History", "Cultural Studies", "Linguistics"]
    },
    {
      title: "Health and Medicine",
      description: "Applied research in healthcare, medical sciences, and public health.",
      topics: ["Public Health", "Healthcare Management", "Medical Technology", "Biomedical Research"]
    }
  ]

  const editorialFeatures = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Rigorous Peer Review",
      description: "Double-blind peer review process ensuring quality and integrity of published research."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Publication",
      description: "Efficient editorial process with timely publication decisions and rapid dissemination."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "International readership and indexing in major academic databases worldwide."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Open Access",
      description: "Free access to all published articles ensuring maximum visibility and impact."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Ethical Standards",
      description: "Strict adherence to publication ethics and guidelines from COPE and other bodies."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation Focus",
      description: "Emphasis on cutting-edge research and innovative applications across disciplines."
    }
  ]

  const articleTypes = [
    {
      type: "Research Articles",
      description: "Original research findings with comprehensive methodology and analysis.",
      length: "3000-8000 words"
    },
    {
      type: "Review Articles",
      description: "Comprehensive reviews of current research and developments in specific fields.",
      length: "5000-12000 words"
    },
    {
      type: "Short Communications",
      description: "Brief reports of preliminary findings or novel approaches.",
      length: "1500-3000 words"
    },
    {
      type: "Case Studies",
      description: "Detailed analysis of specific cases, applications, or implementations.",
      length: "2000-5000 words"
    },
    {
      type: "Editorials",
      description: "Expert opinions and perspectives on current topics and issues.",
      length: "1000-2000 words"
    },
    {
      type: "Letters to Editor",
      description: "Responses to published articles or comments on relevant topics.",
      length: "500-1500 words"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About {displayJournal.abbreviation}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              {displayJournal.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>ISSN: {displayJournal.issnPrint} (Print)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>ISSN: {displayJournal.issnOnline} (Online)</span>
              </div>
            </div>
            <p className="text-lg text-slate-200 leading-relaxed">
              {displayJournal.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mission" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
              <TabsTrigger value="scope">Scope & Coverage</TabsTrigger>
              <TabsTrigger value="editorial">Editorial Process</TabsTrigger>
              <TabsTrigger value="ethics">Publication Ethics</TabsTrigger>
            </TabsList>

            {/* Mission & Vision */}
            <TabsContent value="mission" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {displayJournal.mission}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To become a leading international platform for interdisciplinary research, 
                      fostering collaboration between applied sciences and allied disciplines, and 
                      contributing to global knowledge advancement and practical solutions to real-world challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {editorialFeatures.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="text-primary">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Scope & Coverage */}
            <TabsContent value="scope" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Journal Scope
                  </CardTitle>
                  <CardDescription>
                    Comprehensive coverage across multiple disciplines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {displayJournal.scope}
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aimsAndScope.map((area, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{area.title}</CardTitle>
                          <CardDescription>{area.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {area.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6">Article Types</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {articleTypes.map((articleType, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{articleType.type}</h4>
                          <Badge variant="outline">{articleType.length}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {articleType.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Editorial Process */}
            <TabsContent value="editorial" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Editorial Process
                  </CardTitle>
                  <CardDescription>
                    Our comprehensive editorial workflow ensures quality and integrity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Submission Process</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Authors submit manuscripts through the online portal</li>
                        <li>2. Initial screening by the editorial office</li>
                        <li>3. Assignment to appropriate associate editor</li>
                        <li>4. Peer review process initiation</li>
                        <li>5. Reviewer recommendations and editorial decision</li>
                        <li>6. Author notification and revision process</li>
                        <li>7. Final acceptance and publication</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">Peer Review Policy</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {displayJournal.peerReviewPolicy}
                      </p>
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium">Review Process Features:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Double-blind review</li>
                            <li>• Minimum 2 reviewers per article</li>
                            <li>• 2-4 week review timeline</li>
                            <li>• Detailed reviewer feedback</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Quality Assurance:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Plagiarism screening</li>
                            <li>• Editorial oversight</li>
                            <li>• Statistical review when needed</li>
                            <li>• Ethical compliance check</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">Publication Timeline</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">1-2</div>
                          <div className="text-xs text-muted-foreground">Weeks Initial Review</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">2-4</div>
                          <div className="text-xs text-muted-foreground">Weeks Peer Review</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">1-2</div>
                          <div className="text-xs text-muted-foreground">Weeks Revision</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">1</div>
                          <div className="text-xs text-muted-foreground">Week Publication</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Publication Ethics */}
            <TabsContent value="ethics" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Publication Ethics
                  </CardTitle>
                  <CardDescription>
                    Commitment to the highest ethical standards in academic publishing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Ethical Guidelines</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {displayJournal.publicationEthics}
                      </p>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">Author Responsibilities</h5>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Originality and authenticity of work</li>
                          <li>• Proper citation and acknowledgment</li>
                          <li>• Disclosure of conflicts of interest</li>
                          <li>• Data accuracy and availability</li>
                          <li>• Authorship criteria compliance</li>
                          <li>• Duplicate publication avoidance</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">Editor Responsibilities</h5>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Fair and unbiased review process</li>
                          <li>• Confidentiality maintenance</li>
                          <li>• Conflict of interest disclosure</li>
                          <li>• Publication decision integrity</li>
                          <li>• Error correction policy</li>
                          <li>• Academic freedom protection</li>
                        </ul>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="font-semibold mb-3">Reviewer Responsibilities</h5>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h6 className="font-medium mb-2">Confidentiality</h6>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Manuscript confidentiality</li>
                            <li>• No use of unpublished data</li>
                            <li>• Secure document handling</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">Objectivity</h6>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Unbiased evaluation</li>
                            <li>• Constructive feedback</li>
                            <li>• Conflict disclosure</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">Timeliness</h6>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Prompt response</li>
                            <li>• Timely submission</li>
                            <li>• Availability notification</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="font-semibold mb-3">Malpractice Statement</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        IJAAD has a zero-tolerance policy for publication malpractice, including plagiarism, 
                        data fabrication, falsification, duplicate publication, and authorship issues. 
                        All allegations are investigated thoroughly and appropriate actions are taken according 
                        to COPE guidelines.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Academic Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Become part of a growing network of researchers, academics, and practitioners 
              dedicated to advancing knowledge across applied disciplines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Submit Your Research
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                Join as Reviewer
              </Button>
              <Button size="lg" variant="outline">
                <Star className="mr-2 h-5 w-5" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}