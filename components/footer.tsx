"use client"

import Link from "next/link"
import { Linkedin, Twitter, Facebook, Instagram, Server } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white mb-4">
              <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-slate-950" />
              </div>
              TECH SOLUTIONS
            </Link>
            <p className="text-sm text-gray-400 mb-4">Powering innovation for the digital age.</p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>129 Tech Valley, CA</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-base">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-base">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social Media & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left">© 2025 TECH SOLUTIONS. All rights reserved.</p>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-lime-400 hover:bg-slate-900 p-2 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-lime-400 hover:bg-slate-900 p-2 rounded-lg transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-lime-400 hover:bg-slate-900 p-2 rounded-lg transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-lime-400 hover:bg-slate-900 p-2 rounded-lg transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
