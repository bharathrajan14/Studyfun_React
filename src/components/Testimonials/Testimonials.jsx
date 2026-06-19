/* =========================================
   Testimonials.jsx - Reviews Section
   Features:
   - Section header "Reviews Next Happy Learners"
   - Testimonial cards with:
     - Avatar image
     - Star rating
     - Review text
     - Student name & role
   - Trust logos (Trustpilot, etc.)
   ========================================= */
import './Testimonials.css'
import avatar1 from '../../assets/testimonial_avatar1.png'
import avatar2 from '../../assets/testimonial_avatar2.png'

/* Testimonial data array */
const testimonials = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Sarah Mitchell',
    role: 'Web Developer',
    rating: 5,
    text: 'StudyFun completely transformed my career! I went from knowing nothing about coding to landing my dream job in just 6 months. The instructors are incredibly supportive and the content is top-notch.',
    company: 'Google',
    companyIcon: '🔵',
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'James Anderson',
    role: 'UX Designer',
    rating: 5,
    text: 'I have tried many online learning platforms but StudyFun stands out. The interactive projects, live sessions, and community support make it an unbeatable learning experience.',
    company: 'Apple',
    companyIcon: '🍎',
  },
  {
    id: 3,
    avatar: avatar1,
    name: 'Emily Chen',
    role: 'Data Scientist',
    rating: 4,
    text: 'The data science bootcamp exceeded all my expectations. Clear explanations, real-world projects, and certificates that employers actually recognize. Highly recommend!',
    company: 'Microsoft',
    companyIcon: '🪟',
  },
]

/* Trust platform logos */
const trustLogos = [
  { name: 'Trustpilot', icon: '⭐' },
  { name: 'Coursera', icon: '🎓' },
  { name: 'G2', icon: '🔷' },
  { name: 'Capterra', icon: '📊' },
  { name: 'GetApp', icon: '📱' },
]

/* Helper: render star icons */
function StarRating({ rating }) {
  return (
    <div className="testimonial__stars" aria-label={`${rating} stars`}>
      {Array(5).fill(null).map((_, i) => (
        <span key={i} className={`t-star ${i < rating ? 'filled' : 'empty'}`}>★</span>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">

        {/* Section header */}
        <div className="testimonials__header">
          <div className="section-badge">What Students Say</div>
          <h2 className="section-title">
            Reviews Next <span>Happy Learners</span>
          </h2>
          <p className="section-description testimonials__desc">
            Join thousands of satisfied learners who have transformed 
            their careers and lives through StudyFun.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            /* Single testimonial card */
            <article key={testimonial.id} className="testimonial__card">

              {/* Quote icon */}
              <div className="testimonial__quote-icon">"</div>

              {/* Star rating */}
              <StarRating rating={testimonial.rating} />

              {/* Review text */}
              <p className="testimonial__text">{testimonial.text}</p>

              {/* Student info row */}
              <div className="testimonial__author">
                {/* Avatar image */}
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} profile picture`}
                  className="testimonial__avatar"
                />

                {/* Name and role */}
                <div className="testimonial__author-info">
                  <div className="testimonial__name">{testimonial.name}</div>
                  <div className="testimonial__role">
                    {testimonial.companyIcon} {testimonial.role} at {testimonial.company}
                  </div>
                </div>

                {/* Verified badge */}
                <span className="testimonial__verified" title="Verified Student">✓</span>
              </div>
            </article>
          ))}
        </div>

        {/* Trust logos row */}
        <div className="testimonials__trust">
          <p className="testimonials__trust-text">Trusted by learners from</p>
          <div className="testimonials__logos">
            {trustLogos.map((logo) => (
              <div key={logo.name} className="testimonials__logo">
                <span className="testimonials__logo-icon">{logo.icon}</span>
                <span className="testimonials__logo-name">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
