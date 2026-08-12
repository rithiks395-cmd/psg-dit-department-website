import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Layers, Award } from 'lucide-react';

export function SemesterCard({ semester }) {
  const totalTheory = semester.theory ? semester.theory.length : 0;
  const totalPracticals = semester.practicals ? semester.practicals.length : 0;

  return (
    <div className="glass-card" style={{ padding: '1.85rem', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid var(--accent-cyan)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          background: 'var(--gradient-tech)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontFamily: 'Outfit',
          fontSize: '1.15rem'
        }}>
          S{semester.number}
        </div>
        <span className="badge badge-cyan">Semester {semester.number}</span>
      </div>

      <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontFamily: 'Outfit', fontWeight: 800 }}>
        Semester {semester.number} Subjects
      </h3>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.75rem', flex: 1 }}>
        {semester.description}
      </p>

      {/* Stats Summary */}
      <div style={{ display: 'flex', gap: '1rem', backgroundColor: '#F1F5F9', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
        <div>
          <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}>{totalTheory} Theory</strong>
          <span style={{ color: 'var(--text-muted)' }}>Subjects</span>
        </div>
        <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '1rem' }}>
          <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}>{totalPracticals} Labs</strong>
          <span style={{ color: 'var(--text-muted)' }}>Practicals</span>
        </div>
      </div>

      <Link to={`/academics/${semester.id}`} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
        Explore Subjects <ChevronRight size={16} />
      </Link>
    </div>
  );
}
