import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Skills', 'Projects', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: isScrolled ? '12px 0' : '20px 0',
    background: isScrolled ? 'rgba(2, 6, 23, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'
  }

  return (
    <header style={headerStyle}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center', // Changed from 'space-between' to 'center'
        alignItems: 'center'
      }}>
        {/* Removed RJ. logo */}

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '32px' }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item)
              }}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#818cf8'}
              onMouseLeave={(e) => e.target.style.color = '#e2e8f0'}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header