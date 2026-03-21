import React, { useState, useEffect } from 'react'
import { products } from '../data/products'

export default function ProductGrid({ onAddToCart, activeFilter, setActiveFilter }) {
  const [maxPrice, setMaxPrice] = useState(300)
  const [sortOrder, setSortOrder] = useState('default')
  const [cols, setCols] = useState(4)

  useEffect(() => {
    function updateCols() {
      const w = window.innerWidth
      if (w < 480) setCols(1)
      else if (w < 768) setCols(2)
      else if (w < 1024) setCols(3)
      else setCols(4)
    }
    updateCols()
    window.addEventListener('resize', updateCols)
    return () => window.removeEventListener('resize', updateCols)
  }, [])

  let filtered = products.filter(p => {
    if (activeFilter === 'sale') return p.badge === 'sale' && p.price <= maxPrice
    if (activeFilter === 'new') return p.badge === 'new' && p.price <= maxPrice
    return (activeFilter === 'all' || p.category === activeFilter) && p.price <= maxPrice
  })

  if (sortOrder === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sortOrder === 'price-desc') filtered.sort((a, b) => b.price - a.price)
  else if (sortOrder === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name))
  else if (sortOrder === 'rating') filtered.sort((a, b) => b.rating - a.rating)

  const isMobile = cols <= 2

  return (
    <section id="shop" style={{ padding: isMobile ? '2rem 1rem' : '4rem', borderTop: 'rgba(255, 255, 255, 0.95)', background: '#6b0f1a' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 300 }}>
          All <em style={{ fontStyle: 'italic', color: 'rgba(236, 193, 230, 0.95)' }}>Pieces</em>
        </h2>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.95)' }}>{filtered.length} products</span>
      </div>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', border: '1px solid #e8e2d6', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.8rem 1rem', borderRight: isMobile ? 'none' : '1px solid #e8e2d6', borderBottom: isMobile ? '1px solid #e8e2d6' : 'none', flexWrap: 'wrap', gap: '0.2rem' }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(241, 224, 196, 0.95)', marginRight: '0.5rem' }}>Category</span>
          {['all', 'tops', 'bottoms', 'outerwear', 'accessories'].map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{
              background: 'none', border: 'none',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: activeFilter === cat ? 500 : 300,
              padding: '0.3rem 0.6rem', fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem', letterSpacing: '0.08em', cursor: 'pointer', textTransform: 'uppercase'
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', padding: '0.8rem 1rem', borderBottom: isMobile ? '1px solid #e8e2d6' : 'none', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.95)' }}>Price</span>
          <input type="range" min="0" max="300" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} style={{ width: '100px', accentColor: 'rgba(255, 255, 255, 0.95)' }} />
          <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.95)', minWidth: '55px' }}>Up to ₹{maxPrice}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', padding: '0.8rem 1rem', gap: '1rem', marginLeft: isMobile ? 0 : 'auto' }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b0a898' }}>Sort</span>
          <select onChange={e => setSortOrder(e.target.value)} style={{ background: 'none', border: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'rgba(255, 253, 254, 0.95)', cursor: 'pointer', outline: 'none', textTransform: 'uppercase' }}>
            <option value="default">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="name-asc">A – Z</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '5rem', color: '#b0a898', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.3rem' }}>No pieces found — try adjusting your filters.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: isMobile ? '1rem' : '1.5rem' }}>
          {filtered.map(p => (
            <div key={p.id} style={{ cursor: 'pointer' }}>
              <div style={{ aspectRatio: '3/4', background: '#f4f0e8', border: '1px solid #e8e2d6', marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {p.badge && (
                  <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', background: p.badge === 'sale' ? '#8b7355' : '#2c2418', color: 'white', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.2rem 0.5rem' }}>{p.badge}</div>
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.8rem', background: 'rgba(250,248,244,0.95)' }}>
                  <button onClick={() => onAddToCart(p)} style={{ width: '100%', background: '#2c2418', color: '#faf8f4', border: 'none', padding: '0.6rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' }}>Add to Bag</button>
                </div>
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(238, 176, 204, 0.95)', marginBottom: '0.3rem' }}>{p.category}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', marginBottom: '0.4rem', color: 'white' }}>{p.name}</div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.85rem' }}>
                <span style={{ color: 'rgba(238, 176, 204, 0.95)' }}>₹{p.price}</span>
                {p.oldPrice && <span style={{ textDecoration: 'line-through', color: 'rgba(238, 176, 204, 0.95)' }}>₹{p.oldPrice}</span>}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(238, 145, 16, 0.95)', marginTop: '0.25rem' }}>{'★'.repeat(Math.round(p.rating))} {p.rating}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}