import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export function EventCard({ event }) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#0F172A' }}>
        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: '#0F172A',
          color: '#00C2E8',
          textShadow: '0 0 8px rgba(0, 194, 232, 0.25)',
          border: '1px solid rgba(0, 194, 232, 0.35)',
          padding: '0.3rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: 700
        }}>
          {event.category}
        </div>
      </div>

      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#00C2E8', textShadow: '0 0 6px rgba(0, 194, 232, 0.20)', fontWeight: 700, marginBottom: '0.6rem' }}>
          <Calendar size={15} /> {event.date}
        </div>

        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.65rem', fontFamily: 'Outfit', lineHeight: 1.35 }}>
          {event.title}
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.35rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {event.description}
        </p>

        <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1.35rem', marginTop: 'auto' }}>
          <MapPin size={15} color="var(--accent-cyan)" /> {event.location}
        </div>

        <Link to={`/news-events/${event.id}`} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
          Read More Details <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
