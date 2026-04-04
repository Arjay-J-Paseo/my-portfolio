import { useEffect, useState } from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1 })

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
      rgba(79, 70, 229, 0.08) 0%, 
      #020617 100%)`
  }

  return (
    <div className="app" style={gradientStyle}>
      <Header />
      
      <section id="home" className="hero-section">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>

        <div className="hero-container">
          <div className="hero-image reveal">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <div className="image-placeholder">
                <img 
                  src="arjay.png" 
                  alt="RJ Profile" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="image-border"></div>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for work
            </div>
          </div>

          <div className="hero-content reveal">
            <div className="hero-badge">
              <span className="hero-badge-icon">👋</span>
              <span>Welcome to my portfolio</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm 
              <span className="gradient-text"> RJ</span>
              <div className="animated-underline"></div>
            </h1>
            
            <p className="hero-subtitle">
              Information Technology Student | Full-Stack Developer
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Arjay-J-Paseo" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/arjay-paseo-404927400" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/PaseoArjay-twitter" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll</div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App