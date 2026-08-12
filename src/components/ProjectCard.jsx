import React from 'react';
import { ExternalLink, Code, User, GitBranch } from 'lucide-react';

export function ProjectCard({ project }) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#0F172A' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: 'var(--primary-blue)',
          color: '#FFFFFF',
          padding: '0.3rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: 700
        }}>
          {project.category}
        </div>
      </div>

      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontFamily: 'Outfit', lineHeight: 1.35 }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.35rem' }}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.725rem' }}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '0.95rem', marginTop: 'auto' }}>
          <div><strong>Students:</strong> {project.students.join(', ')}</div>
          <div><strong>Guide:</strong> {project.guide}</div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ flex: 1 }}>
              <GitBranch size={14} /> Repository
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" style={{ flex: 1 }}>
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
