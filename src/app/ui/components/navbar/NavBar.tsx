"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logoImage from "../../../images/png/image 68.png"
import { MdMenu, MdOutlineClose } from "react-icons/md"

interface NavItem {
  label: string
  href: string
}

interface NavProps {
  logoSrc?: string
  logoAlt?: string
  navItems?: NavItem[]
  onGetStarted?: () => void
}

const NavBar: React.FC<NavProps> = ({
  logoSrc,
  logoAlt = "Tickle My Fancy",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Safety", href: "/safety" },
    { label: "FAQs", href: "/faqs" },
  ],
  onGetStarted = () => console.log("Get Started clicked"),
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return location.pathname === "/"
    }
    return location.pathname === href
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {logoImage ? (
                <img src={logoImage || "/placeholder.svg"} alt={logoAlt} className="h-12 w-auto text-xl" />
              ) : (
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-800">TICKLE MY</span>
                  <span className="text-xl font-bold text-pink-500 ml-1 italic">Fancy</span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActiveRoute(item.href) ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => {
                onGetStarted()
                setIsMobileMenuOpen(false)
              }}
              className="w-full text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                background: "linear-gradient(to right, #9333EA, #FF6F61)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #7e22ce, #ef4444)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #9333EA, #FF6F61)"
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <MdOutlineClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    isActiveRoute(item.href)
                      ? "text-purple-600 bg-purple-50 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    onGetStarted()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
export default NavBar
