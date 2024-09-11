import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query MyQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center my-5 mx-auto w-full max-w-7xl md:my-10">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <Link to="/" className="inline-block">
          <img src="/alkawsar_logo.svg" width="100" alt={title} />
        </Link>
      </div>

      {/* Hamburger Button for mobile */}
      <button
        onClick={toggleMenu}
        className="block md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Menu items on the right */}
      <div className="hidden md:flex items-center space-x-5">
        <Link to="/articles" className="hover:border-white">সব প্রবন্ধ</Link>
        <Link to="/issues" className="hover:border-white">সকল সংখ্যা</Link>
        <Link to="/sections" className="hover:border-white">বিভাগ</Link>
        <Link to="/topics" className="hover:border-white">বিষয়বস্তু</Link>
        <Link to="/authors" className="hover:border-white">লেখক</Link>
        <Link to="/about" className="hover:border-white">পরিচিতি</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 h-full bg-purple-700 text-white flex flex-col items-center justify-center w-full transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <Link to="/" className="lg:hidden p-4" onClick={toggleMenu}>
          হোমপেজ
        </Link>
        <Link to="/articles" className="p-4" onClick={toggleMenu}>
          সব প্রবন্ধ
        </Link>
        <Link to="/issues" className="p-4" onClick={toggleMenu}>
          সকল সংখ্যা
        </Link>
        <Link to="/sections" className="p-4" onClick={toggleMenu}>
          বিভাগ
        </Link>
        <Link to="/topics" className="p-4" onClick={toggleMenu}>
          বিষয়বস্তু
        </Link>
        <Link to="/authors" className="p-4" onClick={toggleMenu}>
          লেখক
        </Link>
        <Link to="/about" className="p-4" onClick={toggleMenu}>
          পরিচিতি
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
