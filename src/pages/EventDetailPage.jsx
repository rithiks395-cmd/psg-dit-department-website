import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { eventsData } from '../data/events';
import { Calendar, MapPin, ArrowLeft, User, ShieldCheck } from 'lucide-react';

export function EventDetailPage() {
  const { eventId } = useParams();
  const event = eventsData.find(e => e.id === eventId) || eventsData[0];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'News & Events', link: '/news-events' },
        { label: event.title }
      ]} />

      <section className="section-padding">
        <div className="container">
          <Link to="/news-events" className="btn btn-outline btn-sm" style={{ marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Back to All Events
          </Link>

          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <div style={{ height: '350px', width: '100%', position: 'relative' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem', color: '#FFFFFF' }}>
                <span className="badge badge-accent" style={{ marginBottom: '0.5rem', width: 'fit-content' }}>{event.category}</span>
                <h1 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', color: '#FFFFFF' }}>{event.title}</h1>
              </div>
            </div>

            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', fontSize: '0.95rem', color: 'var(--text-main)', paddingBottom: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={18} color="var(--primary)" />
                  <span><strong>Date:</strong> {event.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} color="var(--accent)" />
                  <span><strong>Venue:</strong> {event.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={18} color="var(--secondary)" />
                  <span><strong>Organizer:</strong> {event.organizer}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1rem', fontFamily: 'Outfit' }}>
                Event Summary & Highlights
              </h3>
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
