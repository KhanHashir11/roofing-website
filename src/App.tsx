import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { EstimateSection } from './components/EstimateSection';
import { Footer } from './components/Footer';
import { ServiceCategory } from './data/siteContent';

const SECTION_IDS = [
  'home',
  'services',
  'why-choose-us',
  'about',
  'process',
  'projects',
  'reviews',
  'faq',
  'estimate',
];

const GRID_COLUMNS = [
  { left: '4.8%', delay: '0s' },
  { left: '35.45%', delay: '0.1s' },
  { left: '64.7%', delay: '0.2s' },
  { left: '95.2%', delay: '0.3s' },
];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedScope, setSelectedScope] = useState<'RES' | 'COM'>('RES');
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('All');
  const [preselectedEstimateService, setPreselectedEstimateService] =
    useState<string>('Roof Replacement');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      let current = 'home';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id === 'why-choose-us' ? 'about' : id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScopeToggle = (scope: 'RES' | 'COM', mappedCategory: ServiceCategory) => {
    setSelectedScope(scope);
    setServiceCategory(mappedCategory);
    setPreselectedEstimateService(scope === 'COM' ? 'Commercial Roofing' : 'Roof Replacement');
    scrollToSection('services');
  };

  const handleRequestEstimateWithService = (serviceFormValue: string) => {
    setPreselectedEstimateService(serviceFormValue);
    scrollToSection('estimate');
  };

  return (
    <div className="page-root">
      <a href="#services" className="skip-to-content">
        Skip to roofing services
      </a>

      {/* Section 1: Header (SceneAI STEP 4) */}
      <Header
        activeSection={activeSection}
        selectedScope={selectedScope}
        onScopeChange={handleScopeToggle}
        onNavigate={scrollToSection}
      />

      <main>
        {/* STEP 2 — PAGE SKY BACKGROUND wrapping Hero + Section 2 (Services) */}
        <div className="sky-gradient-wrapper">
          <div className="sky-cloud-glow" aria-hidden="true" />
          <div className="architectural-grid-lines is-sky" aria-hidden="true">
            {GRID_COLUMNS.map((col) => (
              <span
                key={col.left}
                className="grid-line-v is-animated"
                style={{ left: col.left, '--line-delay': col.delay } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Section 2: Hero (SceneAI STEPS 3, 5, 6, 7, 8) */}
          <Hero
            onRequestEstimate={() => scrollToSection('estimate')}
            onExploreServices={() => scrollToSection('services')}
          />

          {/* Section 3: Services (All 7 required roofing services) */}
          <ServicesSection
            activeCategory={serviceCategory}
            onCategoryChange={setServiceCategory}
            onSelectServiceForEstimate={handleRequestEstimateWithService}
          />
        </div>

        {/* ARCHITECTURAL WHITE CANVAS (Sections 4–9) with continuous 4-column grid lines */}
        <div className="light-architectural-canvas">
          <div className="architectural-grid-lines is-light" aria-hidden="true">
            {GRID_COLUMNS.map((col) => (
              <span key={col.left} className="grid-line-v" style={{ left: col.left }} />
            ))}
          </div>

          {/* Section 4: Why Choose Us */}
          <WhyChooseUsSection />

          {/* Section 5: About Us */}
          <AboutSection onRequestEstimate={() => scrollToSection('estimate')} />

          {/* Section 6: Our Process */}
          <ProcessSection onRequestEstimate={() => scrollToSection('estimate')} />

          {/* Section 7: Projects Gallery (SceneAI STEP 9 Showcase) */}
          <ProjectsGallery
            onRequestSimilarEstimate={(serviceVal) => handleRequestEstimateWithService(serviceVal)}
          />

          {/* Section 8: Testimonials (Genuine Customer Reviews — No Fabricated Testimonials) */}
          <TestimonialsSection />

          {/* Section 9: FAQ */}
          <FaqSection onAskQuestionClick={() => scrollToSection('estimate')} />
        </div>

        {/* CLOSING COBALT SKY CANVAS (Section 10 Free Estimate + Section 11 Footer) */}
        <div className="closing-sky-wrapper">
          <div className="architectural-grid-lines is-sky-subtle" aria-hidden="true">
            {GRID_COLUMNS.map((col) => (
              <span key={col.left} className="grid-line-v" style={{ left: col.left }} />
            ))}
          </div>

          {/* Section 10: Contact / Free Estimate Form */}
          <EstimateSection preselectedService={preselectedEstimateService} />

          {/* Section 11: Footer */}
          <Footer
            onNavigate={scrollToSection}
            onSelectService={handleRequestEstimateWithService}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
