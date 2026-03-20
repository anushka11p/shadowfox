import React from 'react'

export default function Cart({ cart, isOpen, onClose, onRemove, onCheckout }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  return (
    <>
      {isOpen && <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(44,36,24,0.3)', zIndex: 200 }} />}

      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0, width: '380px',
        background: '#6b0f1a', borderLeft: '1px solid #e8e2d6',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s ease',
        display: 'flex', flexDirection: 'column', zIndex: 201
      }}>
        <div style={{ padding: '2rem', borderBottom: 'rgba(180,30,30,0.6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color:'Gold' }}>Your Bag</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: '#b0a898' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '3rem', color: '#b0a898', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>Your bag is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1.2rem 0', borderBottom: '1px solid #e8e2d6' }}>
                <div style={{ width: '65px', height: '80px', background: '#f4f0e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', border: '1px solid #e8e2d6', flexShrink: 0 }}>{item.emoji}</div>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', marginBottom: '0.3rem', color:'white' }}>{item.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgb(255, 255, 255)' }}>₹{item.price} × {item.qty}</div>
                  <button onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', color: '#b0a898', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', marginTop: '0.5rem' }}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: '1.5rem 2rem', borderTop: 'rgba(180,30,30,0.6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b0a898' }}>Total</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, color:'white' }}>₹{total}</span>
            </div>
            <button onClick={onCheckout} style={{ width: '100%', background: '#2c2418', color: '#faf8f4', border: 'none', padding: '1rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '0.8rem' }}>Checkout</button>
            <button onClick={onClose} style={{ width: '100%', background: 'none', color: '#7a6e5f', border: '1px solid #e8e2d6', padding: '0.75rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  )
}