import React from 'react';
import { WHY_CHOOSE_US_PILLARS } from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

export const WhyChooseUsSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="editorial-section why-section"
      aria-label="Why Choose Us"
    >
      <div className="editorial-split">
        <SectionHeading
          lines={['WHY', 'CHOOSE', 'Us']}
          inView={inView}
          eyebrow="CORE STANDARDS"
          description="Every roof installation, repair, and inspection is guided by four practical commitments—delivering structural reliability and clear expectations without high-pressure sales."
        />

        <div className="editorial-content-col">
          <div className="pillars-grid">
            {WHY_CHOOSE_US_PILLARS.map((pillar, index) => (
              <article
                key={pillar.number}
                className={`pillar-card rise-in-item ${inView ? 'is-visible' : ''}`}
                style={{ '--rise-delay': `${(0.2 + index * 0.12).toFixed(2)}s` } as React.CSSProperties}
              >
                <div className="pillar-header">
                  <span className="pillar-index">{pillar.number}</span>
                  <span className="pillar-subtitle">{pillar.subtitle}</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <ul className="pillar-points">
                  {pillar.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
