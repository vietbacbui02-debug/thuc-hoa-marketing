import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { PROJECTS, RoutePath } from './data/siteData';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<RoutePath>('/');
  const [portfolioSection, setPortfolioSection] = useState<string | undefined>(undefined);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>(PROJECTS[0].slug);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | undefined>(undefined);
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultCourseId, setConsultCourseId] = useState<string | undefined>(undefined);

  const handleNavigate = (path: RoutePath, hash?: string) => {
    setCurrentPath(path);
    setPortfolioSection(hash);
    if (path !== '/bai-viet') {
      setSelectedArticleSlug(undefined);
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (currentPath === '/ho-so-nang-luc' && portfolioSection) {
      const el = document.getElementById(portfolioSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentPath, portfolioSection]);

  const handleOpenConsult = (courseId?: string) => {
    setConsultCourseId(courseId);
    setConsultOpen(true);
  };

  const handleOpenProject = (slug: string) => {
    setSelectedProjectSlug(slug);
    handleNavigate('/case-study');
  };

  const handleOpenArticle = (slug?: string) => {
    setSelectedArticleSlug(slug);
    handleNavigate('/bai-viet');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div className="aurora-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsult={handleOpenConsult}
      />

      <main style={{ flex: 1 }}>
        {currentPath === '/' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsult={handleOpenConsult}
            onOpenProject={handleOpenProject}
            onOpenArticle={handleOpenArticle}
          />
        )}

        {currentPath === '/gioi-thieu' && (
          <AboutPage onNavigate={handleNavigate} onOpenConsult={() => handleOpenConsult()} />
        )}

        {currentPath === '/ho-so-nang-luc' && (
          <PortfolioPage
            activeSection={portfolioSection}
            onNavigate={handleNavigate}
            onOpenConsult={() => handleOpenConsult()}
          />
        )}

        {currentPath === '/du-an' && (
          <ProjectsPage
            mode="list"
            selectedSlug={selectedProjectSlug}
            onNavigate={handleNavigate}
            onSelectProject={handleOpenProject}
            onOpenConsult={() => handleOpenConsult()}
          />
        )}

        {currentPath === '/case-study' && (
          <ProjectsPage
            mode="detail"
            selectedSlug={selectedProjectSlug}
            onNavigate={handleNavigate}
            onSelectProject={handleOpenProject}
            onOpenConsult={() => handleOpenConsult()}
          />
        )}

        {currentPath === '/an-pham' && (
          <PublicationsPage
            onNavigate={handleNavigate}
            onOpenConsult={() => handleOpenConsult()}
          />
        )}

        {currentPath === '/bai-viet' && (
          <ArticlesPage
            selectedSlug={selectedArticleSlug}
            onNavigate={handleNavigate}
            onSelectArticle={handleOpenArticle}
            onOpenConsult={() => handleOpenConsult()}
          />
        )}

        {currentPath === '/testimonials' && (
          <TestimonialsPage
            onNavigate={handleNavigate}
            onOpenConsult={() => handleOpenConsult()}
          />
        )}

        {currentPath === '/lien-he' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} onOpenConsult={() => handleOpenConsult()} />

      <ConsultModal
        isOpen={consultOpen}
        initialCourseId={consultCourseId}
        onClose={() => setConsultOpen(false)}
      />
    </div>
  );
};

export default App;
