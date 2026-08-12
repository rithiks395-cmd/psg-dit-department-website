import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Users, Cpu, Briefcase, Award, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { schemesData } from '../data/semesters';
import { facultyData } from '../data/faculty';
import { laboratoriesData } from '../data/laboratories';
import { projectsData } from '../data/projects';
import { eventsData } from '../data/events';
import { achievementsData } from '../data/achievements';

export function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const matches = [];

    // Search Faculty
    const allFaculty = [
      facultyData.hod,
      ...facultyData.teachingStaff,
      ...facultyData.technicalStaff
    ];
    allFaculty.forEach(f => {
      if (f.name.toLowerCase().includes(q) || f.specialization.toLowerCase().includes(q)) {
        matches.push({
          type: 'Faculty',
          icon: Users,
          title: f.name,
          subtitle: `${f.designation} - ${f.specialization.slice(0, 60)}...`,
          link: `/faculty/${f.id}`
        });
      }
    });

    // Search Laboratories
    laboratoriesData.forEach(lab => {
      if (lab.name.toLowerCase().includes(q) || lab.purpose.toLowerCase().includes(q)) {
        matches.push({
          type: 'Laboratory',
          icon: Cpu,
          title: lab.name,
          subtitle: lab.shortName,
          link: `/laboratories/${lab.id}`
        });
      }
    });

    // Search Subjects in 2024 Scheme
    schemesData.schemes[0].semesters.forEach(sem => {
      const allSubjects = [...sem.theory, ...sem.practicum, ...sem.practicals];
      allSubjects.forEach(sub => {
        if (sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q)) {
          matches.push({
            type: 'Subject',
            icon: BookOpen,
            title: `${sub.code}: ${sub.name}`,
            subtitle: `${sem.title} (${sub.type})`,
            link: `/subject/${sub.code}`
          });
        }
      });
    });

    // Search Projects
    projectsData.projects.forEach(proj => {
      if (proj.title.toLowerCase().includes(q) || proj.technologies.some(t => t.toLowerCase().includes(q))) {
        matches.push({
          type: 'Project',
          icon: Briefcase,
          title: proj.title,
          subtitle: `Category: ${proj.category} | Tech: ${proj.technologies.join(', ')}`,
          link: `/projects`
        });
      }
    });

    // Search Events
    eventsData.forEach(evt => {
      if (evt.title.toLowerCase().includes(q) || evt.description.toLowerCase().includes(q)) {
        matches.push({
          type: 'Event',
          icon: Calendar,
          title: evt.title,
          subtitle: `${evt.date} - ${evt.category}`,
          link: `/news-events/${evt.id}`
        });
      }
    });

    setResults(matches.slice(0, 8));
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (link) => {
    navigate(link);
    onClose();
    setQuery('');
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <div style={searchHeaderStyle}>
          <Search size={22} color="var(--primary)" />
          <input
            type="text"
            placeholder="Search subjects, faculty, laboratories, projects, events..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={inputStyle}
            autoFocus
          />
          <button onClick={onClose} style={closeButtonStyle}>
            <X size={20} />
          </button>
        </div>

        <div style={resultsContainerStyle}>
          {query.trim() === '' ? (
            <p style={emptyTextStyle}>Type to search across PSG Information Technology Department portal...</p>
          ) : results.length === 0 ? (
            <p style={emptyTextStyle}>No matching subjects, faculty, or labs found for "{query}".</p>
          ) : (
            results.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.link)}
                  style={resultItemStyle}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--primary-light)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={iconBoxStyle}>
                    <IconComp size={18} color="var(--primary)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={resultTitleStyle}>
                      <span>{item.title}</span>
                      <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>{item.type}</span>
                    </div>
                    <p style={resultSubtitleStyle}>{item.subtitle}</p>
                  </div>
                  <ArrowRight size={16} color="var(--text-muted)" />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.65)',
  backdropFilter: 'blur(4px)',
  zIndex: 1100,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem'
};

const modalStyle = {
  backgroundColor: '#FFFFFF',
  width: '100%',
  maxWidth: '680px',
  borderRadius: '16px',
  boxShadow: 'var(--shadow-lg)',
  overflow: 'hidden',
  border: '1px solid var(--border-color)'
};

const searchHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 1.25rem',
  borderBottom: '1px solid var(--border-color)',
  gap: '0.75rem'
};

const inputStyle = {
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '1.05rem',
  fontFamily: 'inherit',
  color: 'var(--text-main)'
};

const closeButtonStyle = {
  color: 'var(--text-muted)',
  padding: '0.25rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const resultsContainerStyle = {
  maxHeight: '400px',
  overflowY: 'auto',
  padding: '0.75rem'
};

const emptyTextStyle = {
  textAlign: 'center',
  padding: '2rem',
  color: 'var(--text-muted)',
  fontSize: '0.95rem'
};

const resultItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0.85rem 1rem',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease'
};

const iconBoxStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  backgroundColor: 'var(--primary-light)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const resultTitleStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: '600',
  fontSize: '0.95rem',
  color: 'var(--secondary)'
};

const resultSubtitleStyle = {
  fontSize: '0.825rem',
  color: 'var(--text-muted)',
  marginTop: '0.15rem'
};
