'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Packages', href: '#packages' },
  { name: 'Reviews', href: '#reviews' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navigation.map(nav => nav.href.replace('#', ''))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white bg-opacity-95 py-4'
      }`}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl md:text-3xl font-heading font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg px-2"
          >
            Make It <span className="text-brand-accent">Wow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-brand-accent'
                    : 'text-gray-700 hover:text-brand-accent'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary text-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-brand-accent bg-brand-accent bg-opacity-10'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary mt-2"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

