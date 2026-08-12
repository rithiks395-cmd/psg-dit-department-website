import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { StatCard } from '../components/StatCard';
import { FacultyCard } from '../components/FacultyCard';
import { SemesterCard } from '../components/SemesterCard';
import { LabCard } from '../components/LabCard';
import { ProjectCard } from '../components/ProjectCard';
import { AchievementCard } from '../components/AchievementCard';
import { EventCard } from '../components/EventCard';
import { GalleryCard } from '../components/GalleryCard';
import { departmentData } from '../data/department';
import { schemesData } from '../data/semesters';
import { facultyData } from '../data/faculty';
import { laboratoriesData } from '../data/laboratories';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';
import { eventsData } from '../data/events';
import { galleryData } from '../data/gallery';
import { Calendar, BookOpen, Cpu, Award, TrendingUp, Handshake, Target, Eye, Compass, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function HomePage() {
  const iconMap = {
    Calendar: Calendar,
    BookOpen: BookOpen,
    Cpu: Cpu,
    Award: Award,
    Handshake: Handshake,
    TrendingUp: TrendingUp
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Department Statistics */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {departmentData.stats.map((stat, idx) => (
              <StatCard key={idx} label={stat.label} value={stat.value} icon={iconMap[stat.icon]} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Department & Vision / Mission */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <SectionTitle
                badge="Established 2006"
                title="About Department of Information Technology"
                subtitle={departmentData.college}
                center={false}
              />
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {departmentData.about}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Department <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Vision Card */}
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Eye size={24} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>Our Vision</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {departmentData.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--accent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Target size={24} color="var(--accent)" />
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Outfit', color: 'var(--secondary)' }}>Our Mission</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {departmentData.mission.map(m => (
                    <li key={m.id} style={{ display: 'flex', gap: '0.5rem' }}>
                      <strong style={{ color: 'var(--primary)' }}>•</strong>
                      <span>{m.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academic Highlights (S1 to S6) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <SectionTitle
            badge="2024 Scheme"
            title="Academic Highlights & Course Structure"
            subtitle="Explore our 6-semester diploma curriculum designed for industry relevance and practical excellence."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {schemesData.schemes[0].semesters.map(sem => (
              <SemesterCard key={sem.id} semester={sem} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/academics" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>
              View Complete Subject Matrix <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Faculty */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Faculty & Leadership"
            title="Meet Our Distinguished Faculty"
            subtitle="Experienced academicians, researchers, and technical instructors guiding the Information Technology department."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            <FacultyCard faculty={facultyData.hod} />
            {facultyData.teachingStaff.slice(0, 3).map(f => (
              <FacultyCard key={f.id} faculty={f} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faculty" className="btn btn-primary">
              View All Faculty & Guest Professors <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Laboratories */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <SectionTitle
            badge="State-of-the-Art Facilities"
            title="Department Laboratories & Research Centers"
            subtitle="Industry-powered facilities equipped for Drones research, IoT automation, hardware repair, and software development."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {laboratoriesData.slice(0, 3).map(lab => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/laboratories" className="btn btn-outline">
              Explore All Laboratories & Facilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Student Projects */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Innovation & Research"
            title="Featured Student Projects"
            subtitle="Real-world practical projects built by our diploma Information Technology students using IoT, AI/ML, Mobile, and Web technologies."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {projectsData.projects.slice(0, 3).map(proj => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/projects" className="btn btn-primary">
              Browse Full Project Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Achievements & Rank Holders */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <SectionTitle
            badge="Academic Excellence"
            title="Department Rank Holders & Achievements"
            subtitle="Celebrating our top-ranking students with superlative distinctions and prestigious achievements."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {achievementsData.rankHolders2024[0].students.slice(0, 4).map((st, idx) => (
              <AchievementCard key={idx} student={st} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/achievements" className="btn btn-outline">
              View All Rank Holders & MoUs Signed <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Latest News & Events */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Department Activities"
            title="Latest News & Workshops"
            subtitle="Stay updated with our latest training sessions, community workshops, and association activities."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {eventsData.slice(0, 3).map(evt => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/news-events" className="btn btn-primary">
              View News & Events Calendar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Contact Call-To-Action Banner */}
      <section style={{ backgroundColor: 'var(--secondary)', color: '#FFFFFF', padding: '4rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div>
            <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>Have Questions?</span>
            <h2 style={{ fontSize: '2.25rem', color: '#FFFFFF', fontFamily: 'Outfit' }}>Get in Touch with Department of Information Technology</h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              PSG Polytechnic College, Avinashi Road, Peelamedu, Coimbatore - 641 004
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
            Contact Us Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
