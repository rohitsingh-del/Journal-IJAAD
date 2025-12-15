'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Download,
  Calendar,
  User,
  Eye,
  FileText,
  Share2,
  Quote,
  ExternalLink,
  Search,
  Filter,
  Clock,
  Star,
  TrendingUp,
  Loader2
} from 'lucide-react'

interface Article {
  id: string
  title: string
  abstract: string
  keywords: string
  doi: string
  pageStart: string
  pageEnd: string
  receivedDate: string
  acceptedDate: string
  publishedDate: string
  viewCount: number
  downloadCount: number
  status: string
  articleType: string
  authors: {
    id: string
    name: string
    email: string
    affiliation: string
    country: string
    orcid: string
    order: number
    isCorresponding: boolean
  }[]
  issue?: {
    id: string
    volume: number
    issue: number
    title: string
    description: string
    publishDate: string
    isPublished: boolean
  }
}

interface Issue {
  id: string
  volume: number
  issue: number
  title: string
  description: string
  publishDate: string
  isPublished: boolean
  articles: Article[]
}

export default function CurrentIssuePage() {
  const [loading, setLoading] = useState(true)
  const [currentIssue, setCurrentIssue] = useState<Issue | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    const fetchCurrentIssue = async () => {
      try {
        const response = await fetch('/api/current-issue')
        if (response.ok) {
          const issueData = await response.json()
          setCurrentIssue(issueData)
        }
      } catch (error) {
        console.error('Error fetching current issue:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCurrentIssue()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  const displayIssue = currentIssue || {
    id: '1',
    volume: 5,
    issue: 3,
    title: 'Advances in Applied Sciences and Technology',
    description: 'This issue features cutting-edge research across multiple disciplines, highlighting innovative approaches to real-world challenges.',
    publishDate: '2024-09-15',
    isPublished: true,
    articles: [
      {
        id: '1',
        title: 'Machine Learning Applications in Healthcare: A Comprehensive Review',
        abstract: 'This review examines the current state of machine learning applications in healthcare, focusing on diagnostic accuracy, treatment optimization, and patient outcomes. We analyze recent advancements, identify key challenges, and propose future research directions.',
        keywords: 'machine learning, healthcare, artificial intelligence, medical diagnosis, treatment optimization',
        doi: '10.1234/ijaad.2024.001',
        pageStart: '123',
        pageEnd: '145',
        receivedDate: '2024-03-15',
        acceptedDate: '2024-07-20',
        publishedDate: '2024-09-15',
        viewCount: 1245,
        downloadCount: 389,
        status: 'PUBLISHED',
        articleType: 'REVIEW_ARTICLE',
        authors: [
          {
            id: '1',
            name: 'Dr. Sarah Johnson',
            email: 's.johnson@mit.edu',
            affiliation: 'Massachusetts Institute of Technology',
            country: 'United States',
            orcid: '0000-0002-1234-5678',
            order: 1,
            isCorresponding: true
          },
          {
            id: '2',
            name: 'Prof. Michael Chen',
            email: 'm.chen@stanford.edu',
            affiliation: 'Stanford University',
            country: 'United States',
            orcid: '0000-0002-8765-4321',
            order: 2,
            isCorresponding: false
          }
        ]
      },
      {
        id: '2',
        title: 'Sustainable Urban Development: Challenges and Opportunities',
        abstract: 'Urban sustainability remains a critical challenge in the 21st century. This study analyzes innovative approaches to sustainable city planning, examining case studies from multiple continents and identifying best practices for urban development.',
        keywords: 'urban sustainability, city planning, sustainable development, green infrastructure, urban planning',
        doi: '10.1234/ijaad.2024.002',
        pageStart: '146',
        pageEnd: '178',
        receivedDate: '2024-04-10',
        acceptedDate: '2024-08-05',
        publishedDate: '2024-09-15',
        viewCount: 892,
        downloadCount: 267,
        status: 'PUBLISHED',
        articleType: 'RESEARCH_ARTICLE',
        authors: [
          {
            id: '3',
            name: 'Dr. Elena Rodriguez',
            email: 'e.rodriguez@cambridge.ac.uk',
            affiliation: 'University of Cambridge',
            country: 'United Kingdom',
            orcid: '0000-0002-3456-7890',
            order: 1,
            isCorresponding: true
          },
          {
            id: '4',
            name: 'Prof. James Wilson',
            email: 'j.wilson@harvard.edu',
            affiliation: 'Harvard University',
            country: 'United States',
            orcid: '0000-0002-2345-6789',
            order: 2,
            isCorresponding: false
          },
          {
            id: '5',
            name: 'Dr. Aisha Patel',
            email: 'a.patel@imperial.ac.uk',
            affiliation: 'Imperial College London',
            country: 'United Kingdom',
            orcid: '0000-0002-4567-8901',
            order: 3,
            isCorresponding: false
          }
        ]
      },
      {
        id: '3',
        title: 'Digital Transformation in Education: Post-Pandemic Perspectives',
        abstract: 'The COVID-19 pandemic accelerated digital transformation in education worldwide. This research explores the long-term impacts on teaching methodologies, student engagement, and educational outcomes, providing insights for future educational planning.',
        keywords: 'digital transformation, education, COVID-19, online learning, educational technology',
        doi: '10.1234/ijaad.2024.003',
        pageStart: '179',
        pageEnd: '198',
        receivedDate: '2024-05-20',
        acceptedDate: '2024-08-15',
        publishedDate: '2024-09-15',
        viewCount: 756,
        downloadCount: 234,
        status: 'PUBLISHED',
        articleType: 'RESEARCH_ARTICLE',
        authors: [
          {
            id: '6',
            name: 'Prof. David Kumar',
            email: 'd.kumar@ox.ac.uk',
            affiliation: 'University of Oxford',
            country: 'United Kingdom',
            orcid: '0000-0002-5678-9012',
            order: 1,
            isCorresponding: true
          },
          {
            id: '7',
            name: 'Dr. Maria Garcia',
            email: 'm.garcia@ubc.ca',
            affiliation: 'University of British Columbia',
            country: 'Canada',
            orcid: '0000-0002-6789-0123',
            order: 2,
            isCorresponding: false
          }
        ]
      }
    ]
  }

  const filteredArticles = filter === 'all' 
    ? displayIssue.articles 
    : displayIssue.articles.filter(article => article.articleType === filter)

  const articleTypeLabels = {
    'RESEARCH_ARTICLE': 'Research Article',
    'REVIEW_ARTICLE': 'Review Article',
    'SHORT_COMMUNICATION': 'Short Communication',
    'CASE_STUDY': 'Case Study',
    'EDITORIAL': 'Editorial',
    'LETTER_TO_EDITOR': 'Letter to Editor'
  }

  const getArticleTypeColor = (type: string) => {
    const colors = {
      'RESEARCH_ARTICLE': 'bg-blue-100 text-blue-800',
      'REVIEW_ARTICLE': 'bg-green-100 text-green-800',
      'SHORT_COMMUNICATION': 'bg-yellow-100 text-yellow-800',
      'CASE_STUDY': 'bg-purple-100 text-purple-800',
      'EDITORIAL': 'bg-red-100 text-red-800',
      'LETTER_TO_EDITOR': 'bg-orange-100 text-orange-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Volume {displayIssue.volume}, Issue {displayIssue.issue}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
              {displayIssue.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-6 max-w-3xl mx-auto">
              {displayIssue.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Published: {new Date(displayIssue.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{displayIssue.articles.length} Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Articles</h2>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Articles</option>
                    <option value="RESEARCH_ARTICLE">Research Articles</option>
                    <option value="REVIEW_ARTICLE">Review Articles</option>
                    <option value="SHORT_COMMUNICATION">Short Communications</option>
                    <option value="CASE_STUDY">Case Studies</option>
                    <option value="EDITORIAL">Editorials</option>
                    <option value="LETTER_TO_EDITOR">Letters to Editor</option>
                  </select>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Showing {filteredArticles.length} of {displayIssue.articles.length} articles
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="card-hover fade-in">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getArticleTypeColor(article.articleType)}>
                            {articleTypeLabels[article.articleType as keyof typeof articleTypeLabels]}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            DOI: {article.doi}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg hover:text-primary cursor-pointer transition-colors duration-200">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {article.authors.map(author => author.name).join(', ')}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {article.viewCount}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {article.downloadCount}
                        </span>
                        <span>Pages: {article.pageStart}-{article.pageEnd}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Abstract */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Abstract
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.abstract}
                        </p>
                      </div>

                      {/* Keywords */}
                      <div>
                        <h4 className="font-semibold mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {article.keywords.split(', ').map((keyword, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {keyword.trim()}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Authors */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Authors
                        </h4>
                        <div className="space-y-2">
                          {article.authors.map((author) => (
                            <div key={author.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <div className="flex-1">
                                <div className="font-medium text-sm">{author.name}</div>
                                <div className="text-xs text-muted-foreground">{author.affiliation}</div>
                                <div className="text-xs text-muted-foreground">{author.country}</div>
                              </div>
                              {author.isCorresponding && (
                                <Badge variant="outline" className="text-xs">
                                  Corresponding Author
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-4 border-t">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Online
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Share2 className="h-4 w-4 mr-2" />
                          Cite
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Issue Statistics */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {displayIssue.articles.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Articles</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {displayIssue.articles.reduce((sum, article) => sum + article.viewCount, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {displayIssue.articles.reduce((sum, article) => sum + article.downloadCount, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Downloads</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {new Set(displayIssue.articles.map(a => a.authors.map(author => author.country).flat())).size}
                  </div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}