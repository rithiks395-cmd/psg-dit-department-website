import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { SemesterCard } from '../components/SemesterCard';
import { schemesData } from '../data/semesters';
import { BookOpen, Layers, CheckCircle } from 'lucide-react';

export function AcademicsPage() {
  const [activeTab, setActiveTab] = useState('2024 Scheme');

  const selectedScheme = schemesData.schemes.find(s => s.schemeYear === activeTab) || schemesData.schemes[0];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Academics' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Autonomous Curriculum"
            title="Department Academics & Course Structures"
            subtitle="Select scheme to explore Semesters 1 to 6 course distributions."
          />

          {/* Scheme Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            {['2024 Scheme', '2021 Scheme'].map(scheme => (
              <button
                key={scheme}
                onClick={() => setActiveTab(scheme)}
                className={`btn ${activeTab === scheme ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.75rem 2rem' }}
              >
                <Layers size={18} /> {scheme}
              </button>
            ))}
          </div>

          {/* Semesters Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {selectedScheme.semesters.map(sem => (
              <SemesterCard key={sem.id} semester={sem} />
            ))}
          </div>

          {/* Electives Section */}
          {selectedScheme.electives && (
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>
                Elective Theory Courses (Two Theory to be Opted)
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Students in Semesters 5 and 6 choose specialized elective theory tracks:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {selectedScheme.electives.map((el, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--bg-alt)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>{el.code || `ELECTIVE ${idx + 1}`}</span>
                    </div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', fontFamily: 'Outfit', marginBottom: '0.35rem' }}>{el.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{el.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
