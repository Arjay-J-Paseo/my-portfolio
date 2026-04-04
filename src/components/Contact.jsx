import { useEffect, useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Iloilo City, Philippines' },
    { icon: 'fas fa-phone-alt', label: 'Phone', value: '+63 963 406 9062', link: 'tel:+639123456789' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/Arjay-J-Paseo', link: 'https://github.com/Arjay-J-Paseo' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/arjay-paseo', link: 'https://www.linkedin.com/in/arjay-paseo-404927400' }
  ]

  return (
    <section id="contact" style={{ padding: '80px 24px', background: 'transparent' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #818cf8, #c084fc)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }} className="reveal">
          Let's Connect
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#94a3b8', 
          marginBottom: '60px',
          fontSize: '18px'
        }} className="reveal">
          Have a project in mind? Let's work together!
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '50px'
        }}>
          {/* Left Side - Contact Info */}
          <div className="reveal" style={{ flex: '1', minWidth: '300px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1))',
              borderRadius: '30px',
              padding: '40px',
              height: '100%'
            }}>
              <h3 style={{ fontSize: '28px', marginBottom: '30px', color: 'white' }}>
                Contact Information
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
                Feel free to reach out to me anytime. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      background: 'rgba(129, 140, 248, 0.15)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className={info.icon} style={{ fontSize: '20px', color: '#818cf8' }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '3px' }}>{info.label}</div>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '14px' }}>
                          {info.value}
                        </a>
                      ) : (
                        <div style={{ color: '#e2e8f0', fontSize: '14px' }}>{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="reveal" style={{ flex: '1', minWidth: '300px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '30px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <h3 style={{ fontSize: '28px', marginBottom: '30px', color: 'white' }}>
                Send a Message
              </h3>
              
              {isSubmitted && (
                <div style={{
                  padding: '12px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid #22c55e',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  color: '#22c55e',
                  textAlign: 'center',
                  fontSize: '14px'
                }}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#94a3b8', marginBottom: '8px', fontSize: '14px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#94a3b8', marginBottom: '8px', fontSize: '14px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', color: '#94a3b8', marginBottom: '8px', fontSize: '14px' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 5px 20px rgba(79, 70, 229, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact