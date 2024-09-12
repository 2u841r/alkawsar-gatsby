import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [menuHeight, setMenuHeight] = useState(0)
    const location = useLocation()

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

    useEffect(() => {
        if (isOpen) {
            const menuElement = document.getElementById('mobile-menu')
            if (menuElement) {
                setMenuHeight(menuElement.scrollHeight)
            }
        } else {
            setMenuHeight(0)
        }
    }, [isOpen])

    const isCurrentPage = (path) => location.pathname === path

    const NavLink = ({ to, children }) => (
        <Link
            to={to}
            className="p-2"
            onClick={toggleMenu}
            aria-current={isCurrentPage(to) ? "page" : undefined}
        >
            {children}
        </Link>
    )

    return (
        <nav className="relative">
            <div className="flex justify-between items-center my-5 mx-auto w-full max-w-7xl md:my-6">
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
                    <Link to="/" className="hover:border-white hover:underline">মূলপাতা</Link>
                    <Link to="/articles" className="hover:border-white hover:underline">সব প্রবন্ধ</Link>
                    <Link to="/issues" className="hover:border-white hover:underline">সকল সংখ্যা</Link>
                    <Link to="/sections" className="hover:border-white hover:underline">বিভাগ</Link>
                    <Link to="/topics" className="hover:border-white hover:underline">বিষয়বস্তু</Link>
                    <Link to="/authors" className="hover:border-white hover:underline">লেখক</Link>
                    <Link to="/about" className="hover:border-white hover:underline">পরিচিতি</Link>
                </div>
            </div>


            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`absolute top-full left-0 right-0 rounded-b-2xl text-white overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                style={{ zIndex: 50,
                    maxHeight: `${menuHeight}px`,
                    background: 'radial-gradient(at top left, rgba(146,43,225,1) 0%, rgba(43,9,107,1) 100%)'
                }}
            >
                <div className="flex flex-col items-center py-4">
                    <NavLink to="/articles">সকল প্রবন্ধ</NavLink>
                    <NavLink to="/issues">সকল সংখ্যা</NavLink>
                    <NavLink to="/sections">বিভাগ</NavLink>
                    <NavLink to="/topics">বিষয়বস্তু</NavLink>
                    <NavLink to="/authors">লেখক</NavLink>
                    <NavLink to="/about">পরিচিতি</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar