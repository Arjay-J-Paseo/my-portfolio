import { useEffect, useState } from 'react'

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: 'JavaScript', level: 85, icon: 'fab fa-js', color: '#f7df1e', description: 'Advanced' },
    { name: 'React', level: 80, icon: 'fab fa-react', color: '#61dafb', description: 'Intermediate' },
    { name: 'Python', level: 75, icon: 'fab fa-python', color: '#3776ab', description: 'Intermediate' },
    { name: 'HTML5', level: 90, icon: 'fab fa-html5', color: '#e34f26', description: 'Expert' },
    { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt', color: '#1572b6', description: 'Advanced' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node', color: '#339933', description: 'Intermediate' }
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % skills.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentSkill = skills[currentIndex]

  return (
    <section id="skills" style={{ padding: '80px 24px', background: 'transparent' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '60px',
          background: 'linear-gradient(135deg, #818cf8, #c084fc)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }} className="reveal">
          My Skills
        </h2>

        {/* Carousel Container */}
        <div className="reveal" style={{
          position: 'relative',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '40px 20px'
        }}>
          
          {/* Main Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '30px',
            padding: '50px 30px',
            textAlign: 'center',
            transition: 'all 0.5s ease',
            opacity: isAnimating ? 0.5 : 1,
            transform: isAnimating ? 'scale(0.98)' : 'scale(1)'
          }}>
            
            {/* Icon */}
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 25px',
              background: `rgba(${parseInt(currentSkill.color.slice(1,3), 16)}, ${parseInt(currentSkill.color.slice(3,5), 16)}, ${parseInt(currentSkill.color.slice(5,7), 16)}, 0.2)`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className={currentSkill.icon} style={{ fontSize: '50px', color: currentSkill.color }}></i>
            </div>
            
            {/* Skill Name */}
            <h3 style={{ fontSize: '32px', marginBottom: '10px', color: 'white' }}>
              {currentSkill.name}
            </h3>
            
            {/* Description */}
            <p style={{ color: '#818cf8', marginBottom: '30px', fontSize: '14px' }}>
              {currentSkill.description}
            </p>
            
            {/* Progress Bar */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{
                width: '100%',
                height: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${currentSkill.level}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${currentSkill.color}, #818cf8)`,
                  borderRadius: '5px',
                  transition: 'width 0.5s ease'
                }}></div>
              </div>
            </div>
            
            {/* Percentage */}
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: currentSkill.color }}>
              {currentSkill.level}%
            </span>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#4f46e5'
              e.target.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              e.target.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#4f46e5'
              e.target.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              e.target.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '30px'
          }}>
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentIndex ? '30px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: index === currentIndex ? '#818cf8' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills