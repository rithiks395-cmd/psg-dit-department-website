import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { SubjectCard } from '../components/SubjectCard';
import { schemesData } from '../data/semesters';
import { fetchSubjects } from '../services/api';
import { BookOpen, Search, Layers, FileText } from 'lucide-react';

export function SemesterDetailPage() {
  const { semId } = useParams();
  const [filter, setFilter] = useState('All');
  const [dbSubjects, setDbSubjects] = useState([]);

  // Find semester from 2024 scheme
  const semester = schemesData.schemes[0].semesters.find(s => s.id === semId) || schemesData.schemes[0].semesters[0];

  useEffect(() => {
    fetchSubjects()
      .then(subs => {
        if (Array.isArray(subs)) {
          setDbSubjects(subs.filter(s => s.semester_id === semId));
        }
      })
      .catch(() => {});
  }, [semId]);

  const fallbackSubjects = [
    ...(semester.theory || []),
    ...(semester.practicum || []),
    ...(semester.practicals || []),
    ...(semester.audit || [])
  ];

  const allSubjects = dbSubjects.length > 0 ? dbSubjects : fallbackSubjects;
  const filteredSubjects = filter === 'All' ? allSubjects : allSubjects.filter(s => s.type === filter);

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Academics', link: '/academics' },
        { label: semester.title }
      ]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge={`2024 Autonomous Scheme`}
            title={`${semester.title} Course Structure`}
            subtitle={semester.description}
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {['All', 'Theory', 'Practicum', 'Practical', 'Audit', 'Elective'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`badge ${filter === cat ? 'badge-primary' : 'badge-secondary'}`}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                {cat} Courses
              </button>
            ))}
          </div>

          {/* Subject List Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {filteredSubjects.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                No subjects found under category "{filter}".
              </div>
            ) : (
              filteredSubjects.map(sub => (
                <SubjectCard key={sub.id} subject={sub} />
              ))
            )}
          </div>

          {/* Semester Nav Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
            {semester.number > 1 ? (
              <Link to={`/academics/s${semester.number - 1}`} className="btn btn-outline">
                ← Semester {semester.number - 1}
              </Link>
            ) : <div />}

            {semester.number < 6 && (
              <Link to={`/academics/s${semester.number + 1}`} className="btn btn-primary">
                Semester {semester.number + 1} →
              </Link>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
