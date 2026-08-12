import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, UserCheck, Handshake } from 'lucide-react';

export function LabCard({ lab }) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
      <div style={{ position: 'relative', height: '210px', overflow: 'hidden', backgroundColor: '#0F172A' }}>
        <img
          src={lab.image}
          alt={lab.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'rgba(7, 10, 18, 0.88)',
          color: '#00C2E8',
          textShadow: '0 0 8px rgba(0, 194, 232, 0.25)',
          border: '1px solid rgba(0, 194, 232, 0.35)',
          padding: '0.35rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: 700,
          backdropFilter: 'blur(8px)'
        }}>
          {lab.shortName}
        </div>
      </div>

      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.65rem', fontFamily: 'Outfit', lineHeight: 1.35 }}>
          {lab.name}
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {lab.purpose}
        </p>

        <div style={{ fontSize: '0.825rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <UserCheck size={16} color="var(--primary-blue)" />
            <span><strong>Lab In-Charge:</strong> {lab.labInCharge}</span>
          </div>
          {lab.partner && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00C2E8', textShadow: '0 0 6px rgba(0, 194, 232, 0.20)' }}>
              <Handshake size={16} />
              <span><strong>Partner:</strong> {lab.partner}</span>
            </div>
          )}
        </div>

        <Link to={`/laboratories/${lab.id}`} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
          Explore Lab Infrastructure <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
