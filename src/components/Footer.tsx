import React from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, ROOFING_SERVICES } from '../data/siteContent';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceFormValue: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="footer-grid">
          {/* Column 1: Brand & Company Introduction */}
          <div className="footer-brand-col">
            <a
              href="#home"
              onClick={(e) => handleNav(e, 'home')}
              className="footer-brand-link"
              aria-label={`${COMPANY_INFO.companyName} — Back to top`}
            >
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              </svg>
              <span>{COMPANY_INFO.companyName}</span>
            </a>

            <p className="footer-mission">
              Residential and commercial roofing installations, full replacements, leak and storm
              damage repairs, detailed roof inspections, and seamless roofline gutter systems.
            </p>

            <p className="footer-placeholder-note">
              Note: Bracketed company details are clearly marked placeholders ready to be updated
              with live business information in <code>src/data/siteContent.ts</code>.
            </p>
          </div>

          {/* Column 2: Roofing Services Links */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">ROOFING SERVICES</h3>
            <ul>
              {ROOFING_SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#estimate"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(service.formValue);
                    }}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Site Navigation */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">NAVIGATION</h3>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleNav(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleNav(e, 'why-choose-us')}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNav(e, 'process')}>
                  Our Process
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNav(e, 'projects')}>
                  Projects Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNav(e, 'reviews')}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNav(e, 'faq')}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#estimate" onClick={(e) => handleNav(e, 'estimate')}>
                  Free Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Placeholders */}
          <div className="footer-contact-col">
            <h3 className="footer-col-heading">CONTACT DETAILS</h3>
            <ul className="footer-contact-list">
              <li>
                <Phone size={15} strokeWidth={2} aria-hidden="true" />
                <a href={COMPANY_INFO.phoneHref}>{COMPANY_INFO.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={15} strokeWidth={2} aria-hidden="true" />
                <a href={COMPANY_INFO.emailHref}>{COMPANY_INFO.emailDisplay}</a>
              </li>
              <li>
                <MapPin size={15} strokeWidth={2} aria-hidden="true" />
                <span>{COMPANY_INFO.addressPlaceholder}</span>
              </li>
            </ul>
            <p className="footer-license-tag">{COMPANY_INFO.licensePlaceholder}</p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} {COMPANY_INFO.companyName}. Residential &amp; Commercial Roofing Services.
          </p>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="back-to-top-pill"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
