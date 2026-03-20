import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
 
export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
 
  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }
 
  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }
 
  function handleSuccess() {
    setCart([])
    setCheckoutOpen(false)
    setOrderPlaced(true)
    setTimeout(() => setOrderPlaced(false), 3000)
  }
 
  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
 
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: '#faf8f4', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
 
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
 
      {/* Hero — scroll target for Collections */}
      <section id="collections">
        <Hero />
      </section>
 
      {/* Product Grid — scroll target for Collections & New In & Sale */}
      <section id="shop">
        <ProductGrid onAddToCart={addToCart} />
      </section>
 
      {/* New In section */}
      <section id="new-in" />
 
      {/* Sale section */}
      <section id="sale" />
 
      {/* About section */}
      <section id="about" style={{ padding: '6rem 4rem', background: '#6b0f1a', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: '#e8ddd0', marginBottom: '1.5rem', fontStyle: 'italic' }}>About Flawless</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(232,221,208,0.75)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.9rem', letterSpacing: '0.04em' }}>
          Flawless is a curated fashion label built for those who move with intention. Every piece is chosen for its texture, silhouette, and staying power beyond trends, beyond seasons.
        </p>
      </section>
 
      <Cart
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={() => { setCartOpen(false); setCheckoutOpen(true) }}
      />
 
      <Checkout
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        onSuccess={handleSuccess}
      />
 
      {orderPlaced && (
        <div style={{ fontFamily: 'DM Sans, sans-serif', background: 'rgba(220, 174, 223, 0.95)', minHeight: '100vh' }}>
          Order Confirmed! ✦
        </div>
      )}
    </div>
  )
}