"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dacronyx-darker/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-dacronyx-light hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/solutions" className="text-dacronyx-light hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/technology" className="text-dacronyx-light hover:text-white transition-colors">
              Technology
            </Link>
            <Link href="/about" className="text-dacronyx-light hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact">
              <Button
                variant="default"
                className="bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dacronyx-darker/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-dacronyx-accent/20 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-dacronyx-accent/20 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/technology"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-dacronyx-accent/20 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-dacronyx-accent/20 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <Link href="/contact">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
