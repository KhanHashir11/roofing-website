import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { ROOFING_SERVICES, RoofingService, ServiceCategory } from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

interface ServicesSectionProps {
  activeCategory: ServiceCategory;
  onCategoryChange: (cat: ServiceCategory) => void;
  onSelectServiceForEstimate: (serviceValue: string) => void;
}

const CATEGORIES: ServiceCategory[] = ['All', 'Residential', 'Commercial', 'Repairs & Exterior'];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  activeCategory,
  onCategoryChange,
  onSelectServiceForEstimate,
}) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  const filteredServices: RoofingService[] =
    activeCategory === 'All'
      ? ROOFING_SERVICES
      : ROOFING_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" ref={ref} className="editorial-section services-section" aria-label="Roofing Services">
      <div className="editorial-split">
        <SectionHeading
          lines={['OUR', 'ROOFING', 'Services']}
          inView={inView}
          eyebrow="RESIDENTIAL & COMMERCIAL SOLUTIONS"
          description="Comprehensive roofing and roofline drainage capabilities engineered to protect homes, multi-family residences, and commercial properties in every season."
        >
          <div
            className={`filter-pill-row rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.42s' } as React.CSSProperties}
            role="tablist"
            aria-label="Filter roofing services by scope"
          >
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onCategoryChange(category)}
                  className={`surface-pill-btn ${isSelected ? 'is-active' : ''}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </SectionHeading>

        <div className="editorial-content-col">
          <div className="services-grid">
            {filteredServices.map((service, idx) => (
              <article
                key={service.id}
                className={`service-card rise-in-item ${inView ? 'is-visible' : ''}`}
                style={
                  {
                    '--rise-delay': `${(0.16 + idx * 0.08).toFixed(2)}s`,
                  } as React.CSSProperties
                }
              >
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-scope-tag">{service.scopeBadge}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-summary">{service.summary}</p>

                <ul className="service-highlights-list">
                  {service.highlights.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2.2} className="service-check-icon" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForEstimate(service.formValue)}
                    className="service-estimate-btn"
                  >
                    <span>REQUEST ESTIMATE</span>
                    <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
