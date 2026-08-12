import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { academicCalendarData } from '../data/academicCalendar';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export function CalendarPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Academic Calendar' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge={academicCalendarData.academicYear}
            title="Department Academic Calendar"
            subtitle="Schedule of reopening, continuous assessment tests (CAT), practical exams, and autonomous theory exams."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {academicCalendarData.semesters.map((sem, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{sem.term}</h3>
                  <span className="badge badge-accent" style={{ fontSize: '0.85rem' }}>{sem.months}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {sem.events.map((evt, eIdx) => (
                    <div key={eIdx} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', backgroundColor: 'var(--bg-alt)', borderRadius: '12px', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: evt.type === 'Examination' ? 'var(--primary-light)' : 'var(--accent-light)',
                          color: evt.type === 'Examination' ? 'var(--primary)' : 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Calendar size={20} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.025rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{evt.event}</h4>
                          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Event Category: {evt.type}</span>
                        </div>
                      </div>

                      <span className="badge badge-secondary" style={{ fontSize: '0.85rem', fontWeight: 700 }}>
                        {evt.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
