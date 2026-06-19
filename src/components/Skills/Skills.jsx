/* =========================================
   Skills.jsx - Skills Section Component
   Shows a grid of skill categories:
   - Soft Skills
   - Multi-potential Skills
   - Keep Learning to Up Skills
   - Web Development Skills
   - Many More Skills
   - And More
   ========================================= */
import './Skills.css'

/* Skill card data - each skill with icon, title, description */
const skills = [
  {
    id: 1,
    icon: '🤝',
    title: 'Soft Skills',
    description: 'Develop communication, leadership, and teamwork abilities that employers value most in the modern workplace.',
    color: '#00b894',
    bgColor: '#e8f8f5',
    link: '#courses',
  },
  {
    id: 2,
    icon: '🧠',
    title: 'Multi-potential Skills',
    description: 'Explore diverse talents and build a portfolio of abilities across different fields and disciplines.',
    color: '#6c5ce7',
    bgColor: '#f0eeff',
    link: '#courses',
  },
  {
    id: 3,
    icon: '📈',
    title: 'Keep Learning to Upskill',
    description: 'Stay ahead of the curve with continuous learning and professional development opportunities.',
    color: '#e17055',
    bgColor: '#fff3ee',
    link: '#courses',
  },
  {
    id: 4,
    icon: '💻',
    title: 'Web Development Skills',
    description: 'Master HTML, CSS, JavaScript, React and modern frameworks to build stunning web applications.',
    color: '#0984e3',
    bgColor: '#e8f4fd',
    link: '#courses',
  },
  {
    id: 5,
    icon: '🎨',
    title: 'Many More Skills',
    description: 'From graphic design to digital marketing, explore a wide variety of in-demand skill sets.',
    color: '#fd79a8',
    bgColor: '#ffeef5',
    link: '#courses',
  },
  {
    id: 6,
    icon: '🚀',
    title: 'And More',
    description: 'Discover new passions and transform your career with our ever-growing library of expert courses.',
    color: '#fdcb6e',
    bgColor: '#fffbef',
    link: '#courses',
  },
]

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        {/* Section header */}
        <div className="skills__header">
          <div className="section-badge">What You'll Learn</div>
          <h2 className="section-title">
            Explore Our <span>Top Skills</span>
          </h2>
          <p className="section-description skills__desc">
            Master the skills that matter most in today's fast-paced world. 
            Our expert instructors guide you every step of the way.
          </p>
        </div>

        {/* Skills grid - 3 columns on desktop */}
        <div className="skills__grid">
          {skills.map((skill) => (
            /* Individual skill card */
            <article key={skill.id} className="skills__card">

              {/* Icon with colored background */}
              <div
                className="skills__icon"
                style={{ backgroundColor: skill.bgColor }}
              >
                <span className="skills__icon-emoji">{skill.icon}</span>
              </div>

              {/* Card text content */}
              <div className="skills__content">
                <h3 className="skills__title" style={{ color: skill.color }}>
                  {skill.title}
                </h3>
                <p className="skills__description">{skill.description}</p>
              </div>

              {/* Read more link */}
              <a
                href={skill.link}
                className="skills__link"
                style={{ color: skill.color }}
              >
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
