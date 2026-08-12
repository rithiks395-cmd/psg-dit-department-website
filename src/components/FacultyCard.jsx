import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export function FacultyCard({ faculty }) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
      {/* Faculty Image Frame */}
      <div style={{ position: 'relative', height: '230px', backgroundColor: '#0F172A', overflow: 'hidden' }}>
        <img
          src={faculty.image}
          alt={faculty.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
        />
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          backgroundColor: 'rgba(7, 10, 18, 0.88)',
          backdropFilter: 'blur(8px)',
          color: '#00C2E8',
          textShadow: '0 0 8px rgba(0, 194, 232, 0.25)',
          border: '1px solid rgba(0, 194, 232, 0.35)',
          padding: '0.3rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.775rem',
          fontWeight: 700
        }}>
          {faculty.designation}
        </div>
      </div>

      {/* Faculty Details */}
      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem', fontFamily: 'Outfit' }}>
          {faculty.name}
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#00C2E8', textShadow: '0 0 6px rgba(0, 194, 232, 0.20)', fontWeight: 700, marginBottom: '0.95rem' }}>
          {faculty.degree || faculty.qualification}
        </p>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
          <div><strong>Experience:</strong> {faculty.teachingExp || faculty.experience || 'Faculty Member'}</div>
          {faculty.publications > 0 && <div><strong>Publications:</strong> {faculty.publications} Research Papers</div>}
          <div style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            <strong>Specialization:</strong> {faculty.specialization}
          </div>
        </div>

        {/* Action CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
          <Link to={`/faculty/${faculty.id}`} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
            View Profile <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
