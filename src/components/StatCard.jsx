import React from 'react';

export function StatCard({ label, value, icon: IconComponent }) {
  return (
    <div className="glass-card" style={{ padding: '1.85rem', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: '4px solid var(--primary-blue)' }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '16px',
        backgroundColor: 'rgba(0, 194, 232, 0.12)',
        color: '#00C2E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.25rem auto'
      }}>
        {IconComponent && <IconComponent size={28} />}
      </div>
      <h3 className="text-cyan-glow-md" style={{ fontSize: '2.15rem', fontWeight: 900, color: '#00C2E8', textShadow: '0 0 10px rgba(0, 194, 232, 0.28)', fontFamily: 'Outfit', lineHeight: 1.1 }}>{value}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 700, marginTop: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</p>
    </div>
  );
}
