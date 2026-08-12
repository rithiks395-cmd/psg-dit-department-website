import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { AchievementCard } from '../components/AchievementCard';
import { achievementsData } from '../data/achievements';
import { Award, Handshake, CheckCircle } from 'lucide-react';

export function AchievementsPage() {
  const [activeTab, setActiveTab] = useState('Rank Holders');

  return (
    <div>
      <Breadcrumb items={[{ label: 'Achievements' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Excellence & Honors"
            title="Department Achievements & Rank Holders"
            subtitle="Recognizing student academic distinctions, faculty honors, and active industry MoUs."
          />

          {/* Navigation Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            {['Rank Holders', 'Faculty Awards', 'MoUs Signed'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.75rem 1.75rem' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab 1: Rank Holders 2024 */}
          {activeTab === 'Rank Holders' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {achievementsData.rankHolders2024.map((semGroup, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1.5rem', fontFamily: 'Outfit', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    {semGroup.semester}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {semGroup.students.map((st, sIdx) => (
                      <AchievementCard key={sIdx} student={st} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Faculty Awards */}
          {activeTab === 'Faculty Awards' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {achievementsData.facultyAwards.map((awd, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img src={awd.image} alt={awd.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span className="badge badge-accent">{awd.category}</span>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{awd.title}</h3>
                  <p style={{ fontWeight: 700, color: 'var(--primary)' }}>Recipient: {awd.recipient}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>{awd.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: MoUs Signed */}
          {activeTab === 'MoUs Signed' && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                Active Memorandums of Understanding (MoUs)
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {achievementsData.mousSigned.map(mou => (
                  <div key={mou.sno} className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {mou.image && (
                      <div style={{ height: '160px', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'var(--bg-alt)' }}>
                        <img src={mou.image} alt={mou.org} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="badge badge-primary">MoU #{mou.sno}</span>
                      <span className="badge badge-secondary">{mou.date}</span>
                    </div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>{mou.org}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Focus: {mou.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
