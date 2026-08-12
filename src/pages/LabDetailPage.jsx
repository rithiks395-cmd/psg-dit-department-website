import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { laboratoriesData } from '../data/laboratories';
import { Cpu, UserCheck, Handshake, CheckCircle, ArrowLeft, BookOpen, Wrench } from 'lucide-react';

export function LabDetailPage() {
  const { labId } = useParams();
  const lab = laboratoriesData.find(l => l.id === labId) || laboratoriesData[0];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Laboratories', link: '/laboratories' },
        { label: lab.name }
      ]} />

      <section className="section-padding">
        <div className="container">
          <Link to="/laboratories" className="btn btn-outline btn-sm" style={{ marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Back to Laboratories List
          </Link>

          {/* Banner Header */}
          <div className="glass-card" style={{ overflow: 'hidden', marginBottom: '3rem' }}>
            <div style={{ height: '320px', width: '100%', position: 'relative' }}>
              <img src={lab.image} alt={lab.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem', color: '#FFFFFF' }}>
                <span className="badge badge-accent" style={{ marginBottom: '0.5rem', width: 'fit-content' }}>{lab.shortName}</span>
                <h1 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', color: '#FFFFFF' }}>{lab.name}</h1>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lab In-Charge</span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontFamily: 'Outfit' }}>{lab.labInCharge}</h4>
              </div>
              {lab.partner && (
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Industry Partner</span>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'Outfit' }}>{lab.partner}</h4>
                </div>
              )}
            </div>
          </div>

          {/* Purpose & Objectives */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1rem', fontFamily: 'Outfit' }}>
              Laboratory Purpose & Scope
            </h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {lab.purpose}
            </p>

            <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '1rem', fontFamily: 'Outfit' }}>
              Key Objectives & Training Scope
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {lab.objectives.map((obj, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware & Equipment */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Wrench size={24} color="var(--primary)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>Hardware & Software Infrastructure</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {lab.equipment.map((eq, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--primary)' }}>•</strong>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Curriculum Subjects */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <BookOpen size={24} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>Associated Courses</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {lab.relatedSubjects.map((sub, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)', padding: '0.6rem', backgroundColor: 'var(--bg-alt)', borderRadius: '8px' }}>
                    <span style={{ fontWeight: 600 }}>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
