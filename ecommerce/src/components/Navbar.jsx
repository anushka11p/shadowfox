
import React from 'react'
 
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
 
const navLinks = [
  { label: 'Collections', id: 'shop' },
  { label: 'New In',      id: 'new-in' },
  { label: 'Sale',        id: 'sale' },
  { label: 'About',       id: 'about' },
]
 
export default function Navbar({ cartCount, onCartOpen }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.4rem 4rem',
      background: '#6b0f1a',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e8e2d6',
      fontFamily: 'DM Sans, sans-serif'
    }}>
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, letterSpacing: '0.5em', color: '#e8ddd0' }}>Flawless</div>
 
      <div style={{ display: 'flex', gap: '3rem' }}>
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#A2887B', fontSize: '0.78rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif'
            }}
          >
            {label}
          </button>
        ))}
      </div>
 
      <button onClick={onCartOpen} style={{
        background: 'none', border: '1px solid #e8e2d6', color: '#7a6e5f',
        padding: '0.5rem 1.2rem', fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', position: 'relative'
      }}>
        Bag
        {cartCount > 0 && (
          <span style={{
            position: 'absolute', top: '-7px', right: '-7px',
            background: '#8b7355', color: 'white', width: '16px', height: '16px',
            borderRadius: '50%', fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>{cartCount}</span>
        )}
      </button>
    </nav>
  )
}
