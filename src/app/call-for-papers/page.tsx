'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Clock,
  FileText,
  Target,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  Star,
  Users,
  Globe,
  Award,
  BookOpen,
  Loader2
} from 'lucide-react'

interface CallForPapers {
  id: string
  title: string
  description: string
  deadline: string
  themes: string[]
  specialNote: string
}

interface SpecialIssue {
  id: string
  title: string
  description: string
  guestEditors: string
  deadline: string
  publishDate: string
  isActive: boolean
}

export default function CallForPapersPage() {
  const [loading, setLoading] = useState(true)
  const [callForPapers, setCallForPapers] = useState<CallForPapers | null>(null)
  const [specialIssues, setSpecialIssues] = useState<SpecialIssue[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cfpRes, specialRes] = await Promise.all([
          fetch('/api/call-for-papers'),
          fetch('/api/special-issues')
        ])

        if (cfpRes.ok) {
          const cfpData = await cfpRes.json()
          setCallForPapers(cfpData)
        }

        if (specialRes.ok) {
          const specialData = await specialRes.json()
          setSpecialIssues(specialData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  const displayCallForPapers = callForPapers || {
    id: '1',
    title: "Call for Papers: 2024 Special Issues",
    description: "IJAAD invites submissions for our upcoming special issues covering cutting-edge research in applied sciences and allied disciplines.",
    deadline: "2024-12-31",
    themes: [
      "Artificial Intelligence and Machine Learning Applications",
      "Sustainable Development and Environmental Sciences",
      "Digital Transformation in Education",
      "Healthcare Innovation and Medical Technology",
      "Social Impact of Technology",
      "Advanced Engineering Solutions"
    ],
    specialNote: "Authors of selected papers will receive a 50% discount on publication fees."
  }

  const displaySpecialIssues = specialIssues.length > 0 ? specialIssues : [
    {
      id: '1',
      title: "AI Applications in Healthcare",
      description: "Exploring the transformative impact of artificial intelligence on healthcare delivery, diagnostics, and patient care.",
      guestEditors: "Dr. Sarah Johnson, Prof. Michael Chen",
      deadline: "2024-11-30",
      publishDate: "2025-03-01",
      isActive: true
    },
    {
      id: '2',
      title: "Sustainable Urban Development",
      description: "Innovative approaches to creating sustainable, resilient, and livable cities for the future.",
      guestEditors: "Dr. Elena Rodriguez, Prof. James Wilson",
      deadline: "2024-12-15",
      publishDate: "2025-04-01",
      isActive: true
    },
    {
      id: '3',
      title: "Digital Education Transformation",
      description: "Examining the evolution of education in the digital age and its implications for learning outcomes.",
      guestEditors: "Prof. David Kumar, Dr. Maria Garcia",
      deadline: "2025-01-31",
      publishDate: "2025-05-01",
      isActive: true
    }
  ]

  const submissionGuidelines = [
    {
      title: "Manuscript Preparation",
      items: [
        "Manuscripts should be original and not published elsewhere",
        "Word count: 3000-8000 words for research articles",
        "Format: Microsoft Word (.docx) or LaTeX",
        "Font: Times New Roman, 12-point, double-spaced",
        "Include abstract of 150-250 words",
        "Provide 5-8 keywords",
        "Follow APA citation style"
      ]
    },
    {
      title: "Structure Requirements",
      items: [
        "Title page with author information",
        "Abstract with keywords",
        "Introduction with literature review",
        "Methodology section",
        "Results and discussion",
        "Conclusion and implications",
        "References",
        "Appendices (if applicable)"
      ]
    },
    {
      title: "Formatting Guidelines",
      items: [
        "Use 1-inch margins on all sides",
        "Number pages consecutively",
        "Use headings and subheadings",
        "Include tables and figures with captions",
        "Ensure high-resolution images (300 DPI)",
        "Provide figure files separately"
      ]
    },
    {
      title: "Ethical Requirements",
      items: [
        "Obtain necessary permissions for copyrighted material",
        "Include conflict of interest statements",
        "Provide data availability statements",
        "Ensure proper authorship attribution",
        "Follow ethical research guidelines"
      ]
    }
  ]

  const articleTypes = [
    {
      type: "Research Articles",
      description: "Original research with comprehensive methodology and analysis",
      length: "3000-8000 words",
      fee: "$500"
    },
    {
      type: "Review Articles",
      description: "Comprehensive reviews of current research developments",
      length: "5000-12000 words",
      fee: "$600"
    },
    {
      type: "Short Communications",
      description: "Brief reports of preliminary findings or novel approaches",
      length: "1500-3000 words",
      fee: "$300"
    },
    {
      type: "Case Studies",
      description: "Detailed analysis of specific cases or applications",
      length: "2000-5000 words",
      fee: "$400"
    },
    {
      type: "Editorials",
      description: "Expert opinions on current topics and issues",
      length: "1000-2000 words",
      fee: "Waived"
    }
  ]

  const getTimeRemaining = (deadline: string) => {
    const now = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return { text: "Closed", variant: "destructive" as const }
    if (diffDays <= 30) return { text: `${diffDays} days left`, variant: "destructive" as const }
    if (diffDays <= 60) return { text: `${diffDays} days left`, variant: "default" as const }
    return { text: `${diffDays} days left`, variant: "secondary" as const }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Call for Papers
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Submit your research to IJAAD
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calendar className="h-6 w-6" />
              <span className="text-lg">
                Deadline: {new Date(displayCallForPapers.deadline).toLocaleDateString()}
              </span>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Upload className="mr-2 h-5 w-5" />
              Submit Your Paper
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="general" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General Call</TabsTrigger>
              <TabsTrigger value="special">Special Issues</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              <TabsTrigger value="fees">Article Types & Fees</TabsTrigger>
            </TabsList>

            {/* General Call for Papers */}
            <TabsContent value="general" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {displayCallForPapers.title}
                  </CardTitle>
                  <CardDescription>
                    Submit your research for consideration in our upcoming issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {displayCallForPapers.description}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">Themes and Topics</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {displayCallForPapers.themes.map((theme, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{theme}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Submission Deadline</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{new Date(displayCallForPapers.deadline).toLocaleDateString()}</span>
                          <Badge variant={getTimeRemaining(displayCallForPapers.deadline).variant}>
                            {getTimeRemaining(displayCallForPapers.deadline).text}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Publication Timeline</h4>
                        <p className="text-sm text-muted-foreground">
                          Accepted papers will be published within 4-6 weeks of final approval.
                        </p>
                      </div>
                    </div>

                    {displayCallForPapers.specialNote && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-2">Special Note</h4>
                          <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-blue-800">
                              {displayCallForPapers.specialNote}
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    <Separator />

                    <div className="flex gap-4">
                      <Button size="lg">
                        <Upload className="mr-2 h-4 w-4" />
                        Submit Manuscript
                      </Button>
                      <Button size="lg" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Special Issues */}
            <TabsContent value="special" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Special Issues
                    </CardTitle>
                    <CardDescription>
                      Themed issues focusing on cutting-edge research topics
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displaySpecialIssues.map((issue) => (
                    <Card key={issue.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{issue.title}</CardTitle>
                          <Badge variant={getTimeRemaining(issue.deadline).variant}>
                            {getTimeRemaining(issue.deadline).text}
                          </Badge>
                        </div>
                        <CardDescription>{issue.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{issue.guestEditors}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Deadline: {new Date(issue.deadline).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4" />
                            <span>Publication: {new Date(issue.publishDate).toLocaleDateString()}</span>
                          </div>
                          <Button size="sm" className="w-full">
                            Submit to Special Issue
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Submission Guidelines */}
            <TabsContent value="guidelines" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Submission Guidelines
                    </CardTitle>
                    <CardDescription>
                      Detailed instructions for manuscript preparation and submission
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {submissionGuidelines.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Submission Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">Prepare</h4>
                        <p className="text-sm text-muted-foreground">
                          Format your manuscript according to guidelines
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Upload className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">Submit</h4>
                        <p className="text-sm text-muted-foreground">
                          Upload through our online portal
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">Review</h4>
                        <p className="text-sm text-muted-foreground">
                          Peer review process begins
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">Publish</h4>
                        <p className="text-sm text-muted-foreground">
                          Accepted papers are published
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Article Types & Fees */}
            <TabsContent value="fees" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Article Types & Publication Fees
                    </CardTitle>
                    <CardDescription>
                      Choose the appropriate article type for your research
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articleTypes.map((articleType, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{articleType.type}</CardTitle>
                          <Badge variant="outline">{articleType.length}</Badge>
                        </div>
                        <CardDescription>{articleType.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Publication Fee:</span>
                            <span className="font-semibold">{articleType.fee}</span>
                          </div>
                          <Button size="sm" className="w-full">
                            Submit {articleType.type}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Fee Waivers and Discounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Fee Waivers Available</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Authors from low-income countries</li>
                          <li>• Graduate students with limited funding</li>
                          <li>• Reviewers who have completed 3+ reviews</li>
                          <li>• Special issue guest editors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Discount Programs</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 50% discount for special issue submissions</li>
                          <li>• 25% discount for multiple submissions</li>
                          <li>• 30% discount for institutional members</li>
                          <li>• 20% discount for early-career researchers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Submit Your Research?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of researchers and contribute to the advancement of knowledge 
              in applied sciences and allied disciplines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Upload className="mr-2 h-5 w-5" />
                Submit Manuscript
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Guidelines
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                Contact Editorial Office
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}