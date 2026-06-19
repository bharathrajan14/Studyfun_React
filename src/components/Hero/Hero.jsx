/* =========================================
   Hero.jsx - Hero Section Component
   Features:
   - Big headline with highlighted text
   - Subtext description
   - CTA buttons (Get Started + Learn More)
   - Hero illustration image
   - Floating badge elements
   - Responsive: stacks vertically on mobile
   ========================================= */
import './Hero.css'
import heroImg from '../../assets/hero_illustration.png'

function Hero() {
  return (
    /* Hero section with id for nav link scrolling */
    <section className="hero" id="home">
      <div className="container hero__container">

        {/* === LEFT SIDE: Text Content === */}
        <div className="hero__content">

          {/* Small badge above the title */}
          <div className="hero__badge">
            🎓 #1 Online Learning Platform
          </div>

          {/* Main headline */}
          <h1 className="hero__title">
            Found & Learn <br />
            Your Skill More <br />
            <span className="hero__title-highlight">Fun</span> With Us
          </h1>

          {/* Supporting description text */}
          <p className="hero__description">
            Join over <strong>680,000+</strong> happy learners and unlock your 
            potential with our expert-led courses. Learn at your own pace, 
            anywhere, anytime.
          </p>

          {/* Call to action buttons */}
          <div className="hero__buttons">
            {/* Primary CTA */}
            <a href="#courses" className="hero__btn-primary">
              Get Started Free
              <span className="hero__btn-arrow">→</span>
            </a>

            {/* Secondary CTA with play icon */}
            <a href="#about" className="hero__btn-secondary" aria-label="Watch demo video">
              <span className="hero__play-icon" aria-hidden="true">▶</span>
              Watch Demo
            </a>
          </div>

          {/* Social proof - avatar row */}
          <div className="hero__social-proof">
            {/* Small avatar stack */}
            <div className="hero__avatars">
              <span className="hero__avatar">👩</span>
              <span className="hero__avatar">👨</span>
              <span className="hero__avatar">👩‍🎓</span>
              <span className="hero__avatar">🧑</span>
            </div>
            <div className="hero__proof-text">
              <strong>680,000+</strong> students already enrolled
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: Illustration === */}
        <div className="hero__image-wrapper">
          {/* Decorative background blob */}
          <div className="hero__blob"></div>

          {/* Main hero image */}
          <img
            src={heroImg}
            alt="Student learning online with StudyFun"
            className="hero__image"
          />

          {/* Floating badge cards (decorative UI elements) */}
          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__floating-icon">🏆</span>
            <div>
              <div className="hero__floating-title">Top Rated</div>
              <div className="hero__floating-sub">Best Platform 2024</div>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-icon">📈</span>
            <div>
              <div className="hero__floating-title">350+ Courses</div>
              <div className="hero__floating-sub">Expert Instructors</div>
            </div>
          </div>
        </div>

      </div>

      {/* === WAVE DIVIDER at bottom === */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f0faf8"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
