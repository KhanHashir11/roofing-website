import React from 'react';
import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

interface AboutSectionProps {
  onRequestEstimate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestEstimate }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="editorial-section about-section" aria-label="About Us">
      <div className="editorial-split">
        <SectionHeading
          lines={['ABOUT', 'OUR', 'Company']}
          inView={inView}
          eyebrow="WHO WE ARE"
          description={`${COMPANY_INFO.companyName} is dedicated to protecting residential homes and commercial buildings through sound roofing practices, honest evaluations, and clear project communication.`}
        />

        <div className="editorial-content-col">
          <div className="about-layout-grid">
            <div
              className={`about-photo-card rise-in-item ${inView ? 'is-visible' : ''}`}
              style={{ '--rise-delay': '0.2s' } as React.CSSProperties}
            >
              <picture>
                <source srcSet="/images/projects/roof-inspection.webp" type="image/webp" />
                <img
                  src="/images/projects/roof-inspection.jpg"
                  alt="Roofing specialist conducting an on-roof ridge and shingle evaluation"
                  className="about-photo-img"
                  loading="lazy"
                />
              </picture>
              <div className="about-photo-caption">
                <span>On-Site Roof Envelope &amp; Flashing Assessment</span>
              </div>
            </div>

            <div
              className={`about-narrative-card rise-in-item ${inView ? 'is-visible' : ''}`}
              style={{ '--rise-delay': '0.34s' } as React.CSSProperties}
            >
              <h3 className="about-subheading">
                Built Around Practical Building Science &amp; Straightforward Advice
              </h3>

              <p className="about-paragraph">
                At <strong>{COMPANY_INFO.companyName}</strong>, we approach every roof as a complete
                weatherproofing assembly—where structural decking, underlayment barriers, attic
                airflow, flashings, and roofline gutters all work together to keep interiors dry and
                protected.
              </p>

              <p className="about-paragraph">
                Whether evaluating a single leak around a residential chimney, replacing an aging
                steep-slope shingle system, or installing a reflective commercial flat-roof membrane,
                our recommendations start with documented on-roof conditions. When a targeted repair
                can reliably extend your roof’s service life, we tell you plainly; when full
                replacement is the smarter structural choice, we outline every material and
                preparation step in writing.
              </p>

              <div className="about-placeholder-facts" aria-label="Company details placeholders">
                <div className="about-fact-row">
                  <MapPin size={16} strokeWidth={2} className="about-fact-icon" aria-hidden="true" />
                  <div>
                    <span className="about-fact-label">Service Area (Placeholder)</span>
                    <span className="about-fact-value">{COMPANY_INFO.serviceAreaPlaceholder}</span>
                  </div>
                </div>
                <div className="about-fact-row">
                  <ShieldCheck
                    size={16}
                    strokeWidth={2}
                    className="about-fact-icon"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="about-fact-label">Business &amp; Licensing Details (Placeholder)</span>
                    <span className="about-fact-value">{COMPANY_INFO.licensePlaceholder}</span>
                  </div>
                </div>
              </div>

              <div className="about-cta-wrap">
                <button type="button" onClick={onRequestEstimate} className="primary-cobalt-pill">
                  <span>SCHEDULE A FREE ESTIMATE</span>
                  <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
