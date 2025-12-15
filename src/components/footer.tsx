'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { 
  BookOpen, 
  Users, 
  FileText,
  Shield,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'About',
      links: [
        { href: '/about', label: 'About IJAAD' },
        { href: '/editorial-board', label: 'Editorial Board' },
        { href: '/indexing', label: 'Indexing & Abstracting' },
        { href: '/contact', label: 'Contact Us' }
      ]
    },
    {
      title: 'For Authors',
      links: [
        { href: '/author-guidelines', label: 'Author Guidelines' },
        { href: '/call-for-papers', label: 'Call for Papers' },
        { href: '/submit', label: 'Submit Manuscript' },
        { href: '/fees', label: 'Publication Fees' },
        { href: '/special-issues', label: 'Special Issues' }
      ]
    },
    {
      title: 'For Reviewers',
      links: [
        { href: '/reviewers', label: 'Reviewer Guidelines' },
        { href: '/reviewer-login', label: 'Reviewer Login' },
        { href: '/become-reviewer', label: 'Become a Reviewer' },
        { href: '/reviewer-resources', label: 'Reviewer Resources' }
      ]
    },
    {
      title: 'Policies',
      links: [
        { href: '/publication-ethics', label: 'Publication Ethics' },
        { href: '/peer-review-policy', label: 'Peer Review Policy' },
        { href: 'plagiarism-policy', label: 'Plagiarism Policy' },
        { href: 'copyright', label: 'Copyright & Licenses' },
        { href: 'privacy-policy', label: 'Privacy Policy' },
        { href: 'terms-of-service', label: 'Terms of Service' }
      ]
    }
  ]

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Youtube, label: 'YouTube' }
  ]

  const accreditationBadges = [
    { name: 'ORCID', icon: '🆔' },
    { name: 'Crossref', icon: '🔗' },
    { name: 'COPE', icon: '⚖️' },
    { name: 'DOAJ', icon: '📚' }
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>editorial@ijaad.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Academic Lane, Cambridge, MA 02142</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left Side - Copyright */}
          <div className="text-sm text-primary-foreground/80">
            <p>&copy; {currentYear} International Journal of Applied and Allied Disciplines (IJAAD). All rights reserved.</p>
            <p className="mt-2">Published under Creative Commons Attribution 4.0 International License</p>
          </div>

          {/* Center - Accreditation Badges */}
          <div className="flex items-center space-x-4">
            {accreditationBadges.map((badge) => (
              <div key={badge.name} className="flex items-center space-x-2 text-sm bg-primary-foreground/10 px-3 py-2 rounded-lg">
                <span className="text-lg">{badge.icon}</span>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 p-2 rounded-full bg-primary-foreground/10"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-primary-foreground/80">
            <div>
              <h4 className="font-semibold mb-3 text-primary-foreground">ISSN Information</h4>
              <p>Print: 1234-5678</p>
              <p>Online: 1234-5686</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary-foreground">Publication Frequency</h4>
              <p>Quarterly (4 issues per year)</p>
              <p>March, June, September, December</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary-foreground">Open Access</h4>
              <p>Immediate free access to all articles</p>
              <p>No subscription fees for readers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}