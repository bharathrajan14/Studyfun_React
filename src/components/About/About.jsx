/* =========================================
   About.jsx - About Section Component
   Features:
   - Left side: image of students/team
   - Right side: "Know About The Best Of StudyFun"
   - Numbered feature list (1, 2, 3)
   - CTA button
   ========================================= */
import './About.css'
import aboutImg from '../../assets/about_students.png'

/* Features list data - 3 key benefits */
const features = [
  {
    number: '01',
    title: 'Professional and Certified Instructors',
    description: 'Learn from industry experts with years of real-world experience and certifications from top institutions.',
  },
  {
    number: '02',
    title: 'Flexible Learning and Support',
    description: 'Study at your own pace with lifetime access to course materials, 24/7 support, and community forums.',
  },
  {
    number: '03',
    title: 'Professional Certifications',
    description: 'Earn recognized certificates upon completion that you can share on LinkedIn and with employers.',
  },
]

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__container">

        {/* === LEFT SIDE: Image === */}
        <div className="about__image-wrapper">
          {/* Decorative green border box behind image */}
          <div className="about__image-decoration"></div>

          {/* Main about image */}
          <img
            src={aboutImg}
            alt="Students collaborating and learning together at StudyFun"
            className="about__image"
          />

          {/* Floating achievement badge */}
          <div className="about__badge">
            <span className="about__badge-icon">⭐</span>
            <div>
              <div className="about__badge-number">4.9/5</div>
              <div className="about__badge-text">Student Rating</div>
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: Text Content === */}
        <div className="about__content">

          {/* Section badge */}
          <div className="section-badge">Know About Us</div>

          {/* Section title */}
          <h2 className="section-title">
            Know About The Best Of <span>"StudyFun"</span>
          </h2>

          {/* Short intro paragraph */}
          <p className="about__intro">
            We are dedicated to providing the highest quality online education 
            that transforms lives and opens doors to new opportunities worldwide.
          </p>

          {/* Numbered feature list */}
          <div className="about__features">
            {features.map((feature) => (
              <div key={feature.number} className="about__feature">

                {/* Big number */}
                <div className="about__feature-number">{feature.number}</div>

                {/* Feature text */}
                <div className="about__feature-content">
                  <h3 className="about__feature-title">{feature.title}</h3>
                  <p className="about__feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#courses" className="btn btn-primary about__btn">
            Explore All Courses
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
