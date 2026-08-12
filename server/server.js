import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import dbManager, { initDatabase } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize DB schema & seed data
initDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS & JSON parsing
const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map(o => o.trim()) : '*';
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve uploaded images statically
app.use('/uploads', express.static(uploadsDir));

// Authentication Middleware to protect mutation APIs
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized access. Authentication token required.' });
  }
  const token = authHeader.split(' ')[1];
  if (token !== 'dit-admin-jwt-token-ravi-2026') {
    return res.status(401).json({ success: false, message: 'Invalid or expired authentication token.' });
  }
  next();
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

// Protected File Upload API
app.post('/api/upload', requireAuth, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl, filename: req.file.filename });
});

// Admin Authentication API (Bcrypt Secured)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};

  // Backend Empty Field & String Validation
  if (!username || !password || typeof username !== 'string' || typeof password !== 'string' || username.trim() === '' || password.trim() === '') {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  const cleanUser = username.trim();
  const cleanPass = password.trim();

  const admins = dbManager.getAll('admins');
  const admin = admins.find(a => a.username === cleanUser);

  if (admin && admin.password_hash && bcrypt.compareSync(cleanPass, admin.password_hash)) {
    return res.json({
      success: true,
      token: 'dit-admin-jwt-token-ravi-2026',
      username: admin.username
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid username or password' });
});

// Admin Dashboard Counters API
app.get('/api/stats', (req, res) => {
  res.json({
    faculty: dbManager.getAll('faculty').length,
    subjects: dbManager.getAll('subjects').length,
    laboratories: dbManager.getAll('laboratories').length,
    projects: dbManager.getAll('projects').length,
    achievements: dbManager.getAll('achievements').length,
    events: dbManager.getAll('events').length,
    gallery: dbManager.getAll('gallery').length,
    calendar: dbManager.getAll('calendar').length
  });
});

// ==========================================
// 1. FACULTY ENDPOINTS
// ==========================================
app.get('/api/faculty', (req, res) => {
  const rows = dbManager.getAll('faculty');
  const hodRow = rows.find(r => r.is_hod === 1);
  const teachingStaff = rows.filter(r => r.category === 'teaching' && r.is_hod !== 1);
  const technicalStaff = rows.filter(r => r.category === 'technical');

  res.json({
    raw: rows,
    hod: hodRow || rows[0],
    teachingStaff: teachingStaff.length ? teachingStaff : rows.filter(r => !r.is_hod),
    technicalStaff
  });
});

app.post('/api/faculty', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'fac-' + Date.now();
  const newFaculty = {
    id,
    name: data.name,
    designation: data.designation || 'Lecturer',
    degree: data.degree || '',
    qualification: data.qualification || data.degree || '',
    teaching_exp: data.teaching_exp || 'N/A',
    industry_exp: data.industry_exp || 'N/A',
    publications: data.publications || 0,
    specialization: data.specialization || '',
    email: data.email || '',
    phone: data.phone || '',
    bio: data.bio || '',
    image: data.image || 'https://psgpolytech.ac.in/dept/images/DIT/faculty/GAishwaryalakshmi.jpg',
    is_hod: data.is_hod ? 1 : 0,
    category: data.category || 'teaching',
    profile_link: data.profile_link || ''
  };

  if (data.is_hod) {
    dbManager.setHod(id);
  }

  dbManager.insert('faculty', newFaculty);
  res.json({ success: true, item: newFaculty });
});

app.put('/api/faculty/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const data = req.body;
  
  if (data.is_hod) {
    dbManager.setHod(id);
  }

  const updated = dbManager.update('faculty', id, data);
  res.json({ success: true, item: updated });
});

app.put('/api/faculty/:id/hod', requireAuth, (req, res) => {
  const { id } = req.params;
  dbManager.setHod(id);
  res.json({ success: true });
});

app.delete('/api/faculty/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('faculty', req.params.id);
  res.json({ success });
});

// ==========================================
// 2. SUBJECTS ENDPOINTS (NO SYLLABUS)
// ==========================================
app.get('/api/subjects', (req, res) => {
  const rows = dbManager.getAll('subjects');
  res.json(rows);
});

app.post('/api/subjects', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'sub-' + Date.now();
  const newSub = {
    id,
    semester_id: data.semester_id || 's1',
    code: data.code || '24IT' + Math.floor(10 + Math.random() * 80),
    name: data.name,
    type: data.type || 'Theory',
    category: data.category || 'Program Core',
    hours_per_week: Number(data.hours_per_week) || 3,
    credits: Number(data.credits) || 3,
    description: data.description || ''
  };

  dbManager.insert('subjects', newSub);
  res.json({ success: true, item: newSub });
});

app.put('/api/subjects/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const updated = dbManager.update('subjects', id, req.body);
  res.json({ success: true, item: updated });
});

app.delete('/api/subjects/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('subjects', req.params.id);
  res.json({ success });
});

// ==========================================
// 3. LABORATORIES ENDPOINTS
// ==========================================
app.get('/api/laboratories', (req, res) => {
  const rows = dbManager.getAll('laboratories');
  res.json(rows);
});

app.post('/api/laboratories', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'lab-' + Date.now();
  const newLab = {
    id,
    name: data.name,
    short_name: data.short_name || data.name,
    purpose: data.purpose || '',
    lab_in_charge: data.lab_in_charge || 'Faculty In-Charge',
    partner: data.partner || 'PSG Polytechnic College',
    image: data.image || 'https://psgpolytech.ac.in/dept/images/DIT/facilities/itlab.jpg',
    equipment: data.equipment || '',
    objectives: data.objectives || ''
  };

  dbManager.insert('laboratories', newLab);
  res.json({ success: true, item: newLab });
});

app.put('/api/laboratories/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const updated = dbManager.update('laboratories', id, req.body);
  res.json({ success: true, item: updated });
});

app.delete('/api/laboratories/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('laboratories', req.params.id);
  res.json({ success });
});

// ==========================================
// 4. PROJECTS ENDPOINTS
// ==========================================
app.get('/api/projects', (req, res) => {
  const rows = dbManager.getAll('projects');
  res.json(rows);
});

app.post('/api/projects', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'proj-' + Date.now();
  const newProj = {
    id,
    title: data.title,
    description: data.description || '',
    category: data.category || 'Software Development',
    technologies: data.technologies || 'React, Node.js',
    students: data.students || 'Student Team',
    guide: data.guide || 'Faculty Advisor',
    image: data.image || 'https://psgpolytech.ac.in/dept/images/DIT/facilities/UAVRearch1.JPG',
    year: data.year || '2024',
    github: data.github || '',
    demo: data.demo || ''
  };

  dbManager.insert('projects', newProj);
  res.json({ success: true, item: newProj });
});

app.put('/api/projects/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const updated = dbManager.update('projects', id, req.body);
  res.json({ success: true, item: updated });
});

app.delete('/api/projects/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('projects', req.params.id);
  res.json({ success });
});

// ==========================================
// 5. ACHIEVEMENTS ENDPOINTS
// ==========================================
app.get('/api/achievements', (req, res) => {
  const rows = dbManager.getAll('achievements');
  res.json(rows);
});

app.post('/api/achievements', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'ach-' + Date.now();
  const newAch = {
    id,
    title: data.title,
    description: data.description || '',
    category: data.category || 'Academic Honor',
    student_name: data.student_name || 'Rank Holder',
    year: data.year || '2024',
    image: data.image || 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg',
    score: data.score || 'Distinction'
  };

  dbManager.insert('achievements', newAch);
  res.json({ success: true, item: newAch });
});

app.put('/api/achievements/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const updated = dbManager.update('achievements', id, req.body);
  res.json({ success: true, item: updated });
});

app.delete('/api/achievements/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('achievements', req.params.id);
  res.json({ success });
});

// ==========================================
// 6. EVENTS ENDPOINTS
// ==========================================
app.get('/api/events', (req, res) => {
  const rows = dbManager.getAll('events');
  res.json(rows);
});

app.post('/api/events', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'evt-' + Date.now();
  const newEvt = {
    id,
    title: data.title,
    date: data.date || 'Today',
    category: data.category || 'Events',
    description: data.description || '',
    location: data.location || 'Department Premises',
    organizer: data.organizer || 'Department of Information Technology',
    image: data.image || 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg'
  };

  dbManager.insert('events', newEvt);
  res.json({ success: true, item: newEvt });
});

app.put('/api/events/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const updated = dbManager.update('events', id, req.body);
  res.json({ success: true, item: updated });
});

app.delete('/api/events/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('events', req.params.id);
  res.json({ success });
});

// ==========================================
// 7. GALLERY ENDPOINTS
// ==========================================
app.get('/api/gallery', (req, res) => {
  const rows = dbManager.getAll('gallery');
  res.json(rows);
});

app.post('/api/gallery', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'gal-' + Date.now();
  const newGal = {
    id,
    title: data.title || 'Department Activity',
    category: data.category || 'Campus Life',
    event_name: data.event_name || 'Academic Event',
    image_url: data.image_url,
    date: data.date || '2024'
  };

  dbManager.insert('gallery', newGal);
  res.json({ success: true, item: newGal });
});

app.delete('/api/gallery/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('gallery', req.params.id);
  res.json({ success });
});

// ==========================================
// 8. ACADEMIC CALENDAR ENDPOINTS
// ==========================================
app.get('/api/calendar', (req, res) => {
  const rows = dbManager.getAll('calendar');
  res.json(rows);
});

app.post('/api/calendar', requireAuth, (req, res) => {
  const data = req.body;
  const id = 'cal-' + Date.now();
  const newCal = {
    id,
    title: data.title,
    date: data.date,
    category: data.category || 'Academic',
    description: data.description || '',
    semester: data.semester || 'All Semesters'
  };

  dbManager.insert('calendar', newCal);
  res.json({ success: true, item: newCal });
});

app.put('/api/calendar/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const updated = dbManager.update('calendar', id, req.body);
  res.json({ success: true, item: updated });
});

app.delete('/api/calendar/:id', requireAuth, (req, res) => {
  const success = dbManager.delete('calendar', req.params.id);
  res.json({ success });
});

// ==========================================
// 9. CONTACT ENDPOINT
// ==========================================
app.get('/api/contact', (req, res) => {
  const contact = dbManager.getState().contact || {};
  res.json(contact);
});

app.put('/api/contact', requireAuth, (req, res) => {
  const updated = dbManager.updateContact(req.body);
  res.json({ success: true, item: updated });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`PSG DIT Portal Express REST API Server running on port ${PORT}`);
});
