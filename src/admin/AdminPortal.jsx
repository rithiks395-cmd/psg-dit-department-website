import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, BookOpen, Cpu, Award, Calendar, Image as ImageIcon, PhoneCall, 
  Plus, Edit, Trash2, ShieldCheck, LogOut, CheckCircle, RefreshCw, Star, 
  ArrowLeft, Search, Upload, ExternalLink, Layers, Sparkles
} from 'lucide-react';
import * as api from '../services/api';

export function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('dit_admin_token') ? true : false;
  });
  const [loginUser, setLoginUser] = useState('admin');
  const [loginPass, setLoginPass] = useState('admin123');
  const [loginError, setLoginError] = useState('');
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({ faculty: 0, subjects: 0, laboratories: 0, projects: 0, achievements: 0, events: 0, gallery: 0, calendar: 0 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Data States
  const [facultyList, setFacultyList] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [labsList, setLabsList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [achievementsList, setAchievementsList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [calendarList, setCalendarList] = useState([]);
  const [contactData, setContactData] = useState({});

  // Modal / Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [semFilter, setSemFilter] = useState('s1');

  // Form Fields State
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated, activeTab]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const statsRes = await api.fetchStats().catch(() => null);
      if (statsRes) setStats(statsRes);

      if (activeTab === 'dashboard' || activeTab === 'faculty') {
        const facRes = await api.fetchFaculty().catch(() => null);
        if (facRes && facRes.raw) setFacultyList(facRes.raw);
      }
      if (activeTab === 'dashboard' || activeTab === 'subjects') {
        const subRes = await api.fetchSubjects().catch(() => []);
        setSubjectsList(subRes);
      }
      if (activeTab === 'dashboard' || activeTab === 'laboratories') {
        const labRes = await api.fetchLaboratories().catch(() => []);
        setLabsList(labRes);
      }
      if (activeTab === 'dashboard' || activeTab === 'projects') {
        const projRes = await api.fetchProjects().catch(() => []);
        setProjectsList(projRes);
      }
      if (activeTab === 'dashboard' || activeTab === 'achievements') {
        const achRes = await api.fetchAchievements().catch(() => []);
        setAchievementsList(achRes);
      }
      if (activeTab === 'dashboard' || activeTab === 'events') {
        const evtRes = await api.fetchEvents().catch(() => []);
        setEventsList(evtRes);
      }
      if (activeTab === 'dashboard' || activeTab === 'gallery') {
        const galRes = await api.fetchGallery().catch(() => []);
        setGalleryList(galRes);
      }
      if (activeTab === 'dashboard' || activeTab === 'calendar') {
        const calRes = await api.fetchCalendar().catch(() => []);
        setCalendarList(calRes);
      }
      if (activeTab === 'contact') {
        const conRes = await api.fetchContact().catch(() => ({}));
        setContactData(conRes);
        setFormData(conRes);
      }
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = loginUser.trim();
    const pass = loginPass.trim();

    if (!user) {
      setLoginError('Username is required');
      return;
    }
    if (!pass) {
      setLoginError('Password is required');
      return;
    }

    try {
      const res = await api.loginAdmin(user, pass);
      if (res && res.token) {
        localStorage.setItem('dit_admin_token', res.token);
        setIsAuthenticated(true);
        setLoginError('');
        setLoginUser('');
        setLoginPass('');
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (err) {
      setLoginError(err.message || 'Invalid username or password');
      setIsAuthenticated(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dit_admin_token');
    setIsAuthenticated(false);
    setLoginUser('');
    setLoginPass('');
    setLoginError('');
  };

  const notify = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 4000);
  };

  // Open Form Modal
  const openModal = (item = null) => {
    setEditingItem(item);
    if (item) {
      setFormData({ ...item });
    } else {
      // Default Form Values based on active tab
      if (activeTab === 'faculty') {
        setFormData({ name: '', designation: 'Lecturer', degree: 'M.E (CSE)', qualification: 'M.E (CSE)', teaching_exp: '5 Years', specialization: 'Information Technology', email: '', bio: '', image: 'https://psgpolytech.ac.in/dept/images/DIT/faculty/GAishwaryalakshmi.jpg', is_hod: 0, category: 'teaching' });
      } else if (activeTab === 'subjects') {
        setFormData({ semester_id: semFilter, code: '24IT' + Math.floor(10 + Math.random() * 80), name: '', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: '' });
      } else if (activeTab === 'laboratories') {
        setFormData({ name: '', short_name: '', purpose: '', lab_in_charge: 'Ms. G. Aishwaryalakshmi', partner: 'PSG Polytechnic College', image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/itlab.jpg', equipment: '' });
      } else if (activeTab === 'projects') {
        setFormData({ title: '', description: '', category: 'Software Development', technologies: 'React, Node.js', students: 'Student Team', guide: 'Faculty Advisor', year: '2024', image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/UAVRearch1.JPG' });
      } else if (activeTab === 'achievements') {
        setFormData({ title: '', description: '', category: 'Rank Holder', student_name: 'DIT Student', year: '2024', score: 'Distinction', image: 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg' });
      } else if (activeTab === 'events') {
        setFormData({ title: '', date: '15 Aug 2024', category: 'Workshops', description: '', location: 'Information Technology Lab', organizer: 'Department of Information Technology', image: 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg' });
      } else if (activeTab === 'gallery') {
        setFormData({ title: '', category: 'Department Activity', event_name: 'Academic Workshop', image_url: 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg', date: '2024' });
      } else if (activeTab === 'calendar') {
        setFormData({ title: '', date: '01 Jul 2024', category: 'Academic', description: '', semester: 'All Semesters' });
      }
    }
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      notify('Uploading image...');
      const url = await api.uploadImage(file);
      setFormData(prev => ({ ...prev, image: url, image_url: url }));
      notify('Image uploaded successfully!');
    } catch (err) {
      notify('Image upload failed.');
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'faculty') {
        if (editingItem) {
          await api.updateFaculty(editingItem.id, formData);
          notify('Faculty updated successfully!');
        } else {
          await api.addFaculty(formData);
          notify('New faculty added successfully!');
        }
      } else if (activeTab === 'subjects') {
        if (editingItem) {
          await api.updateSubject(editingItem.id, formData);
          notify('Subject updated successfully!');
        } else {
          await api.addSubject(formData);
          notify('New subject added successfully!');
        }
      } else if (activeTab === 'laboratories') {
        if (editingItem) {
          await api.updateLaboratory(editingItem.id, formData);
          notify('Laboratory updated successfully!');
        } else {
          await api.addLaboratory(formData);
          notify('New laboratory added successfully!');
        }
      } else if (activeTab === 'projects') {
        if (editingItem) {
          await api.updateProject(editingItem.id, formData);
          notify('Student project updated successfully!');
        } else {
          await api.addProject(formData);
          notify('New student project added successfully!');
        }
      } else if (activeTab === 'achievements') {
        if (editingItem) {
          await api.updateAchievement(editingItem.id, formData);
          notify('Achievement updated successfully!');
        } else {
          await api.addAchievement(formData);
          notify('New achievement added successfully!');
        }
      } else if (activeTab === 'events') {
        if (editingItem) {
          await api.updateEvent(editingItem.id, formData);
          notify('Event updated successfully!');
        } else {
          await api.addEvent(formData);
          notify('New event added successfully!');
        }
      } else if (activeTab === 'gallery') {
        await api.addGallery(formData);
        notify('Gallery image added successfully!');
      } else if (activeTab === 'calendar') {
        if (editingItem) {
          await api.updateCalendar(editingItem.id, formData);
          notify('Calendar item updated!');
        } else {
          await api.addCalendar(formData);
          notify('Calendar item added!');
        }
      } else if (activeTab === 'contact') {
        await api.updateContact(formData);
        notify('Contact info updated!');
      }

      setIsModalOpen(false);
      loadAllData();
    } catch (err) {
      notify('Failed to save item: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      if (activeTab === 'faculty') await api.deleteFaculty(id);
      if (activeTab === 'subjects') await api.deleteSubject(id);
      if (activeTab === 'laboratories') await api.deleteLaboratory(id);
      if (activeTab === 'projects') await api.deleteProject(id);
      if (activeTab === 'achievements') await api.deleteAchievement(id);
      if (activeTab === 'events') await api.deleteEvent(id);
      if (activeTab === 'gallery') await api.deleteGallery(id);
      if (activeTab === 'calendar') await api.deleteCalendar(id);

      notify('Item deleted successfully!');
      loadAllData();
    } catch (err) {
      notify('Delete failed: ' + err.message);
    }
  };

  const handleSetHod = async (id) => {
    try {
      await api.setHod(id);
      notify('HOD updated successfully!');
      loadAllData();
    } catch (err) {
      notify('Set HOD failed.');
    }
  };

  // If not logged in, render Login Modal View
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', backgroundColor: '#070A12' }}>
        <div style={{ width: '100%', maxWidth: '440px', padding: '2.5rem', backgroundColor: '#0F172A', border: '1px solid rgba(0, 194, 232, 0.35)', borderTop: '5px solid #00C2E8', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(0, 194, 232, 0.15)', color: '#00C2E8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', border: '1px solid rgba(0, 194, 232, 0.3)' }}>
              <ShieldCheck size={32} />
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800, letterSpacing: '-0.5px' }}>
              Department Admin CMS
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '0.35rem', fontWeight: 500 }}>
              PSG Polytechnic College - DIT Content Portal
            </p>
          </div>

          {loginError && (
            <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.4)', color: '#F43F5E', padding: '0.85rem 1rem', borderRadius: '8px', fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#00C2E8', fontWeight: 700, marginBottom: '0.45rem' }}>Admin Username</label>
              <input
                type="text"
                value={loginUser}
                onChange={e => setLoginUser(e.target.value)}
                placeholder="Enter Admin Username"
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  backgroundColor: '#1E293B',
                  border: '2px solid rgba(0, 194, 232, 0.4)',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 600,
                  outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#00C2E8', fontWeight: 700, marginBottom: '0.45rem' }}>Password</label>
              <input
                type="password"
                value={loginPass}
                onChange={e => setLoginPass(e.target.value)}
                placeholder="Enter Password"
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  backgroundColor: '#1E293B',
                  border: '2px solid rgba(0, 194, 232, 0.4)',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 600,
                  outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '1rem', fontWeight: 700, marginTop: '0.5rem' }}>
              <ShieldCheck size={20} /> Authenticate Admin Session
            </button>

            <Link to="/" style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none', marginTop: '0.5rem', fontWeight: 500 }}>
              ← Return to Public Website
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '90vh', backgroundColor: '#070A12', color: '#F8FAFC' }}>
      {/* Top Admin Navigation Header */}
      <div style={{ backgroundColor: '#0F172A', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" className="btn btn-outline btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ArrowLeft size={16} /> View Public Website
          </Link>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1rem' }}>
            <h1 style={{ fontSize: '1.25rem', fontFamily: 'Outfit', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Department Content Manager <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>REST CMS v1.0</span>
            </h1>
            <p style={{ fontSize: '0.775rem', color: '#94A3B8' }}>PSG Polytechnic College - Department of Information Technology</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={loadAllData} className="btn btn-outline btn-sm" title="Refresh Live DB">
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
          <button onClick={handleLogout} className="btn btn-sm" style={{ backgroundColor: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
            <LogOut size={15} /> Logout Admin
          </button>
        </div>
      </div>

      {message && (
        <div style={{ backgroundColor: 'rgba(0, 194, 232, 0.15)', borderBottom: '1px solid rgba(0, 194, 232, 0.3)', color: '#00C2E8', padding: '0.75rem 2rem', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
          {message}
        </div>
      )}

      {/* Main Admin Content Layout */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2rem' }}>
        
        {/* Sidebar Nav */}
        <div className="glass-card" style={{ padding: '1rem', height: 'fit-content' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
            CMS Sections
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {[
              { id: 'dashboard', label: 'Dashboard Overview', icon: Layers },
              { id: 'faculty', label: 'Faculty & HOD', icon: Users, count: stats.faculty },
              { id: 'subjects', label: 'Semester Subjects', icon: BookOpen, count: stats.subjects },
              { id: 'laboratories', label: 'Laboratories', icon: Cpu, count: stats.laboratories },
              { id: 'projects', label: 'Student Projects', icon: Layers, count: stats.projects },
              { id: 'achievements', label: 'Achievements', icon: Award, count: stats.achievements },
              { id: 'events', label: 'News & Events', icon: Calendar, count: stats.events },
              { id: 'gallery', label: 'Photo Gallery', icon: ImageIcon, count: stats.gallery },
              { id: 'calendar', label: 'Academic Calendar', icon: Calendar, count: stats.calendar },
              { id: 'contact', label: 'Contact Information', icon: PhoneCall }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    backgroundColor: isActive ? 'rgba(0, 194, 232, 0.12)' : 'transparent',
                    color: isActive ? '#00C2E8' : '#CBD5E1',
                    border: isActive ? '1px solid rgba(0, 194, 232, 0.25)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Icon size={16} /> {tab.label}
                  </span>
                  {tab.count !== undefined && (
                    <span className="badge badge-cyan" style={{ fontSize: '0.675rem', padding: '0.15rem 0.45rem' }}>{tab.count}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Section View */}
        <div>
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Live Department Content Dashboard</h2>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Real-time database entry counters currently active on the public website.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { label: 'Faculty & Staff', count: stats.faculty, tab: 'faculty', color: '#00C2E8' },
                  { label: 'Semester Subjects', count: stats.subjects, tab: 'subjects', color: '#2563EB' },
                  { label: 'Laboratories', count: stats.laboratories, tab: 'laboratories', color: '#38BDF8' },
                  { label: 'Student Projects', count: stats.projects, tab: 'projects', color: '#F59E0B' },
                  { label: 'Achievements', count: stats.achievements, tab: 'achievements', color: '#10B981' },
                  { label: 'News & Events', count: stats.events, tab: 'events', color: '#F43F5E' },
                  { label: 'Gallery Images', count: stats.gallery, tab: 'gallery', color: '#A855F7' },
                  { label: 'Calendar Events', count: stats.calendar, tab: 'calendar', color: '#EC4899' }
                ].map((s, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.75rem', cursor: 'pointer', borderTop: `4px solid ${s.color}` }} onClick={() => setActiveTab(s.tab)}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: s.color, fontFamily: 'Outfit', lineHeight: 1 }}>{s.count}</div>
                    <div style={{ color: '#E2E8F0', fontWeight: 700, marginTop: '0.5rem', fontSize: '1rem' }}>{s.label}</div>
                    <div style={{ color: '#94A3B8', fontSize: '0.775rem', marginTop: '0.25rem' }}>Click to Manage →</div>
                  </div>
                ))}
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontFamily: 'Outfit', marginBottom: '0.75rem' }}>Dynamic CMS Directives</h3>
                <ul style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.7', paddingLeft: '1.25rem' }}>
                  <li>Any content created, modified, or deleted in this Admin Portal immediately updates the PostgreSQL/Node database.</li>
                  <li>The public website receives fresh database entries dynamically on every page load without requiring frontend rebuilds or React source code edits.</li>
                  <li>HOD status can be reassigned with one click using the "Set as HOD" button in the Faculty section.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: FACULTY MANAGER */}
          {activeTab === 'faculty' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Faculty & HOD Management</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Add, update, or remove faculty members and assign HOD leadership.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary">
                  <Plus size={16} /> Add New Faculty Member
                </button>
              </div>

              <div className="glass-card" style={{ padding: '1rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#94A3B8' }}>
                      <th style={{ padding: '0.85rem' }}>Faculty</th>
                      <th style={{ padding: '0.85rem' }}>Designation</th>
                      <th style={{ padding: '0.85rem' }}>Qualification</th>
                      <th style={{ padding: '0.85rem' }}>Experience</th>
                      <th style={{ padding: '0.85rem' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facultyList.map(fac => (
                      <tr key={fac.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <td style={{ padding: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img src={fac.image} alt={fac.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                          <div>
                            <strong style={{ color: '#FFFFFF', display: 'block' }}>{fac.name}</strong>
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{fac.email}</span>
                          </div>
                        </td>
                        <td style={{ padding: '0.85rem' }}>
                          {fac.is_hod ? (
                            <span className="badge badge-cyan" style={{ fontSize: '0.725rem' }}>HOD</span>
                          ) : (
                            <span>{fac.designation}</span>
                          )}
                        </td>
                        <td style={{ padding: '0.85rem' }}>{fac.degree || fac.qualification}</td>
                        <td style={{ padding: '0.85rem' }}>{fac.teaching_exp}</td>
                        <td style={{ padding: '0.85rem' }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {!fac.is_hod && (
                              <button onClick={() => handleSetHod(fac.id)} className="btn btn-sm btn-outline" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }} title="Set as HOD">
                                Set HOD
                              </button>
                            )}
                            <button onClick={() => openModal(fac)} className="btn btn-sm btn-outline" style={{ padding: '0.35rem' }}><Edit size={14} /></button>
                            <button onClick={() => handleDelete(fac.id)} className="btn btn-sm" style={{ padding: '0.35rem', backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E' }}><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SUBJECTS MANAGER */}
          {activeTab === 'subjects' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Semester Subjects Management</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Manage course subjects across Semesters 1 to 6.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary">
                  <Plus size={16} /> Add Subject
                </button>
              </div>

              {/* Semester Filter Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {['s1', 's2', 's3', 's4', 's5', 's6'].map((sem, idx) => (
                  <button
                    key={sem}
                    onClick={() => setSemFilter(sem)}
                    className={`btn btn-sm ${semFilter === sem ? 'btn-primary' : 'btn-outline'}`}
                  >
                    Semester {idx + 1}
                  </button>
                ))}
              </div>

              <div className="glass-card" style={{ padding: '1rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#94A3B8' }}>
                      <th style={{ padding: '0.85rem' }}>Code</th>
                      <th style={{ padding: '0.85rem' }}>Subject Name</th>
                      <th style={{ padding: '0.85rem' }}>Type</th>
                      <th style={{ padding: '0.85rem' }}>Category</th>
                      <th style={{ padding: '0.85rem' }}>Hours / Credits</th>
                      <th style={{ padding: '0.85rem' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectsList.filter(s => s.semester_id === semFilter).map(sub => (
                      <tr key={sub.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <td style={{ padding: '0.85rem', fontWeight: 700, color: '#00C2E8' }}>{sub.code}</td>
                        <td style={{ padding: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{sub.name}</td>
                        <td style={{ padding: '0.85rem' }}><span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{sub.type}</span></td>
                        <td style={{ padding: '0.85rem' }}><span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>{sub.category}</span></td>
                        <td style={{ padding: '0.85rem' }}>{sub.hours_per_week} Hrs / {sub.credits} Crs</td>
                        <td style={{ padding: '0.85rem' }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => openModal(sub)} className="btn btn-sm btn-outline" style={{ padding: '0.35rem' }}><Edit size={14} /></button>
                            <button onClick={() => handleDelete(sub.id)} className="btn btn-sm" style={{ padding: '0.35rem', backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E' }}><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: LABORATORIES MANAGER */}
          {activeTab === 'laboratories' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Laboratory Facilities Management</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Manage department labs, research centers, and industrial equipment.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary"><Plus size={16} /> Add Laboratory</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {labsList.map(lab => (
                  <div key={lab.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <img src={lab.image} alt={lab.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px' }} />
                    <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 700 }}>{lab.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: '1.5' }}>{lab.purpose}</p>
                    <div style={{ fontSize: '0.8rem', color: '#00C2E8' }}>In-Charge: {lab.lab_in_charge}</div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                      <button onClick={() => openModal(lab)} className="btn btn-sm btn-outline" style={{ flex: 1, justifyContent: 'center' }}><Edit size={14} /> Edit</button>
                      <button onClick={() => handleDelete(lab.id)} className="btn btn-sm" style={{ backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E', padding: '0.5rem' }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PROJECTS MANAGER */}
          {activeTab === 'projects' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Student Projects Portfolio</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Add, update, or remove student innovation projects.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary"><Plus size={16} /> Add Project</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {projectsList.map(proj => (
                  <div key={proj.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.7rem', width: 'fit-content' }}>{proj.category}</span>
                    <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 700 }}>{proj.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: '1.5' }}>{proj.description}</p>
                    <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}><strong>Tech:</strong> {proj.technologies}</div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                      <button onClick={() => openModal(proj)} className="btn btn-sm btn-outline" style={{ flex: 1, justifyContent: 'center' }}><Edit size={14} /> Edit</button>
                      <button onClick={() => handleDelete(proj.id)} className="btn btn-sm" style={{ backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E', padding: '0.5rem' }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: EVENTS MANAGER */}
          {activeTab === 'events' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>News & Events Management</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Post upcoming workshops, training courses, and outreach activities.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary"><Plus size={16} /> Add Event</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {eventsList.map(evt => (
                  <div key={evt.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>{evt.category}</span>
                      <span style={{ fontSize: '0.8rem', color: '#00C2E8', fontWeight: 700 }}>{evt.date}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 700 }}>{evt.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: '1.5' }}>{evt.description}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                      <button onClick={() => openModal(evt)} className="btn btn-sm btn-outline" style={{ flex: 1, justifyContent: 'center' }}><Edit size={14} /> Edit</button>
                      <button onClick={() => handleDelete(evt.id)} className="btn btn-sm" style={{ backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E', padding: '0.5rem' }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: GALLERY MANAGER */}
          {activeTab === 'gallery' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Photo Gallery Management</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Upload or link new photos to the public gallery.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary"><Plus size={16} /> Add Photo</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {galleryList.map(gal => (
                  <div key={gal.id} className="glass-card" style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <img src={gal.image_url} alt={gal.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{gal.title}</div>
                    <button onClick={() => handleDelete(gal.id)} className="btn btn-sm" style={{ backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E', justifyContent: 'center', marginTop: 'auto' }}>
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: ACHIEVEMENTS MANAGER */}
          {activeTab === 'achievements' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Achievements & Rank Holders</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Manage student distinction awards and rank holders.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary"><Plus size={16} /> Add Achievement</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {achievementsList.map(ach => (
                  <div key={ach.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.7rem', width: 'fit-content' }}>{ach.category}</span>
                    <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 700 }}>{ach.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{ach.description}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                      <button onClick={() => openModal(ach)} className="btn btn-sm btn-outline" style={{ flex: 1, justifyContent: 'center' }}><Edit size={14} /> Edit</button>
                      <button onClick={() => handleDelete(ach.id)} className="btn btn-sm" style={{ backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E', padding: '0.5rem' }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: CALENDAR MANAGER */}
          {activeTab === 'calendar' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Academic Calendar Management</h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Update key academic dates, exams, and reopening schedules.</p>
                </div>
                <button onClick={() => openModal()} className="btn btn-primary"><Plus size={16} /> Add Calendar Event</button>
              </div>

              <div className="glass-card" style={{ padding: '1rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#94A3B8' }}>
                      <th style={{ padding: '0.85rem' }}>Date</th>
                      <th style={{ padding: '0.85rem' }}>Title</th>
                      <th style={{ padding: '0.85rem' }}>Category</th>
                      <th style={{ padding: '0.85rem' }}>Semester</th>
                      <th style={{ padding: '0.85rem' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendarList.map(cal => (
                      <tr key={cal.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <td style={{ padding: '0.85rem', fontWeight: 700, color: '#00C2E8' }}>{cal.date}</td>
                        <td style={{ padding: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{cal.title}</td>
                        <td style={{ padding: '0.85rem' }}><span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{cal.category}</span></td>
                        <td style={{ padding: '0.85rem' }}>{cal.semester}</td>
                        <td style={{ padding: '0.85rem' }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => openModal(cal)} className="btn btn-sm btn-outline" style={{ padding: '0.35rem' }}><Edit size={14} /></button>
                            <button onClick={() => handleDelete(cal.id)} className="btn btn-sm" style={{ padding: '0.35rem', backgroundColor: 'rgba(244, 63, 94, 0.2)', color: '#F43F5E' }}><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 10: CONTACT MANAGER */}
          {activeTab === 'contact' && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800 }}>Department Contact Information</h2>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Update public contact numbers, email addresses, and working hours.</p>
              </div>

              <form onSubmit={handleSubmitForm} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>Official Address</label>
                  <textarea value={formData.address || ''} onChange={e => setFormData({ ...formData, address: e.target.value })} rows={3} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>Phone Numbers</label>
                  <input type="text" value={formData.phone || ''} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>Department Email Addresses</label>
                  <input type="text" value={formData.email || ''} onChange={e => setFormData({ ...formData, email: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>Working Hours</label>
                  <input type="text" value={formData.working_hours || ''} onChange={e => setFormData({ ...formData, working_hours: e.target.value })} style={inputStyle} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '0.75rem 2rem' }}>
                  <CheckCircle size={18} /> Save Contact Details
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* FORM EDIT / ADD MODAL */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(7, 10, 18, 0.85)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '650px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto', borderTop: '5px solid #00C2E8' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontFamily: 'Outfit', fontWeight: 800, marginBottom: '1.5rem' }}>
              {editingItem ? 'Edit Item' : 'Add New Entry'} - {activeTab.toUpperCase()}
            </h3>

            <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Image Upload Widget */}
              {['faculty', 'laboratories', 'projects', 'achievements', 'events', 'gallery'].includes(activeTab) && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>Image File / URL</label>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      value={formData.image || formData.image_url || ''}
                      onChange={e => setFormData({ ...formData, image: e.target.value, image_url: e.target.value })}
                      placeholder="Paste Image URL or Upload File ->"
                      style={{ ...inputStyle, flex: 1 }}
                    />
                    <label className="btn btn-outline btn-sm" style={{ cursor: 'pointer', flexShrink: 0 }}>
                      <Upload size={14} /> Upload
                      <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                    </label>
                  </div>
                </div>
              )}

              {/* FACULTY FORM FIELDS */}
              {activeTab === 'faculty' && (
                <>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Faculty Full Name</label>
                    <input type="text" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Designation</label>
                    <input type="text" value={formData.designation || ''} onChange={e => setFormData({ ...formData, designation: e.target.value })} style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Qualification Degree</label>
                    <input type="text" value={formData.degree || ''} onChange={e => setFormData({ ...formData, degree: e.target.value, qualification: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Specialization</label>
                    <input type="text" value={formData.specialization || ''} onChange={e => setFormData({ ...formData, specialization: e.target.value })} style={inputStyle} />
                  </div>
                </>
              )}

              {/* SUBJECT FORM FIELDS */}
              {activeTab === 'subjects' && (
                <>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Semester</label>
                    <select value={formData.semester_id || semFilter} onChange={e => setFormData({ ...formData, semester_id: e.target.value })} style={inputStyle}>
                      <option value="s1">Semester 1</option>
                      <option value="s2">Semester 2</option>
                      <option value="s3">Semester 3</option>
                      <option value="s4">Semester 4</option>
                      <option value="s5">Semester 5</option>
                      <option value="s6">Semester 6</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Subject Code</label>
                    <input type="text" value={formData.code || ''} onChange={e => setFormData({ ...formData, code: e.target.value })} style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Subject Name</label>
                    <input type="text" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Type</label>
                      <select value={formData.type || 'Theory'} onChange={e => setFormData({ ...formData, type: e.target.value })} style={inputStyle}>
                        <option value="Theory">Theory</option>
                        <option value="Practical">Practical</option>
                        <option value="Practicum">Practicum</option>
                        <option value="Audit">Audit</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Category</label>
                      <input type="text" value={formData.category || 'Program Core'} onChange={e => setFormData({ ...formData, category: e.target.value })} style={inputStyle} />
                    </div>
                  </div>
                </>
              )}

              {/* GENERIC TITLE & DESCRIPTION */}
              {!['faculty', 'subjects'].includes(activeTab) && (
                <>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Title / Name</label>
                    <input type="text" value={formData.title || formData.name || ''} onChange={e => setFormData({ ...formData, title: e.target.value, name: e.target.value })} style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>Description / Purpose</label>
                    <textarea value={formData.description || formData.purpose || ''} onChange={e => setFormData({ ...formData, description: e.target.value, purpose: e.target.value })} rows={3} style={inputStyle} />
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <CheckCircle size={16} /> Save Changes
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  backgroundColor: '#1E293B',
  border: '1px solid rgba(0, 194, 232, 0.35)',
  borderRadius: '8px',
  color: '#FFFFFF',
  fontSize: '0.95rem',
  fontWeight: '500',
  outline: 'none'
};
