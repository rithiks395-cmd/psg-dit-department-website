import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { FacultyCard } from '../components/FacultyCard';
import { facultyData as fallbackFaculty } from '../data/faculty';
import { fetchFaculty } from '../services/api';
import { Users, Award, ExternalLink, Loader2 } from 'lucide-react';

export function FacultyPage() {
  const [hod, setHod] = useState(fallbackFaculty.hod);
  const [teachingStaff, setTeachingStaff] = useState(fallbackFaculty.teachingStaff);
  const [technicalStaff, setTechnicalStaff] = useState(fallbackFaculty.technicalStaff);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFaculty()
      .then(res => {
        if (res) {
          if (res.hod) setHod(res.hod);
          if (res.teachingStaff && res.teachingStaff.length > 0) setTeachingStaff(res.teachingStaff);
          if (res.technicalStaff && res.technicalStaff.length > 0) setTechnicalStaff(res.technicalStaff);
        }
      })
      .catch(err => {
        console.error('Error loading faculty API:', err);
        setError('Unable to load dynamic faculty information. Showing cached records.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Faculty & Staff' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Academic Leadership"
            title="Faculty & Technical Staff"
            subtitle="Meet our committed faculty members, laboratory instructors, guest professors, and corporate advisory board."
          />

          {loading && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#00C2E8', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Loader2 size={20} className="animate-spin" /> Loading faculty information...
            </div>
          )}

          {error && (
            <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#F43F5E', padding: '0.75rem 1.25rem', borderRadius: '8px', marginBottom: '2rem', fontSize: '0.9rem', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {/* Section 1: HOD & Teaching Staff */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary)', marginBottom: '1.75rem', fontFamily: 'Outfit', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Teaching Faculty
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
              {hod && <FacultyCard faculty={hod} />}
              {teachingStaff.map(f => (
                <FacultyCard key={f.id} faculty={f} />
              ))}
            </div>
          </div>

          {/* Section 2: Technical & Administrative Staff */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary)', marginBottom: '1.75rem', fontFamily: 'Outfit', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Technical & Support Staff
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
              {technicalStaff.map(ts => (
                <div key={ts.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img src={ts.image} alt={ts.name} style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-color)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{ts.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{ts.designation} ({ts.degree || ts.qualification})</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{ts.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Guest Professor & Advisory Board */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Guest Professor */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '1.25rem', fontFamily: 'Outfit' }}>Guest Professor</h3>
              {fallbackFaculty.guestProfessors.map(gp => (
                <div key={gp.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img src={gp.image} alt={gp.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{gp.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{gp.designation}</p>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{gp.institution}</p>
                    <a href={gp.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.4rem' }}>
                      LinkedIn Profile <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate Advisory Board */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '1.25rem', fontFamily: 'Outfit' }}>Corporate Advisory Board</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {fallbackFaculty.advisoryBoard.map(ab => (
                  <div key={ab.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <img src={ab.image} alt={ab.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{ab.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{ab.designation}</p>
                      <a href={ab.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                        LinkedIn Profile <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
