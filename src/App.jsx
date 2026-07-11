/* TODO: add more sections/features later */
/* TODO: swap in refined MetallicPaint SVG wordmark paths if text-based SVG rendering is inconsistent */
/* TODO: add exact resume bullet wording + real email in Contact.jsx */

import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroductionPage from './pages/IntroductionPage';
import CompetenciesPage from './pages/CompetenciesPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppShell() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/competencies" element={<CompetenciesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Myat Myint Zu</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
