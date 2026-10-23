import React, { useEffect, useState } from 'react';
import { House, Menu, Phone, X } from 'lucide-react';
import { COMPANY_INFO, ServiceCategory } from '../data/siteContent';

interface HeaderProps {
  activeSection: string;
  selectedScope: 'RES' | 'COM';
  onScopeChange: (scope: 'RES' | 'COM', mappedCategory: ServiceCategory) => void;
  onNavigate: (sectionId: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  isHome?: boolean;
  delay: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME', isHome: true, delay: '0.2s' },
  { id: 'services', label: 'SERVICES', delay: '0.26s' },
  { id: 'about', label: 'ABOUT', delay: '0.32s' },
  { id: 'process', label: 'PROCESS', delay: '0.38s' },
  { id: 'projects', label: 'PROJECTS', delay: '0.44s' },
  { id: 'faq', label: 'FAQ', delay: '0.50s' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  selectedScope,
  onScopeChange,
  onNavigate,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="site-header-grid">
        {/* Left: 40x30 white architectural roofline SVG logo mark + placeholder company brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="brand-link nav-fade-down"
          style={{ '--nav-delay': '0.1s' } as React.CSSProperties}
          aria-label={`${COMPANY_INFO.companyName} — Go to top`}
        >
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="brand-logo-svg"
            aria-hidden="true"
          >
            <path
              d="M2.5 18.5L18.5 5.5L34.5 18.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 10.5L29.5 4.5L37.5 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.82"
            />
            <path
              d="M9 18.5L18.5 10.8L28 18.5V25.5H9V18.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <line
              x1="18.5"
              y1="10.8"
              x2="18.5"
              y2="25.5"
              stroke="currentColor"
              strokeWidth="1.4"
              opacity="0.65"
            />
          </svg>
          <span className="brand-name-text">{COMPANY_INFO.shortBrandLabel}</span>
        </a>

        {/* Center (desktop > 860px only): SceneAI pill nav, gap 1px */}
        <nav className="desktop-pill-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`nav-pill nav-fade-down ${isActive ? 'is-active' : ''}`}
                style={{ '--nav-delay': item.delay } as React.CSSProperties}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.isHome && <House size={15} strokeWidth={2} aria-hidden="true" />}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Scope toggle pill + Prominent Get a Free Estimate button + Mobile hamburger */}
        <div className="header-right-actions">
          {/* SceneAI 2-option glass switch pill adapted for Residential / Commercial quick scope */}
          <div
            className="scope-switch-pill nav-fade-down"
            style={{ '--nav-delay': '0.52s' } as React.CSSProperties}
            role="group"
            aria-label="Filter focus between Residential and Commercial roofing"
          >
            <button
              type="button"
              className={`scope-switch-btn ${selectedScope === 'RES' ? 'is-active' : ''}`}
              onClick={() => onScopeChange('RES', 'Residential')}
              title="View Residential Roofing Services"
            >
              RES
            </button>
            <button
              type="button"
              className={`scope-switch-btn ${selectedScope === 'COM' ? 'is-active' : ''}`}
              onClick={() => onScopeChange('COM', 'Commercial')}
              title="View Commercial Roofing Services"
            >
              COM
            </button>
          </div>

          <a
            href="#estimate"
            onClick={(e) => handleLinkClick(e, 'estimate')}
            className="header-cta-pill nav-fade-down"
            style={{ '--nav-delay': '0.6s' } as React.CSSProperties}
          >
            GET A FREE ESTIMATE
          </a>

          <button
            type="button"
            className="mobile-hamburger-btn nav-fade-down"
            style={{ '--nav-delay': '0.65s' } as React.CSSProperties}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-dropdown-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown (<= 860px) per SceneAI STEP 4 */}
      {menuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="mobile-nav-dropdown"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`mobile-dropdown-pill ${isActive ? 'is-active' : ''}`}
              >
                {item.isHome && <House size={16} strokeWidth={2} aria-hidden="true" />}
                <span>{item.label}</span>
              </a>
            );
          })}
          <a
            href="#reviews"
            onClick={(e) => handleLinkClick(e, 'reviews')}
            className={`mobile-dropdown-pill ${activeSection === 'reviews' ? 'is-active' : ''}`}
          >
            <span>REVIEWS</span>
          </a>
          <a
            href="#estimate"
            onClick={(e) => handleLinkClick(e, 'estimate')}
            className="mobile-dropdown-pill is-cta"
          >
            <span>GET A FREE ESTIMATE</span>
          </a>
          <a href={COMPANY_INFO.phoneHref} className="mobile-dropdown-phone">
            <Phone size={15} aria-hidden="true" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      )}
    </header>
  );
};
