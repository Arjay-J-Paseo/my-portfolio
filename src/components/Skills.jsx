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
  
  {/* Skill Image/Icon */}
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
  
  {/* Percentage removed from here */}
</div>