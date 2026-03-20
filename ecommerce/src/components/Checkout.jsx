import React, { useState } from 'react'

export default function Checkout({ isOpen, onClose, cart, onSuccess }) {
  const [step, setStep] = useState(1)
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = total > 200 ? 0 : 49

  if (!isOpen) return null

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,36,24,0.5)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: '#faf8f4', border: '1px solid #e8e2d6', width: '100%', maxWidth: '520px', maxHeight: '88vh', overflowY: 'auto' }}>
        
        {/* Header */}
        <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid #e8e2d6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300 }}>Checkout</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: '#b0a898' }}>✕</button>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e8e2d6' }}>
          {['Shipping', 'Payment', 'Review'].map((s, i) => (
            <div key={s} style={{ flex: 1, textAlign: 'center', padding: '0.7rem', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: step === i + 1 ? '#8b7355' : '#b0a898', borderBottom: step === i + 1 ? '1px solid #8b7355' : '1px solid transparent', marginBottom: '-1px' }}>{s}</div>
          ))}
        </div>

        <div style={{ padding: '2.5rem' }}>

          {/* Step 1 - Shipping */}
          {step === 1 && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <Field label="First Name" placeholder="Anushka" />
                <Field label="Last Name" placeholder="P" />
              </div>
              <Field label="Email" placeholder="you@email.com" />
              <Field label="Address" placeholder="123 Main Street" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <Field label="City" placeholder="Bengaluru" />
                <Field label="PIN Code" placeholder="560001" />
              </div>
              <StepBtn onClick={() => setStep(2)}>Continue to Payment</StepBtn>
            </div>
          )}

          {/* Step 2 - Payment */}
          {step === 2 && (
            <div>
              <Field label="Cardholder Name" placeholder="Anushka P" />
              <Field label="Card Number" placeholder="1234 5678 9012 3456" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <Field label="Expiry" placeholder="MM / YY" />
                <Field label="CVV" placeholder="•••" />
              </div>
              <StepBtn onClick={() => setStep(3)}>Review Order</StepBtn>
            </div>
          )}

          {/* Step 3 - Review */}
          {step === 3 && (
            <div>
              {cart.map(i => (
                <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 0', borderBottom: '1px solid #e8e2d6', fontSize: '0.85rem', color: '#7a6e5f' }}>
                  <span>{i.name} × {i.qty}</span><span>₹{i.price * i.qty}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 0', borderBottom: '1px solid #e8e2d6', fontSize: '0.85rem', color: '#7a6e5f' }}>
                <span>Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', fontSize: '0.95rem', fontWeight: 500 }}>
                <span>Total</span><span>₹{total + shipping}</span>
              </div>
              <StepBtn onClick={() => { onSuccess(); setStep(1); }}>Place Order</StepBtn>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

function Field({ label, placeholder }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b0a898', marginBottom: '0.4rem' }}>{label}</label>
      <input placeholder={placeholder} style={{ width: '100%', background: '#f4f0e8', border: '1px solid #e8e2d6', color: '#2c2418', padding: '0.7rem 0.9rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', outline: 'none' }} />
    </div>
  )
}

function StepBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ width: '100%', background: '#2c2418', color: '#faf8f4', border: 'none', padding: '0.9rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', marginTop: '1rem' }}>{children}</button>
  )
}