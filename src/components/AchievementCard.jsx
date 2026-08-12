import React from 'react';
import { Award, Star, CheckCircle } from 'lucide-react';

export function AchievementCard({ student }) {
  return (
    <div className="glass-card" style={{ padding: '1.35rem', display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: '4px solid var(--accent-cyan)' }}>
      <div style={{ position: 'relative', width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--primary-blue)', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}>
        <img src={student.image} alt={student.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
          <span className="badge badge-accent" style={{ fontWeight: 800 }}>{student.rank}</span>
          <span style={{ fontWeight: 900, color: 'var(--primary-blue)', fontSize: '0.95rem' }}>{student.percentage}</span>
        </div>
        <h4 style={{ fontSize: '1.075rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>{student.name}</h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Roll No: {student.roll} | {student.distinction}</p>
      </div>
    </div>
  );
}
