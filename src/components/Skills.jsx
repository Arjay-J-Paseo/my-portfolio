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
    { 
      name: 'JavaScript', 
      icon: 'fab fa-js', 
      color: '#f7df1e',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'React', 
      icon: 'fab fa-react', 
      color: '#61dafb',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Python', 
      icon: 'fab fa-python', 
      color: '#3776ab',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'HTML5', 
      icon: 'fab fa-html5', 
      color: '#e34f26',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3', 
      icon: 'fab fa-css3-alt', 
      color: '#1572b6',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'Node.js', 
      icon: 'fab fa-node', 
      color: '#339933',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }
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

        <div className="reveal" style={{
          position: 'relative',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '40px 20px'
        }}>
          
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
            
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 25px',
              background: `rgba(${parseInt(currentSkill.color.slice(1,3), 16)}, ${parseInt(currentSkill.color.slice(3,5), 16)}, ${parseInt(currentSkill.color.slice(5,7), 16)}, 0.15)`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}>
              <img 
                src={currentSkill.image}
                alt={currentSkill.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            <h3 style={{ fontSize: '32px', marginBottom: '10px', color: 'white' }}>
              {currentSkill.name}
            </h3>
            
            {/* Description and Progress Bar removed */}
          </div>

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
              cursor: 'pointer'
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
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

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
                  cursor: 'pointer'
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