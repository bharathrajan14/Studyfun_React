/* =========================================
   Newsletter.jsx - Email Signup Section
   Features:
   - Left side: heading and email input form
   - Right side: illustration image
   - Green/teal gradient background
   ========================================= */
import { useState } from 'react'
import './Newsletter.css'
import newsletterImg from '../../assets/newsletter_illustration.png'

function Newsletter() {
  // State for the email input value
  const [email, setEmail] = useState('')

  // State to show success/error feedback
  const [status, setStatus] = useState(null)  // null | 'success' | 'error'

  /* Handle form submission */
  const handleSubmit = (e) => {
    e.preventDefault()  // Prevent page reload

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !emailRegex.test(email)) {
      setStatus('error')    // Show error message
      return
    }

    // Simulate successful subscription
    setStatus('success')
    setEmail('')            // Clear input after success
  }

  return (
    /* Green gradient background section */
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__container">

        {/* === LEFT SIDE: Text + Form === */}
        <div className="newsletter__content">

          {/* Small badge */}
          <div className="newsletter__badge">
            📧 Newsletter
          </div>

          {/* Heading */}
          <h2 className="newsletter__title">
            Join Our Newsletter And Get<br />
            a <span className="newsletter__title-highlight">Special Offer</span>
          </h2>

          {/* Description */}
          <p className="newsletter__description">
            Subscribe to our weekly newsletter and get exclusive discounts, 
            free course previews, and learning tips delivered to your inbox.
          </p>

          {/* Perks list */}
          <ul className="newsletter__perks">
            <li className="newsletter__perk">
              <span className="newsletter__perk-icon">✓</span>
              Weekly learning tips & resources
            </li>
            <li className="newsletter__perk">
              <span className="newsletter__perk-icon">✓</span>
              Exclusive discounts up to 80% off
            </li>
            <li className="newsletter__perk">
              <span className="newsletter__perk-icon">✓</span>
              Free access to premium content
            </li>
          </ul>

          {/* Email subscription form */}
          <form
            className="newsletter__form"
            onSubmit={handleSubmit}
            noValidate
            id="newsletter-form"
          >
            {/* Email input */}
            <div className="newsletter__input-wrapper">
              <span className="newsletter__input-icon">✉️</span>
              <input
                type="email"
                id="newsletter-email"
                className="newsletter__input"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setStatus(null)  // Reset status when typing
                }}
                aria-label="Email address for newsletter"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="newsletter__submit"
              id="newsletter-submit-btn"
            >
              Subscribe Now 🚀
            </button>
          </form>

          {/* Success/Error messages */}
          {status === 'success' && (
            <div className="newsletter__message newsletter__message--success">
              🎉 You're subscribed! Check your inbox for a welcome email.
            </div>
          )}
          {status === 'error' && (
            <div className="newsletter__message newsletter__message--error">
              ⚠️ Please enter a valid email address.
            </div>
          )}

          {/* Privacy note */}
          <p className="newsletter__privacy">
            🔒 No spam, ever. Unsubscribe at any time.
          </p>
        </div>

        {/* === RIGHT SIDE: Illustration === */}
        <div className="newsletter__image-wrapper">
          <img
            src={newsletterImg}
            alt="Newsletter subscription illustration"
            className="newsletter__image"
          />
        </div>

      </div>
    </section>
  )
}

export default Newsletter
