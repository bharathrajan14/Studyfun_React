/* =========================================
   Navbar.jsx - Navigation Component
   Features:
   - Logo with brand name
   - Desktop navigation links
   - Sign In & Get Started buttons
   - Hamburger menu for mobile
   - Scrolled state (shadow on scroll)
   ========================================= */
import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // State to track if user has scrolled (for shadow effect)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll event listener when component mounts
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolled more than 50px, set isScrolled to true
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle hamburger menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when a nav link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Navigation links array - easy to add/remove links
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    /* navbar--scrolled class adds shadow when page is scrolled */
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar__container">

        {/* === LOGO === */}
        <a href="#home" className="navbar__logo" aria-label="StudyFun Home">
          {/* Book icon emoji as logo icon */}
          <span className="navbar__logo-icon">📚</span>
          <span className="navbar__logo-text">
            Study<span className="navbar__logo-highlight">Fun</span>
          </span>
        </a>

        {/* === DESKTOP NAVIGATION LINKS === */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* === ACTION BUTTONS (Desktop) === */}
        <div className="navbar__actions">
          <a href="#signin" className="navbar__btn navbar__btn--outline">
            Sign In
          </a>
          <a href="#signup" className="navbar__btn navbar__btn--primary">
            Get Started
          </a>
        </div>

        {/* === HAMBURGER BUTTON (Mobile Only) === */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          id="hamburger-btn"
        >
          {/* Three lines that animate into an X */}
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>
      </div>

      {/* === MOBILE MENU DROPDOWN === */}
      {/* FIX: max-height transition requires content in a separate inner div */}
      <div
        className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
        role="region"
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-inner">
          <ul className="navbar__mobile-links" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile action buttons */}
          <div className="navbar__mobile-actions">
            <a href="#signin" className="navbar__btn navbar__btn--outline" onClick={closeMenu}>
              Sign In
            </a>
            <a href="#signup" className="navbar__btn navbar__btn--primary" onClick={closeMenu}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
