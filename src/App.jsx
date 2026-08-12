import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { SemesterDetailPage } from './pages/SemesterDetailPage';
import { SubjectDetailPage } from './pages/SubjectDetailPage';
import { FacultyPage } from './pages/FacultyPage';
import { FacultyDetailPage } from './pages/FacultyDetailPage';
import { LaboratoriesPage } from './pages/LaboratoriesPage';
import { LabDetailPage } from './pages/LabDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { CalendarPage } from './pages/CalendarPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminPortal } from './admin/AdminPortal';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/academics/:semId" element={<SemesterDetailPage />} />
            <Route path="/subject/:subjectId" element={<SubjectDetailPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/faculty/:facultyId" element={<FacultyDetailPage />} />
            <Route path="/laboratories" element={<LaboratoriesPage />} />
            <Route path="/laboratories/:labId" element={<LabDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/news-events/:eventId" element={<EventDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/academic-calendar" element={<CalendarPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
