import React from 'react';
import { BookOpen } from 'lucide-react';

export function SubjectCard({ subject }) {
  return (
    <div className="glass-card" style={{ padding: '1.15rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          backgroundColor: subject.type?.includes('Practical') ? 'rgba(0, 194, 232, 0.12)' : 'rgba(37, 99, 235, 0.12)',
          color: subject.type?.includes('Practical') ? '#00C2E8' : 'var(--primary-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <BookOpen size={20} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#00C2E8', textShadow: '0 0 6px rgba(0, 194, 232, 0.20)' }}>{subject.code}</span>
            <span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{subject.type}</span>
            <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>{subject.category}</span>
          </div>
          <h4 style={{ fontSize: '1.025rem', color: 'var(--text-primary)', fontFamily: 'Outfit', fontWeight: 700 }}>{subject.name}</h4>
        </div>
      </div>
    </div>
  );
}
