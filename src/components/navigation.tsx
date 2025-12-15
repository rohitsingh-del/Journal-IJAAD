'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  Search, 
  FileText, 
  BookOpen, 
  Users, 
  Archive,
  UserCheck,
  Mail,
  ChevronDown
} from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/about', label: 'About', icon: null },
    { href: '/editorial-board', label: 'Editorial Board', icon: Users },
    { href: '/current-issue', label: 'Current Issue', icon: BookOpen },
    { href: '/archives', label: 'Archives', icon: Archive },
    { href: '/author-guidelines', label: 'For Authors', icon: FileText },
    { href: '/reviewers', label: 'Reviewers', icon: UserCheck },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IJAAD</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:block">
                International Journal of Applied and Allied Disciplines
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center space-x-2">
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64"
                      autoFocus
                    />
                    <Button type="submit" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="text-foreground hover:text-primary"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Submit Paper Button */}
              <Button 
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 hidden sm:flex"
              >
                <Link href="/submit" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Submit Paper</span>
                </Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between py-4 border-b">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">IJAAD</span>
                        </div>
                        <span className="font-semibold text-sm">IJAAD</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-4 border-b">
                      <form onSubmit={handleSearch} className="space-y-2">
                        <Input
                          type="search"
                          placeholder="Search articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button type="submit" className="w-full">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </form>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-4">
                      <div className="space-y-2">
                        {navItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors duration-200"
                          >
                            {item.icon && <item.icon className="h-4 w-4" />}
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        ))}
                      </div>

                      {/* Mobile Submit Button */}
                      <div className="px-4 py-4 border-t mt-4">
                        <Button 
                          asChild
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          <Link href="/submit" className="flex items-center justify-center space-x-2">
                            <FileText className="h-4 w-4" />
                            <span>Submit Paper</span>
                          </Link>
                        </Button>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  )
}