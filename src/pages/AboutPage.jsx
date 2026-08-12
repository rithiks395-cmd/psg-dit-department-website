import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { departmentData } from '../data/department';
import { Eye, Target, Award, CheckCircle, ShieldCheck, BookOpen } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'About Department' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Est. 2006"
            title="About Department of Information Technology"
            subtitle="PSG Polytechnic College, Coimbatore"
          />

          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1rem', fontFamily: 'Outfit' }}>
              Department Profile & Legacy
            </h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {departmentData.about}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7' }}>
              The department continuously upgrades its curricula to Autonomous 2024 and 2021 schemes, incorporating modern fields like Artificial Intelligence, Machine Learning, Data Analytics, Cloud Computing, Cybersecurity, Augmented Reality, and Drone autonomous navigation.
            </p>
          </div>

          {/* Vision & Mission Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '2rem', borderTop: '5px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Eye size={28} color="var(--primary)" />
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>Department Vision</h3>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.7' }}>
                {departmentData.vision}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderTop: '5px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Target size={28} color="var(--accent)" />
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>Department Mission</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {departmentData.mission.map(m => (
                  <li key={m.id} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{m.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PEOs & PSOs */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle
              badge="Educational Goals"
              title="Program Educational Objectives (PEOs) & Specific Outcomes (PSOs)"
              center={false}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {departmentData.peos.map(peo => (
                <div key={peo.id} className="glass-card" style={{ padding: '1.75rem' }}>
                  <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>{peo.id}</span>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--secondary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>{peo.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{peo.description}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {departmentData.psos.map(pso => (
                <div key={pso.id} className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--accent)' }}>
                  <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>{pso.id}</span>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--secondary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>{pso.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{pso.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Outcomes (POs) */}
          <div>
            <SectionTitle
              badge="Graduate Attributes"
              title="Program Outcomes (PO1 to PO7)"
              subtitle="The diploma capabilities acquired by students upon successful graduation."
              center={false}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {departmentData.pos.map(po => (
                <div key={po.id} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span className="badge badge-secondary" style={{ fontSize: '0.9rem', fontWeight: 800, padding: '0.4rem 0.85rem' }}>{po.id}</span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontFamily: 'Outfit', marginBottom: '0.25rem' }}>{po.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{po.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
