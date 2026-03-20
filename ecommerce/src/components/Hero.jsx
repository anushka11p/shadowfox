import React from 'react'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: '#6b0f1a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '2rem'
    }}>
      {/* Decorative corner lines */}
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '120px', height: '120px', borderTop: '1px solid rgba(129, 15, 15, 0.6)', borderLeft: '1px solid rgba(180,30,30,0.6)', borderRadius: '40px 0 0 0' }} />
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '120px', height: '120px', borderBottom: '1px solid rgba(180,30,30,0.6)', borderRight: '1px solid rgba(180,30,30,0.6)', borderRadius: '0 0 40px 0' }} />

      {/* Left image */}
      <div style={{
        position: 'absolute', left: '0', top: '0', bottom: '0',
        width: '35%',
        borderRadius: '0 0rem 0rem 0',
        overflow: 'hidden',
        zIndex: 1
      }}>
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1287&auto=format&fit=crop" alt="model" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
      </div>

      {/* Right image */}
      <div style={{
        position: 'absolute', right: '0', top: '0%', bottom: '0%',
        width: '30%',
        borderRadius: '0rem 0 0 0rem',
        overflow: 'hidden',
        zIndex: 1,
        opacity: 0.85
      }}>
        <img src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=1287&auto=format&fit=crop" alt="fashion" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
      </div>

      {/* Center text */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Flipped top text */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 6vw, 5rem)',
          fontWeight: 700, color: 'rgba(220,200,200,0.25)',
          transform: 'scaleY(-1)', letterSpacing: '0.05em',
          lineHeight: 1, marginBottom: '-0.5rem',
          userSelect: 'none'
        }}>FLAWLESS</div>

        {/* Main title */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 700, color: '#e8ddd0',
          fontStyle: 'italic', letterSpacing: '0.03em',
          lineHeight: 1, textShadow: '2px 2px 20px rgba(0,0,0,0.5)'
        }}>FLAWLESS</div>

        {/* Flipped bottom text */}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 6vw, 5rem)',
          fontWeight: 700, color: 'rgba(220,200,200,0.25)',
          transform: 'scaleY(-1)', letterSpacing: '0.05em',
          lineHeight: 1, marginTop: '-0.5rem',
          userSelect: 'none'
        }}>FLAWLESS</div>

        {/* Shop Now */}
        <button
          onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}
          style={{
            marginTop: '2rem',
            background: 'none', border: 'none',
            fontFamily: 'Georgia, serif', fontSize: '1.1rem',
            fontStyle: 'italic', color: '#e8ddd0',
            letterSpacing: '0.2em', cursor: 'pointer',
            textTransform: 'uppercase',
            textDecoration: 'underline', textUnderlineOffset: '6px'
          }}>
          Shop Now
        </button>
      </div>

      {/* FLA text overlapping left */}
      <div style={{ position: 'absolute', left: '28%', top: '25%', zIndex: 3, fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#1a0508', letterSpacing: '0.05em', transform: 'scaleX(-1)', userSelect: 'none' }}>FLA</div>

      {/* FLA text overlapping right */}
      <div style={{ position: 'absolute', right: '25%', top: '25%', zIndex: 3, fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#e8ddd0', letterSpacing: '0.05em', userSelect: 'none' }}>FLA</div>
    </section>
  )
}