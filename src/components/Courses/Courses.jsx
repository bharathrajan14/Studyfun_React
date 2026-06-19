/* =========================================
   Courses.jsx - Course Cards Section
   Features:
   - Section header with "Start To Grind Your Skills Today"
   - Grid of course cards
   - Each card: image, category tag, title, 
     instructor, rating, price
   - CTA button per card
   ========================================= */
import './Courses.css'

/* Import course thumbnail images */
import webDevImg from '../../assets/course_web_dev.png'
import designImg from '../../assets/course_design.png'
import photoImg from '../../assets/course_photography.png'
import dataImg from '../../assets/course_data_science.png'
import freelanceImg from '../../assets/course_freelancing.png'
import animationImg from '../../assets/course_3d_animation.png'

/* Course data array - maps to cards */
const courses = [
  {
    id: 1,
    image: webDevImg,
    category: 'Development',
    categoryColor: '#0984e3',
    categoryBg: '#e8f4fd',
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    reviews: 2847,
    price: '$29.99',
    originalPrice: '$89.99',
    badge: 'Bestseller',
    badgeColor: '#e17055',
  },
  {
    id: 2,
    image: designImg,
    category: 'Design',
    categoryColor: '#6c5ce7',
    categoryBg: '#f0eeff',
    title: 'UI/UX Design Masterclass — Figma & Beyond',
    instructor: 'Mark Williams',
    rating: 4.9,
    reviews: 1923,
    price: '$24.99',
    originalPrice: '$79.99',
    badge: 'New',
    badgeColor: '#00b894',
  },
  {
    id: 3,
    image: photoImg,
    category: 'Photography',
    categoryColor: '#e17055',
    categoryBg: '#fff3ee',
    title: 'Learning Drone & Photography Composition',
    instructor: 'Emma Rodriguez',
    rating: 4.7,
    reviews: 1105,
    price: '$19.99',
    originalPrice: '$69.99',
    badge: 'Popular',
    badgeColor: '#fd79a8',
  },
  {
    id: 4,
    image: dataImg,
    category: 'Data Science',
    categoryColor: '#00b894',
    categoryBg: '#e8f8f5',
    title: 'Data Science & Machine Learning Bootcamp',
    instructor: 'Prof. Alex Chen',
    rating: 4.9,
    reviews: 3201,
    price: '$34.99',
    originalPrice: '$99.99',
    badge: 'Bestseller',
    badgeColor: '#e17055',
  },
  {
    id: 5,
    image: freelanceImg,
    category: 'Business',
    categoryColor: '#e17055',
    categoryBg: '#fff3ee',
    title: 'Creative Freelancing in the Modern Age',
    instructor: 'Julia Park',
    rating: 4.6,
    reviews: 875,
    price: '$14.99',
    originalPrice: '$49.99',
    badge: null,
    badgeColor: null,
  },
  {
    id: 6,
    image: animationImg,
    category: '3D & Animation',
    categoryColor: '#6c5ce7',
    categoryBg: '#f0eeff',
    title: '3D Animation & Blender Absolute Beginners',
    instructor: 'Tom Richards',
    rating: 4.8,
    reviews: 1432,
    price: '$22.99',
    originalPrice: '$74.99',
    badge: 'Hot',
    badgeColor: '#e17055',
  },
]

/* Helper function to render star icons */
function StarRating({ rating }) {
  const fullStars = Math.floor(rating)       // Whole stars
  const hasHalf = rating % 1 >= 0.5          // Half star?
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)  // Empty stars

  return (
    <div className="course-card__stars" aria-label={`Rating: ${rating} out of 5`}>
      {/* Full stars */}
      {Array(fullStars).fill(null).map((_, i) => (
        <span key={`full-${i}`} className="star">★</span>
      ))}
      {/* Half star */}
      {hasHalf && <span className="star half">★</span>}
      {/* Empty stars */}
      {Array(emptyStars).fill(null).map((_, i) => (
        <span key={`empty-${i}`} className="star empty">★</span>
      ))}
    </div>
  )
}

function Courses() {
  return (
    <section className="courses section" id="courses">
      <div className="container">

        {/* Section header */}
        <div className="courses__header">
          {/* Green banner/pill */}
          <div className="courses__banner">
            <span className="courses__banner-icon">🚀</span>
            <span>Start To Grind Your Skills Today</span>
          </div>

          <h2 className="section-title">
            Our <span>Popular Courses</span>
          </h2>
          <p className="section-description courses__desc">
            Handpicked courses taught by world-class instructors. 
            Start learning and unlock your full potential today.
          </p>
        </div>

        {/* Course cards grid */}
        <div className="courses__grid">
          {courses.map((course) => (
            /* Single course card */
            <article key={course.id} className="course-card">

              {/* Card image container */}
              <div className="course-card__image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card__image"
                />

                {/* Badge (Bestseller, New, etc.) */}
                {course.badge && (
                  <span
                    className="course-card__badge"
                    style={{ backgroundColor: course.badgeColor }}
                  >
                    {course.badge}
                  </span>
                )}

                {/* Hover overlay with view button */}
                <div className="course-card__overlay">
                  <a href="#" className="course-card__view-btn">
                    View Course
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div className="course-card__content">

                {/* Category tag */}
                <span
                  className="course-card__category"
                  style={{
                    color: course.categoryColor,
                    backgroundColor: course.categoryBg,
                  }}
                >
                  {course.category}
                </span>

                {/* Course title */}
                <h3 className="course-card__title">{course.title}</h3>

                {/* Instructor name */}
                <p className="course-card__instructor">
                  👤 {course.instructor}
                </p>

                {/* Rating row */}
                <div className="course-card__rating-row">
                  <span className="course-card__rating-num">{course.rating}</span>
                  <StarRating rating={course.rating} />
                  <span className="course-card__reviews">({course.reviews.toLocaleString()})</span>
                </div>

                {/* Price row */}
                <div className="course-card__price-row">
                  <span className="course-card__price">{course.price}</span>
                  <span className="course-card__original-price">{course.originalPrice}</span>
                  <a href="#" className="course-card__enroll-btn">
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All button */}
        <div className="courses__cta">
          <a href="#" className="btn btn-outline">
            View All Courses →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Courses
