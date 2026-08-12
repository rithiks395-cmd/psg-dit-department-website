import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb({ items }) {
  return (
    <nav style={{ padding: '1rem 0', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Home size={14} /> Home
        </Link>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight size={14} />
            {item.link ? (
              <Link to={item.link} style={{ color: 'var(--text-muted)' }}>
                {item.label}
              </Link>
            ) : (
              <span className="text-cyan-glow" style={{ color: '#00C2E8', textShadow: '0 0 8px rgba(0, 194, 232, 0.25)', fontWeight: 700 }}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
