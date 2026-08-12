import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { departmentData } from '../data/department';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, Clock } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Official Contact"
            title="Get in Touch with Information Technology Department"
            subtitle="Department of Information Technology, PSG Polytechnic College, Coimbatore."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            
            {/* Contact Details Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontFamily: 'Outfit', marginBottom: '0.35rem' }}>Department Address</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                    Department of Information Technology,<br />
                    PSG Polytechnic College,<br />
                    Avinashi Road, Peelamedu, Coimbatore - 641 004,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Globe size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontFamily: 'Outfit', marginBottom: '0.35rem' }}>Official Web Resources</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                    College Site: <a href="https://psgpolytech.ac.in" target="_blank" rel="noreferrer">www.psgpolytech.ac.in</a><br />
                    Official Information Technology Page: <a href="https://psgpolytech.ac.in/dept/dit.php" target="_blank" rel="noreferrer">psgpolytech.ac.in/dept/dit.php</a>
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-alt)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontFamily: 'Outfit', marginBottom: '0.35rem' }}>Official Email & Office Hours</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                    Email: principal@psgpolytech.ac.in / hod.it@psgpolytech.ac.in<br />
                    Office Hours: Mon - Fri (8:30 AM - 5:00 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* General Inquiry Form */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1.25rem', fontFamily: 'Outfit' }}>
                Send a Visitor Inquiry
              </h3>

              {submitted ? (
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--primary-light)', borderRadius: '12px' }}>
                  <CheckCircle size={44} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontFamily: 'Outfit', marginBottom: '0.5rem' }}>Inquiry Sent Successfully</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Thank you for reaching out to the Information Technology department. Your inquiry has been logged for response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Inquiry Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Diploma Admission / Lab Facility Inquiry"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem' }}>
                    Submit Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* OpenStreetMap / Campus Map Card */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '1rem', fontFamily: 'Outfit' }}>
              Campus Location Map
            </h3>
            <div style={{ height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <iframe
                title="PSG Polytechnic College Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=PSG+Polytechnic+College+Peelamedu+Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--secondary)',
  marginBottom: '0.4rem'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  outline: 'none'
};
