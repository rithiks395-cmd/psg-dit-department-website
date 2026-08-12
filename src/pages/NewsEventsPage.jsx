import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { EventCard } from '../components/EventCard';
import { eventsData as fallbackEvents } from '../data/events';
import { fetchEvents } from '../services/api';
import { Calendar } from 'lucide-react';

export function NewsEventsPage() {
  const [events, setEvents] = useState(fallbackEvents);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchEvents()
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setEvents(data);
      })
      .catch(() => {});
  }, []);

  const categories = ['All', 'Training', 'Workshops', 'Community Outreach', 'Events'];
  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div>
      <Breadcrumb items={[{ label: 'News & Events' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Department Activities"
            title="News, Seminars & Technical Workshops"
            subtitle="Explore events, training sessions, and outreach activities conducted by the Information Technology department."
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`badge ${filter === cat ? 'badge-primary' : 'badge-secondary'}`}
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem', cursor: 'pointer' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredEvents.map(evt => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
