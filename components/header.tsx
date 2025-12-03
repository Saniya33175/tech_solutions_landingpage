"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT: Logo with Icon */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center shadow-lg shadow-lime-400/50 hover:shadow-lime-400/70 transition-shadow">
              <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-1 6h-4v-2h4v2zm-5-6H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-1 6H7v-2h6v2zM10 3H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 6H7V5h2v4z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight group">
              TECH
              <span className="text-lime-400"> SOLUTIONS</span>
            </span>
          </Link>

          {/* CENTER: Main Navigation Links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#home"
              className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT: CTA Button (Desktop only) */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-lime-400 hover:bg-lime-300 text-slate-900 font-semibold px-6 py-2 rounded-lg shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 transition-all duration-300"
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-lime-400 transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <nav className="flex flex-col gap-2 pt-4">
              <a
                href="#home"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors px-2 py-2"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors px-2 py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors px-2 py-2"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors px-2 py-2"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center mt-4 bg-lime-400 hover:bg-lime-300 text-slate-900 font-semibold px-6 py-2 rounded-lg"
              >
                GET A QUOTE
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
