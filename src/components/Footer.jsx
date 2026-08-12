import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Mail, Globe, ExternalLink } from 'lucide-react';
import { PsgLogo3D } from './PsgLogo3D';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#070A12', color: '#94A3B8', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Col 1: About Department */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.35rem' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '3px 5px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                flexShrink: 0
              }}>
                <PsgLogo3D height="44px" />
              </div>
              <div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontFamily: 'Outfit', fontWeight: 900, lineHeight: 1.2 }}>DEPARTMENT OF INFORMATION TECHNOLOGY</h3>
                <p style={{ fontSize: '0.725rem', color: '#00C2E8', textShadow: '0 0 8px rgba(0, 194, 232, 0.25)', fontWeight: '700', letterSpacing: '0.6px', marginTop: '2px' }}>PSG POLYTECHNIC COLLEGE</p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '1.5rem', color: '#94A3B8' }}>
              Established in 2006. Developing high-quality diploma information technology engineers through laboratory-centered learning and autonomous 2024 curricula.
            </p>
            <a
              href="https://psgpolytech.ac.in/dept/dit.php"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00C2E8', textShadow: '0 0 8px rgba(0, 194, 232, 0.25)', fontSize: '0.875rem', fontWeight: '600' }}
            >
              Official Department Page <ExternalLink size={14} />
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.35rem', fontFamily: 'Outfit', letterSpacing: '-0.3px' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/about" style={footerLinkStyle}>About Department</Link></li>
              <li><Link to="/academics" style={footerLinkStyle}>Academics (2024 Scheme)</Link></li>
              <li><Link to="/faculty" style={footerLinkStyle}>Faculty & Staff Profiles</Link></li>
              <li><Link to="/laboratories" style={footerLinkStyle}>Laboratories & Facilities</Link></li>
              <li><Link to="/projects" style={footerLinkStyle}>Student Projects Portfolio</Link></li>
              <li><Link to="/achievements" style={footerLinkStyle}>Rank Holders & Honors</Link></li>
              <li><Link to="/news-events" style={footerLinkStyle}>News & Workshops</Link></li>
            </ul>
          </div>

          {/* Col 3: Academic Semesters */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.35rem', fontFamily: 'Outfit', letterSpacing: '-0.3px' }}>Semester Schedules</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/academics/s1" style={footerLinkStyle}>Semester 1 - Physics, C Programming</Link></li>
              <li><Link to="/academics/s2" style={footerLinkStyle}>Semester 2 - Calculus, Python</Link></li>
              <li><Link to="/academics/s3" style={footerLinkStyle}>Semester 3 - Data Structures, DBMS</Link></li>
              <li><Link to="/academics/s4" style={footerLinkStyle}>Semester 4 - Java, ML & Analytics</Link></li>
              <li><Link to="/academics/s5" style={footerLinkStyle}>Semester 5 - Networks, Cloud, IoT</Link></li>
              <li><Link to="/academics/s6" style={footerLinkStyle}>Semester 6 - Cybersecurity, AR/VR, Drones</Link></li>
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.35rem', fontFamily: 'Outfit', letterSpacing: '-0.3px' }}>Department Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Department of Information Technology,<br />PSG Polytechnic College, Avinashi Road, Peelamedu, Coimbatore - 641004.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Globe size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                <a href="https://psgpolytech.ac.in" target="_blank" rel="noreferrer" style={{ color: '#94A3B8' }}>www.psgpolytech.ac.in</a>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                <span>principal@psgpolytech.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.85rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
          <div>
            © 2026 Department of Information Technology, PSG Polytechnic College. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#64748B' }}>
            <span>Public Academic Portal | Peelamedu, Coimbatore</span>
            <Link to="/admin" style={{ color: '#00C2E8', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              Admin CMS Portal 🔒
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: '#94A3B8',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};
