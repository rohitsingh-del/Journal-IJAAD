'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Search, 
  FileText, 
  Award,
  Globe,
  ChevronRight,
  Star,
  TrendingUp,
  Clock,
  Loader2
} from 'lucide-react'

interface Article {
  id: string
  title: string
  abstract: string
  doi: string
  viewCount: number
  downloadCount: number
  publishedDate: string
  authors: string[]
  issue?: {
    volume: number
    issue: number
  }
}

interface Announcement {
  id: string
  title: string
  content: string
  type: string
}

interface CallForPapers {
  id: string
  title: string
  description: string
  deadline: string
  themes: string[]
  specialNote: string
}

interface Indexing {
  id: string
  name: string
  description: string
  url: string
  logoUrl: string
}

interface Journal {
  id: string
  name: string
  abbreviation: string
  issnPrint: string
  issnOnline: string
  description: string
  mission: string
  scope: string
  openAccess: boolean
  publicationFrequency: string
  stats: {
    publishedArticles: number
    totalIssues: number
    totalViews: number
    totalDownloads: number
  }
}

export default function Home() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState<Article[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [callForPapers, setCallForPapers] = useState<CallForPapers | null>(null)
  const [indexing, setIndexing] = useState<Indexing[]>([])
  const [journal, setJournal] = useState<Journal | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesRes, announcementsRes, cfpRes, indexingRes, journalRes] = await Promise.all([
          fetch('/api/articles/latest'),
          fetch('/api/announcements'),
          fetch('/api/call-for-papers'),
          fetch('/api/indexing'),
          fetch('/api/journal')
        ])

        if (articlesRes.ok) {
          const articlesData = await articlesRes.json()
          setArticles(articlesData)
        }

        if (announcementsRes.ok) {
          const announcementsData = await announcementsRes.json()
          setAnnouncements(announcementsData)
        }

        if (cfpRes.ok) {
          const cfpData = await cfpRes.json()
          setCallForPapers(cfpData)
        }

        if (indexingRes.ok) {
          const indexingData = await indexingRes.json()
          setIndexing(indexingData)
        }

        if (journalRes.ok) {
          const journalData = await journalRes.json()
          setJournal(journalData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (announcements.length > 0) {
      const timer = setInterval(() => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [announcements.length])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  const displayAnnouncements = announcements.length > 0 ? announcements : [
    {
      title: "Welcome to IJAAD",
      content: "International Journal of Applied and Allied Disciplines",
      type: "general"
    }
  ]

  const displayArticles = articles.length > 0 ? articles : [
    {
      id: '1',
      title: "Machine Learning Applications in Healthcare: A Comprehensive Review",
      authors: ["Dr. Sarah Johnson", "Prof. Michael Chen"],
      abstract: "This review examines the current state of machine learning applications in healthcare, focusing on diagnostic accuracy, treatment optimization, and patient outcomes...",
      doi: "10.1234/ijaad.2024.001",
      viewCount: 245,
      downloadCount: 89,
      publishedDate: new Date().toISOString(),
      issue: { volume: 5, issue: 3 }
    },
    {
      id: '2',
      title: "Sustainable Urban Development: Challenges and Opportunities",
      authors: ["Dr. Elena Rodriguez", "Prof. James Wilson", "Dr. Aisha Patel"],
      abstract: "Urban sustainability remains a critical challenge in the 21st century. This study analyzes innovative approaches to sustainable city planning...",
      doi: "10.1234/ijaad.2024.002",
      viewCount: 189,
      downloadCount: 67,
      publishedDate: new Date().toISOString(),
      issue: { volume: 5, issue: 3 }
    },
    {
      id: '3',
      title: "Digital Transformation in Education: Post-Pandemic Perspectives",
      authors: ["Prof. David Kumar", "Dr. Maria Garcia"],
      abstract: "The COVID-19 pandemic accelerated digital transformation in education worldwide. This research explores the long-term impacts and future directions...",
      doi: "10.1234/ijaad.2024.003",
      viewCount: 156,
      downloadCount: 45,
      publishedDate: new Date().toISOString(),
      issue: { volume: 5, issue: 3 }
    }
  ]

  const displayCallForPapers = callForPapers || {
    title: "Now Accepting Submissions",
    deadline: "2024-12-31",
    themes: [
      "Applied Mathematics and Statistics",
      "Engineering and Technology",
      "Social Sciences and Humanities",
      "Business and Management",
      "Environmental Sciences",
      "Health and Medicine"
    ]
  }

  const displayIndexing = indexing.length > 0 ? indexing : [
    { name: "Scopus", status: "under-review" },
    { name: "Web of Science", status: "under-review" },
    { name: "DOAJ", status: "applied" },
    { name: "Google Scholar", status: "indexed" }
  ]

  const displayJournal = journal || {
    name: "International Journal of Applied and Allied Disciplines",
    abbreviation: "IJAAD",
    issnPrint: "1234-5678",
    issnOnline: "1234-5686",
    description: "A peer-reviewed, open-access journal dedicated to advancing research across applied sciences, engineering, technology, social sciences, management, humanities, and allied disciplines.",
    mission: "To provide a platform for researchers, academics, and practitioners to share their findings and contribute to the advancement of knowledge.",
    scope: "Applied sciences, engineering, technology, social sciences, management, humanities, and allied disciplines.",
    openAccess: true,
    publicationFrequency: "Quarterly",
    stats: {
      publishedArticles: 500,
      totalIssues: 15,
      totalViews: 50000,
      totalDownloads: 25000
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
                {displayJournal.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-4">
                {displayJournal.abbreviation}
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge className="bg-white/20 text-white border-white/30">
                  ISSN: {displayJournal.issnPrint} (Print)
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  ISSN: {displayJournal.issnOnline} (Online)
                </Badge>
              </div>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                {displayJournal.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-white shadow-lg">
                <FileText className="mr-2 h-5 w-5" />
                Submit Paper
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 shadow-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Current Issue
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 shadow-lg">
                <Search className="mr-2 h-5 w-5" />
                Search Articles
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Announcement Bar */}
      <section className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">
                {displayAnnouncements[currentAnnouncement].title}
              </span>
              <span className="text-sm opacity-75">
                - {displayAnnouncements[currentAnnouncement].content}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 count-up">
                {displayJournal.stats.publishedArticles}+
              </div>
              <div className="text-sm text-muted-foreground">Published Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 count-up">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 count-up">
                {displayJournal.stats.totalIssues}
              </div>
              <div className="text-sm text-muted-foreground">Volumes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 count-up">
                4.2
              </div>
              <div className="text-sm text-muted-foreground">Impact Factor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Latest Articles */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Latest Articles
                  </CardTitle>
                  <CardDescription>
                    Recently published research articles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {displayArticles.map((article) => (
                    <div key={article.id} className="border-b pb-6 last:border-b-0">
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {article.authors.join(', ')}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {article.abstract}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {article.viewCount} views
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {article.downloadCount} downloads
                          </span>
                          <span>DOI: {article.doi}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Call for Papers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Call for Papers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">{displayCallForPapers.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Deadline: {new Date(displayCallForPapers.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h5 className="font-medium mb-2">Themes:</h5>
                      <div className="flex flex-wrap gap-1">
                        {displayCallForPapers.themes.map((theme, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {theme}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">
                      Submit Your Paper
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Indexing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Indexing & Abstracting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {displayIndexing.map((badge, index) => (
                      <div key={index} className="text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 ${
                          badge.status === 'indexed' ? 'bg-green-100 text-green-600' :
                          badge.status === 'applied' ? 'bg-blue-100 text-blue-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          <Globe className="h-6 w-6" />
                        </div>
                        <div className="text-xs font-medium">{badge.name}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {badge.status?.replace('-', ' ') || 'active'}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-between">
                    Editorial Board
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    Author Guidelines
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    Archives
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    Contact Us
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Publish with IJAAD?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive platform for researchers to share their work with a global audience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Peer Review</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous double-blind peer review process ensuring quality publications
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  International readership and indexing in major databases
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Publication</h3>
                <p className="text-sm text-muted-foreground">
                  Efficient editorial process with timely publication decisions
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  Free access to all published articles for maximum visibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journal Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About {displayJournal.abbreviation}</h2>
              <p className="text-muted-foreground mb-4">
                {displayJournal.description}
              </p>
              <p className="text-muted-foreground mb-6">
                {displayJournal.mission}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read More
                </Button>
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Editorial Board
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">{displayJournal.publicationFrequency}</div>
                  <div className="text-sm text-muted-foreground">Publication Frequency</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">{displayJournal.openAccess ? 'Open Access' : 'Subscription'}</div>
                  <div className="text-sm text-muted-foreground">Access Model</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">English</div>
                  <div className="text-sm text-muted-foreground">Language</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}