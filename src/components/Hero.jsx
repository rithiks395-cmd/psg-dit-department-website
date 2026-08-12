import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Cpu, ArrowRight, ShieldCheck, ChevronDown, Award, Sparkles, Building2 } from 'lucide-react';
import { PsgLogo3D } from './PsgLogo3D';

export function Hero() {
  const headerImages = [
    "https://psgpolytech.ac.in/dept/images/DIT/header/0.jpg",
    "https://psgpolytech.ac.in/dept/images/DIT/header/2.jpg",
    "https://psgpolytech.ac.in/dept/images/DIT/header/3.jpg",
    "https://psgpolytech.ac.in/dept/images/DIT/header/4.jpg",
    "https://psgpolytech.ac.in/dept/images/DIT/header/5.jpg"
  ];

  const [currentHeader, setCurrentHeader] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeader(prev => (prev + 1) % headerImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-dot-grid" style={{
      backgroundColor: 'var(--bg-dark)',
      color: '#FFFFFF',
      padding: '5.5rem 0 4rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Radial Glow Spot */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(6, 182, 212, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left Column Content */}
          <div>
            {/* Official PSG Logo Institutional Reveal Header Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div className="psg-logo-institutional" style={{
                backgroundColor: '#FFFFFF',
                padding: '5px 8px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                flexShrink: 0
              }}>
                <PsgLogo3D height="64px" />
              </div>
              <div className="hero-stagger-1" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  color: '#00C2E8',
                  textShadow: '0 0 8px rgba(0, 194, 232, 0.25)',
                  letterSpacing: '1px',
                  fontFamily: 'Outfit',
                  textTransform: 'uppercase'
                }}>
                  PSG POLYTECHNIC COLLEGE
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.5px', marginTop: '2px' }}>
                  Autonomous Institution | Est. 1939 | Coimbatore
                </div>
              </div>
            </div>

            <h1 className="hero-stagger-2" style={{
              fontSize: '3.25rem',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '1rem',
              letterSpacing: '-1px',
              fontFamily: 'Outfit'
            }}>
              Department of <br />
              <span className="text-gradient">Information Technology</span>
            </h1>

            <p className="hero-stagger-3" style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#00C2E8',
              textShadow: '0 0 10px rgba(0, 194, 232, 0.28)',
              marginBottom: '1.25rem',
              fontFamily: 'Outfit',
              letterSpacing: '-0.3px'
            }}>
              Engineering Tomorrow.
            </p>

            <p className="hero-stagger-4" style={{
              fontSize: '1.05rem',
              color: 'var(--text-dark-muted)',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
              maxWidth: '560px'
            }}>
              Established in 2006. Empowering future technology leaders through laboratory-centered learning, autonomous 2024 curricula, IoT research, and drone engineering excellence.
            </p>

            <div className="hero-stagger-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <Link to="/academics" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.025rem' }}>
                Explore Academics <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-glass" style={{ padding: '1rem 2.25rem', fontSize: '1.025rem' }}>
                Discover Our Department
              </Link>
            </div>
          </div>

          {/* Right Column Visual Composition */}
          <div style={{ position: 'relative' }}>

            {/* Main Header Banner Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              height: '340px'
            }}>
              <img
                src={headerImages[currentHeader]}
                alt="PSG Polytechnic Information Technology Department Banner"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.6s ease' }}
              />

              {/* Indicator Dots */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '20px',
                display: 'flex',
                gap: '8px',
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(6px)'
              }}>
                {headerImages.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentHeader(idx)}
                    style={{
                      width: idx === currentHeader ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: idx === currentHeader ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Glass Card 1 - Top Left */}
            <div className="glass-card-dark animate-float" style={{
              position: 'absolute',
              top: '-20px',
              left: '-25px',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              zIndex: 2
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800
              }}>
                <Sparkles size={22} />
              </div>
              <div>
                <strong style={{ fontSize: '1.1rem', color: '#FFFFFF', display: 'block', fontFamily: 'Outfit' }}>2006</strong>
                <span style={{ fontSize: '0.775rem', color: 'var(--text-dark-muted)' }}>Established Year</span>
              </div>
            </div>

            {/* Floating Glass Card 2 - Bottom Right */}
            <div className="glass-card-dark animate-float" style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-20px',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              border: '1px solid rgba(37, 99, 235, 0.4)',
              animationDelay: '1.5s',
              zIndex: 2
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                color: '#60A5FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800
              }}>
                <BookOpen size={22} />
              </div>
              <div>
                <strong style={{ fontSize: '1.1rem', color: '#FFFFFF', display: 'block', fontFamily: 'Outfit' }}>S1 – S6</strong>
                <span style={{ fontSize: '0.775rem', color: 'var(--text-dark-muted)' }}>Autonomous Programme</span>
              </div>
            </div>

          </div>

        </div>

        {/* Animated Scroll Indicator */}
        <div style={{
          marginTop: '4.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-dark-muted)',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}>
          <span>Scroll to explore</span>
          <div className="animate-bounce-slow" style={{ color: 'var(--accent-cyan)' }}>
            <ChevronDown size={22} />
          </div>
        </div>

      </div>
    </section>
  );
}
