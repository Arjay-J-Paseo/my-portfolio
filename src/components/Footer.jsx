function Footer() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{ 
      padding: '40px 24px', 
      textAlign: 'center', 
      background: 'rgba(2, 6, 23, 0.8)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
          © 2026 RJ. Built in React.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button onClick={() => scrollToSection('home')} style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Home</button>
          <button onClick={() => scrollToSection('skills')} style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Skills</button>
          <button onClick={() => scrollToSection('projects')} style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Projects</button>
          <button onClick={() => scrollToSection('contact')} style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Contact</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer