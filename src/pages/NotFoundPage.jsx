import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="section-padding" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
          <AlertTriangle size={44} />
        </div>

        <h1 style={{ fontSize: '3.5rem', fontFamily: 'Outfit', color: 'var(--primary)', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.75rem', fontFamily: 'Outfit', color: 'var(--secondary)', margin: '0.75rem 0' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          The department page or academic route you requested does not exist or has been moved.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} /> Return to Homepage
          </Link>
          <Link to="/academics" className="btn btn-outline">
            Browse Academics
          </Link>
        </div>
      </div>
    </div>
  );
}
