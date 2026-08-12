import React from 'react';
import { Maximize2 } from 'lucide-react';

export function GalleryCard({ image, onClick }) {
  return (
    <div
      className="glass-card"
      onClick={() => onClick(image)}
      style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative', borderRadius: '16px', height: '240px', border: '1px solid var(--border-light)' }}
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(7, 10, 18, 0.9) 0%, transparent 60%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1.35rem',
        color: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span className="badge badge-cyan" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>{image.category}</span>
            <h4 style={{ fontSize: '0.975rem', color: '#FFFFFF', fontFamily: 'Outfit', lineHeight: 1.3 }}>{image.title}</h4>
          </div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Maximize2 size={16} color="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
  );
}
