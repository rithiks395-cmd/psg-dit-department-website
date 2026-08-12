import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Info } from 'lucide-react';

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Student Projects' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Practical Innovation"
            title="Student Capstone & Mini Projects"
            subtitle="Showcasing technical solutions engineered by diploma Information Technology students."
          />

          {/* Development Notice Banner per Requirement 12 & 31 */}
          <div style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)', borderRadius: '12px', padding: '1rem 1.5rem', display: 'flex', gap: '0.85rem', alignItems: 'center', marginBottom: '2.5rem', color: '#92400E' }}>
            <Info size={22} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.9rem' }}>
              <strong>Notice:</strong> {projectsData.notice}
            </span>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {projectsData.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`badge ${selectedCategory === cat ? 'badge-primary' : 'badge-secondary'}`}
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem', cursor: 'pointer' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map(proj => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
