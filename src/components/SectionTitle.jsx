import React from 'react';

export function SectionTitle({ badge, title, subtitle, center = true }) {
  const highlightKeywords = (text) => {
    if (!text || typeof text !== 'string') return text;

    const keywords = [
      'Department of Information Technology',
      'Information Technology',
      'PSG Polytechnic College',
      'Polytechnic College',
      'News & Workshops',
      'News & Events',
      'Academic Calendar',
      'Student Projects',
      'Laboratories & Facilities',
      'Laboratories',
      'Laboratory',
      'Faculty & Staff',
      'Faculty & Leadership',
      'Faculty',
      'Academics',
      'Projects',
      'Achievements',
      'Contact Us',
      'Subject Matrix',
      'Course Architecture',
      'Department'
    ];

    const matchedKw = keywords.find(kw => text.includes(kw));

    if (matchedKw) {
      const parts = text.split(matchedKw);
      return (
        <>
          {parts[0]}
          <span 
            className="text-cyan-glow-md" 
            style={{ 
              color: '#00C2E8', 
              textShadow: '0 0 10px rgba(0, 194, 232, 0.28)',
              fontWeight: 800
            }}
          >
            {matchedKw}
          </span>
          {parts[1]}
        </>
      );
    }

    return text;
  };

  return (
    <div className="section-header" style={{ textAlign: center ? 'center' : 'left', margin: center ? '0 auto 3.5rem auto' : '0 0 3.5rem 0' }}>
      {badge && <span className="badge badge-cyan" style={{ marginBottom: '0.85rem' }}>{badge}</span>}
      <h2 style={{ fontSize: '2.4rem', color: '#0F172A', fontFamily: 'Outfit', fontWeight: 800, letterSpacing: '-0.5px' }}>
        {highlightKeywords(title)}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.6rem', lineHeight: '1.6' }}>
          {highlightKeywords(subtitle)}
        </p>
      )}
    </div>
  );
}
