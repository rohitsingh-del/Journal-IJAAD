'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileText, 
  Download,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Target,
  Users,
  Globe,
  Shield,
  Clock,
  Award,
  Eye,
  Copy,
  Type,
  Image,
  Table,
  Upload
} from 'lucide-react'

export default function AuthorGuidelinesPage() {
  const manuscriptTypes = [
    {
      type: "Research Articles",
      description: "Original research findings with comprehensive methodology and analysis",
      length: "3000-8000 words",
      abstract: "150-250 words",
      references: "30-50",
      figures: "Up to 8",
      tables: "Up to 6"
    },
    {
      type: "Review Articles",
      description: "Comprehensive reviews of current research and developments",
      length: "5000-12000 words",
      abstract: "200-350 words",
      references: "50-150",
      figures: "Up to 12",
      tables: "Up to 8"
    },
    {
      type: "Short Communications",
      description: "Brief reports of preliminary findings or novel approaches",
      length: "1500-3000 words",
      abstract: "100-150 words",
      references: "15-25",
      figures: "Up to 4",
      tables: "Up to 3"
    },
    {
      type: "Case Studies",
      description: "Detailed analysis of specific cases or applications",
      length: "2000-5000 words",
      abstract: "150-200 words",
      references: "20-40",
      figures: "Up to 6",
      tables: "Up to 4"
    },
    {
      type: "Editorials",
      description: "Expert opinions on current topics and issues",
      length: "1000-2000 words",
      abstract: "Not required",
      references: "10-20",
      figures: "Up to 2",
      tables: "Up to 2"
    },
    {
      type: "Letters to Editor",
      description: "Responses to published articles or comments on relevant topics",
      length: "500-1500 words",
      abstract: "Not required",
      references: "5-15",
      figures: "Up to 2",
      tables: "Up to 1"
    }
  ]

  const preparationGuidelines = [
    {
      title: "General Formatting",
      icon: <Type className="h-5 w-5" />,
      items: [
        "Use Microsoft Word (.docx) or LaTeX format",
        "Font: Times New Roman, 12-point",
        "Double spacing throughout",
        "1-inch margins on all sides",
        "Page numbers in bottom right corner",
        "Continuous line numbering"
      ]
    },
    {
      title: "Title Page",
      icon: <FileText className="h-5 w-5" />,
      items: [
        "Full title of the manuscript",
        "Running title (max 50 characters)",
        "Author names and affiliations",
        "Corresponding author details",
        "Word count (excluding references)",
        "Conflict of interest statement"
      ]
    },
    {
      title: "Abstract and Keywords",
      icon: <Target className="h-5 w-5" />,
      items: [
        "Structured abstract (Background, Methods, Results, Conclusion)",
        "Word count as per article type",
        "5-8 relevant keywords",
        "Keywords should be specific and searchable",
        "Avoid abbreviations in keywords",
        "Use MeSH terms for medical articles"
      ]
    },
    {
      title: "Main Text Structure",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        "Introduction with clear objectives",
        "Comprehensive literature review",
        "Detailed methodology section",
        "Results with appropriate statistical analysis",
        "Discussion linking to existing literature",
        "Conclusion with practical implications",
        "Limitations of the study"
      ]
    }
  ]

  const figureTableGuidelines = [
    {
      title: "Figures",
      icon: <Image className="h-5 w-5" />,
      items: [
        "High-resolution images (300 DPI minimum)",
        "Acceptable formats: TIFF, JPEG, PNG",
        "Figures numbered consecutively",
        "Descriptive captions below each figure",
        "Clear labels and legends",
        "Consistent style and colors",
        "Separate files for each figure"
      ]
    },
    {
      title: "Tables",
      icon: <Table className="h-5 w-5" />,
      items: [
        "Tables numbered consecutively",
        "Brief descriptive titles",
        "Clear column headings",
        "Consistent formatting",
        "No vertical lines",
        "Footnotes for explanations",
        "Supplied in editable format"
      ]
    }
  ]

  const referenceStyles = [
    {
      style: "APA 7th Edition",
      description: "American Psychological Association style",
      example: "Johnson, S. (2024). Machine learning in healthcare. Journal of Applied Sciences, 15(3), 123-145."
    },
    {
      style: "MLA 9th Edition",
      description: "Modern Language Association style",
      example: "Johnson, Sarah. 'Machine Learning in Healthcare.' Journal of Applied Sciences, vol. 15, no. 3, 2024, pp. 123-145."
    },
    {
      style: "Chicago 17th Edition",
      description: "Chicago Manual of Style",
      example: "Johnson, Sarah. 2024. 'Machine Learning in Healthcare.' Journal of Applied Sciences 15 (3): 123-145."
    },
    {
      style: "IEEE",
      description: "Institute of Electrical and Electronics Engineers style",
      example: "[1] S. Johnson, 'Machine learning in healthcare,' J. Appl. Sci., vol. 15, no. 3, pp. 123-145, 2024."
    }
  ]

  const ethicalGuidelines = [
    {
      title: "Authorship Criteria",
      icon: <Users className="h-5 w-5" />,
      items: [
        "Substantial contributions to conception/design",
        "Drafting or critically revising the work",
        "Final approval of the version published",
        "Agreement to be accountable for all aspects",
        "All authors must approve final submission",
        "Changes in authorship require written consent"
      ]
    },
    {
      title: "Plagiarism Policy",
      icon: <Shield className="h-5 w-5" />,
      items: [
        "All submissions checked for plagiarism",
        "Similarity index must be below 15%",
        "Proper citation of all sources",
        "No self-plagiarism or text recycling",
        "Paraphrasing must be properly cited",
        "Violations result in immediate rejection"
      ]
    },
    {
      title: "Data Integrity",
      icon: <Eye className="h-5 w-5" />,
      items: [
        "Accurate and honest data presentation",
        "No fabrication or falsification of data",
        "Statistical methods must be appropriate",
        "Raw data available upon request",
        "Data deposition in repositories when required",
        "Transparent reporting of methodology"
      ]
    },
    {
      title: "Conflict of Interest",
      icon: <AlertCircle className="h-5 w-5" />,
      items: [
        "Declare all potential conflicts",
        "Financial and non-financial interests",
        "Funding sources must be disclosed",
        "Institutional affiliations listed",
        "Personal relationships disclosed",
        "Statements included in manuscript"
      ]
    }
  ]

  const submissionProcess = [
    {
      step: "1",
      title: "Preparation",
      description: "Prepare manuscript according to guidelines",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Registration",
      description: "Create account on submission portal",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Submission",
      description: "Upload manuscript and required documents",
      icon: <Upload className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Review",
      description: "Initial screening and peer review process",
      icon: <Eye className="h-6 w-6" />
    },
    {
      step: "5",
      title: "Decision",
      description: "Editorial decision and author notification",
      icon: <Award className="h-6 w-6" />
    },
    {
      step: "6",
      title: "Publication",
      description: "Final acceptance and online publication",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Author Guidelines
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Comprehensive guide for manuscript preparation and submission
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download Template
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <FileText className="mr-2 h-5 w-5" />
                Submit Manuscript
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="types" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="types">Article Types</TabsTrigger>
              <TabsTrigger value="preparation">Preparation</TabsTrigger>
              <TabsTrigger value="figures">Figures & Tables</TabsTrigger>
              <TabsTrigger value="references">References</TabsTrigger>
              <TabsTrigger value="ethics">Ethics</TabsTrigger>
            </TabsList>

            {/* Article Types */}
            <TabsContent value="types" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Article Types
                    </CardTitle>
                    <CardDescription>
                      Choose the appropriate article type for your research
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {manuscriptTypes.map((type, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{type.type}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="font-medium">Length:</span>
                              <div className="text-muted-foreground">{type.length}</div>
                            </div>
                            <div>
                              <span className="font-medium">Abstract:</span>
                              <div className="text-muted-foreground">{type.abstract}</div>
                            </div>
                            <div>
                              <span className="font-medium">References:</span>
                              <div className="text-muted-foreground">{type.references}</div>
                            </div>
                            <div>
                              <span className="font-medium">Figures:</span>
                              <div className="text-muted-foreground">{type.figures}</div>
                            </div>
                          </div>
                          <Button size="sm" className="w-full">
                            Select This Type
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Preparation Guidelines */}
            <TabsContent value="preparation" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Manuscript Preparation
                    </CardTitle>
                    <CardDescription>
                      Detailed guidelines for formatting your manuscript
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {preparationGuidelines.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {section.icon}
                          {section.title}
                        </CardTitle>
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
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {submissionProcess.map((step, index) => (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            {step.icon}
                          </div>
                          <div className="text-sm font-medium mb-1">{step.step}. {step.title}</div>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Figures & Tables */}
            <TabsContent value="figures" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="h-5 w-5" />
                      Figures & Tables Guidelines
                    </CardTitle>
                    <CardDescription>
                      Specifications for visual elements in your manuscript
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {figureTableGuidelines.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {section.icon}
                          {section.title}
                        </CardTitle>
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
                    <CardTitle>File Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Image Files</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Resolution: 300 DPI minimum</li>
                          <li>• Format: TIFF, JPEG, PNG</li>
                          <li>• Color mode: RGB or CMYK</li>
                          <li>• Compression: Lossless preferred</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Table Files</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Format: Word, Excel, or CSV</li>
                          <li>• No merged cells</li>
                          <li>• Clear headings</li>
                          <li>• Consistent formatting</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* References */}
            <TabsContent value="references" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Copy className="h-5 w-5" />
                      Reference Styles
                    </CardTitle>
                    <CardDescription>
                      Choose and follow the appropriate citation style
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {referenceStyles.map((style, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{style.style}</CardTitle>
                        <CardDescription>{style.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium mb-2">Example:</h5>
                            <div className="p-3 bg-muted rounded text-sm font-mono">
                              {style.example}
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="w-full">
                            Use This Style
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>General Reference Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">In-Text Citations</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Use author-date format (APA, MLA)</li>
                          <li>• Numbered citations (IEEE, Vancouver)</li>
                          <li>• Include page numbers for quotes</li>
                          <li>• Use 'et al.' for 3+ authors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Reference List</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Alphabetical order (author-date)</li>
                          <li>• Numerical order (numbered)</li>
                          <li>• Complete publication information</li>
                          <li>• DOI links when available</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Ethics */}
            <TabsContent value="ethics" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Publication Ethics
                    </CardTitle>
                    <CardDescription>
                      Ethical guidelines for authors and researchers
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {ethicalGuidelines.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {section.icon}
                          {section.title}
                        </CardTitle>
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
                    <CardTitle>Consequences of Misconduct</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <AlertCircle className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="font-semibold mb-1">Rejection</h4>
                        <p className="text-sm text-muted-foreground">
                          Immediate rejection of manuscript
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <h4 className="font-semibold mb-1">Ban</h4>
                        <p className="text-sm text-muted-foreground">
                          Temporary or permanent publication ban
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Globe className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold mb-1">Notification</h4>
                        <p className="text-sm text-muted-foreground">
                          Notification to institutions and funders
                        </p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Submit?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow these guidelines to ensure your manuscript meets our standards and 
              increases your chances of acceptance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <FileText className="mr-2 h-5 w-5" />
                Submit Manuscript
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Template
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