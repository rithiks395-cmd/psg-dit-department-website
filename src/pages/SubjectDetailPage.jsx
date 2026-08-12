import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { subjectsData } from '../data/subjects';
import { BookOpen, CheckCircle, Clock, Award, FileText, ArrowLeft, Info } from 'lucide-react';

export function SubjectDetailPage() {
  const { subjectId } = useParams();
  const subject = subjectsData[subjectId];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Academics', link: '/academics' },
        { label: subject ? subject.name : `Subject Code: ${subjectId}` }
      ]} />

      <section className="section-padding">
        <div className="container">
          {!subject ? (
            /* Fallback for subjects without extended unit breakdown per Requirement 9 & 29 */
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <Info size={32} />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontFamily: 'Outfit', color: 'var(--secondary)', marginBottom: '0.75rem' }}>
                Subject Code: {subjectId}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                Official course metadata registered under PSG Autonomous 2024 Scheme. Detailed Unit-wise course content will be updated by the department based on the official curriculum document.
              </p>
              <Link to="/academics" className="btn btn-primary">
                <ArrowLeft size={16} /> Back to Academics Overview
              </Link>
            </div>
          ) : (
            <div>
              {/* Header Box */}
              <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem', borderLeft: '6px solid var(--primary)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="badge badge-primary">{subject.code}</span>
                  <span className="badge badge-secondary">{subject.semester}</span>
                  <span className="badge badge-accent">{subject.type}</span>
                </div>
                <h1 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', color: 'var(--secondary)', marginBottom: '1rem' }}>
                  {subject.name}
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {subject.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', fontSize: '0.9rem', color: 'var(--text-main)', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                  <div><strong>Credits:</strong> {subject.credits} Credits</div>
                  <div><strong>Hours / Week:</strong> {subject.hoursPerWeek} Hours</div>
                  <div><strong>Scheme:</strong> {subject.scheme}</div>
                  <div><strong>Category:</strong> {subject.category}</div>
                </div>
              </div>

              {/* Units Accordion / List */}
              <SectionTitle badge="Course Content" title="Unit-Wise Course Architecture" center={false} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
                {subject.units.map((unit, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span className="badge badge-primary" style={{ fontWeight: 800 }}>{unit.unit}</span>
                      <h3 style={{ fontSize: '1.2rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>{unit.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                      {unit.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Experiments */}
              {subject.experiments && (
                <div style={{ marginBottom: '4rem' }}>
                  <SectionTitle badge="Practical Lab" title="Laboratory Experiments & Practical Modules" center={false} />
                  <div className="glass-card" style={{ padding: '2rem' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {subject.experiments.map((exp, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                          <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                          <span><strong>Exp {idx + 1}:</strong> {exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* References */}
              {subject.references && (
                <div>
                  <SectionTitle badge="Textbooks" title="Suggested Books & References" center={false} />
                  <div className="glass-card" style={{ padding: '2rem' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {subject.references.map((ref, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                          <BookOpen size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                          <span>{ref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </section>
    </div>
  );
}
