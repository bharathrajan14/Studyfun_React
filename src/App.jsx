/* =========================================
   App.jsx - Root Component
   Imports and renders all page sections
   in order from top to bottom
   ========================================= */
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Statistics from './components/Statistics/Statistics'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    /* The main wrapper for the entire website */
    <div className="app">
      {/* Navigation Bar - Fixed at top */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Statistics />
        <Skills />
        <About />
        <Courses />
        <Testimonials />
        <Newsletter />
      </main>

      {/* Footer - Bottom of page */}
      <Footer />
    </div>
  )
}

export default App
