import { useEffect } from 'react'

function Projects() {
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

  const projects = [
    {
      title: ' Classee',
      description: 'A full-stack Classee platform with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Figma'],
      figmaLink: 'https://www.figma.com/design/GckSYdLxYcuwSlwxLPsWbF/Classee-Final?node-id=0-1&t=dUv3I9eV2FcO63lf-1',
      image: 'classee.jpg'
    },
    {
      title: 'DevNotify',
      description: 'Productivity app for managing tasks and projects',
      tech: ['React', 'Node.js', 'MongoDB'],
      figmaLink: 'https://www.figma.com/design/RcEAgcitjEzZQlW6RD0miK/DEVIFY?node-id=440-281&t=voxbDW85JqrZtrls-1',
      image: 'dev.jpg'
    },
    {
      title: 'PortfolioV1 Website',
      description: 'Modern portfolio website with animations',
      tech: ['React', 'CSS3', 'Figma'],
      figmaLink: 'https://www.figma.com/design/b8yWw3SEZgGmkwknON5hmO/Portfolio?node-id=1-2&t=jaolpsEZ1UjP6Duu-1',
      image: 'portfoliov1.jpg'
    }
  ]

  return (
    <section id="projects" style={{ padding: '80px 24px', background: 'transparent' }}>
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
          My Projects
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="reveal" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              
              {/* Project Image */}
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              
              {/* Project Content */}
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      padding: '5px 12px',
                      background: 'rgba(129, 140, 248, 0.2)',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      color: '#818cf8'
                    }}>{tech}</span>
                  ))}
                </div>
                
                <a 
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#818cf8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'gap 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.gap = '12px'}
                  onMouseLeave={(e) => e.target.style.gap = '8px'}
                >
                  View on Figma
                  <i className="fab fa-figma"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects