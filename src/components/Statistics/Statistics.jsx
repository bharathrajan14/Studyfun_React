/* =========================================
   Statistics.jsx - Stats Counter Section
   Shows 4 key statistics:
   - 200+ Active Courses
   - 350+ Expert Mentors
   - 680+ Total Students
   - 680+ Certificates
   ========================================= */
import './Statistics.css'

/* Data for each statistic - easy to update */
const stats = [
  {
    id: 1,
    number: '200+',
    label: 'Active Courses',
    icon: '📚',
    color: '#00b894',    /* Green */
    bgColor: '#e8f8f5',
  },
  {
    id: 2,
    number: '350+',
    label: 'Expert Mentors',
    icon: '👨‍🏫',
    color: '#6c5ce7',    /* Purple */
    bgColor: '#f0eeff',
  },
  {
    id: 3,
    number: '680+',
    label: 'Happy Students',
    icon: '🎓',
    color: '#fd79a8',    /* Pink */
    bgColor: '#ffeef5',
  },
  {
    id: 4,
    number: '680+',
    label: 'Certificates',
    icon: '🏅',
    color: '#e17055',    /* Orange */
    bgColor: '#fff3ee',
  },
]

function Statistics() {
  return (
    /* Green-tinted background section */
    <section className="statistics section" id="statistics">
      <div className="container">

        {/* Section header text */}
        <div className="statistics__header">
          <div className="section-badge">Our Achievements</div>
          <h2 className="section-title">
            Prepare For The Future, <span>Learn The Right Skills</span> <br />
            With Our Good Heroes
          </h2>
          <p className="section-description statistics__desc">
            Join thousands of students who have transformed their careers 
            through our comprehensive learning platform.
          </p>
        </div>

        {/* Grid of stat cards */}
        <div className="statistics__grid">
          {/* Map through each stat item */}
          {stats.map((stat) => (
            <div key={stat.id} className="statistics__card">

              {/* Icon circle */}
              <div
                className="statistics__icon"
                style={{ backgroundColor: stat.bgColor }}
              >
                <span
                  className="statistics__icon-emoji"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </span>
              </div>

              {/* Big number */}
              <div className="statistics__number" style={{ color: stat.color }}>
                {stat.number}
              </div>

              {/* Label text */}
              <div className="statistics__label">{stat.label}</div>

              {/* Bottom accent line */}
              <div
                className="statistics__accent"
                style={{ backgroundColor: stat.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
