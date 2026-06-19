/* =========================================
   Footer.jsx - Footer Component
   Features:
   - Brand logo and description
   - Four columns of links
   - Social media icons
   - Copyright bar at bottom
   ========================================= */
import './Footer.css'

/* Footer link columns data */
const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Courses', href: '#courses' },
      { label: 'Skills', href: '#skills' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { label: 'Web Development', href: '#courses' },
      { label: 'UI/UX Design', href: '#courses' },
      { label: 'Data Science', href: '#courses' },
      { label: 'Photography', href: '#courses' },
      { label: 'Digital Marketing', href: '#courses' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#help' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Community', href: '#community' },
    ],
  },
]

/* Social media links */
const socialLinks = [
  { label: 'Facebook', icon: '📘', href: '#' },
  { label: 'Twitter/X', icon: '🐦', href: '#' },
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'LinkedIn', icon: '💼', href: '#' },
]

function Footer() {
  /* Get current year for copyright */
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">

        {/* === MAIN FOOTER GRID === */}
        <div className="footer__grid">

          {/* === BRAND COLUMN === */}
          <div className="footer__brand">
            {/* Logo */}
            <a href="#home" className="footer__logo" aria-label="StudyFun Home">
              <span className="footer__logo-icon">📚</span>
              <span className="footer__logo-text">
                Study<span className="footer__logo-highlight">Fun</span>
              </span>
            </a>

            {/* Brand description */}
            <p className="footer__brand-desc">
              The best online learning platform for skill development. 
              Learn from industry experts and advance your career with 
              200+ courses and 680,000+ happy students worldwide.
            </p>

            {/* Social media icons */}
            <div className="footer__social" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* === LINK COLUMNS === */}
          {footerColumns.map((column) => (
            <div key={column.title} className="footer__column">
              {/* Column heading */}
              <h4 className="footer__column-title">{column.title}</h4>

              {/* Column links */}
              <ul className="footer__links" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* === BOTTOM BAR (Copyright) === */}
        <div className="footer__bottom">
          {/* Copyright text */}
          <p className="footer__copyright">
            © {currentYear} <span className="footer__copyright-brand">StudyFun</span>. 
            All rights reserved. Made with ❤️ for learners worldwide.
          </p>

          {/* Bottom links */}
          <div className="footer__bottom-links">
            <a href="#privacy" className="footer__bottom-link">Privacy Policy</a>
            <span className="footer__divider">|</span>
            <a href="#terms" className="footer__bottom-link">Terms of Service</a>
            <span className="footer__divider">|</span>
            <a href="#sitemap" className="footer__bottom-link">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
