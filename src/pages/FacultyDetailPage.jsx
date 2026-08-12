import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { facultyData as fallbackFaculty } from '../data/faculty';
import { fetchFaculty } from '../services/api';
import { ExternalLink, BookOpen, Award, Mail, ArrowLeft, ShieldCheck, CheckCircle } from 'lucide-react';

export function FacultyDetailPage() {
  const { facultyId } = useParams();
  const [faculty, setFaculty] = useState(() => {
    const allFallback = [fallbackFaculty.hod, ...fallbackFaculty.teachingStaff, ...fallbackFaculty.technicalStaff];
    return allFallback.find(f => f.id === facultyId) || fallbackFaculty.hod;
  });

  useEffect(() => {
    fetchFaculty()
      .then(res => {
        if (res && res.raw) {
          const found = res.raw.find(f => f.id === facultyId);
          if (found) setFaculty(found);
        }
      })
      .catch(() => {});
  }, [facultyId]);

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Faculty & Staff', link: '/faculty' },
        { label: faculty.name }
      ]} />

      <section className="section-padding">
        <div className="container">
          <Link to="/faculty" className="btn btn-outline btn-sm" style={{ marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Back to All Faculty
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            
            {/* Left Image & Contact Card */}
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <img
                src={faculty.image}
                alt={faculty.name}
                style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem auto', border: '4px solid var(--primary-light)' }}
              />
              <h2 style={{ fontSize: '1.6rem', color: 'var(--secondary)', fontFamily: 'Outfit', marginBottom: '0.35rem' }}>
                {faculty.name}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.85rem' }}>
                {faculty.designation}
              </p>
              <span className="badge badge-accent" style={{ marginBottom: '1.5rem' }}>
                {faculty.degree || faculty.qualification}
              </span>

              {faculty.email && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <Mail size={16} color="var(--primary)" /> {faculty.email}
                </div>
              )}

              {faculty.irinsProfile && (
                <a
                  href={faculty.irinsProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Official IRINS Faculty Profile <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Right Detailed Stats & Specializations */}
            <div>
              <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--secondary)', marginBottom: '1.25rem', fontFamily: 'Outfit' }}>
                  Professional Profile & Academic Summary
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={statBoxStyle}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Teaching Experience</span>
                    <strong style={{ fontSize: '1.15rem', color: 'var(--secondary)' }}>{faculty.teachingExp || faculty.experience}</strong>
                  </div>
                  {faculty.industryExp && (
                    <div style={statBoxStyle}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Industry Experience</span>
                      <strong style={{ fontSize: '1.15rem', color: 'var(--secondary)' }}>{faculty.industryExp}</strong>
                    </div>
                  )}
                  {faculty.publications > 0 && (
                    <div style={statBoxStyle}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Journal Publications</span>
                      <strong style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>{faculty.publications} Papers</strong>
                    </div>
                  )}
                </div>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '0.6rem', fontFamily: 'Outfit' }}>
                  Areas of Specialization
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {faculty.specialization}
                </p>

                {faculty.bio && (
                  <>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '0.6rem', fontFamily: 'Outfit' }}>
                      Academic Leadership
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {faculty.bio}
                    </p>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

const statBoxStyle = {
  backgroundColor: 'var(--bg-alt)',
  padding: '1rem',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem'
};
