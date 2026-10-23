import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OUR_PROCESS_STEPS } from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

interface ProcessSectionProps {
  onRequestEstimate: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onRequestEstimate }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="process"
      ref={ref}
      className="editorial-section process-section"
      aria-label="Our Process"
    >
      <div className="editorial-split">
        <SectionHeading
          lines={['OUR', 'PROJECT', 'Process']}
          inView={inView}
          eyebrow="HOW WE WORK"
          description="A clear, structured four-stage workflow designed so property owners know what is happening overhead from first conversation to final cleanup."
        >
          <div
            className={`process-cta-aside rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.42s' } as React.CSSProperties}
          >
            <button type="button" onClick={onRequestEstimate} className="outline-dark-pill">
              <span>START STEP 01 — FREE ESTIMATE</span>
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </SectionHeading>

        <div className="editorial-content-col">
          <ol className="process-steps-grid">
            {OUR_PROCESS_STEPS.map((item, idx) => (
              <li
                key={item.step}
                className={`process-step-card rise-in-item ${inView ? 'is-visible' : ''}`}
                style={{ '--rise-delay': `${(0.2 + idx * 0.12).toFixed(2)}s` } as React.CSSProperties}
              >
                <div className="process-step-top">
                  <span className="process-step-num">STEP {item.step}</span>
                  <span className="process-connector-dot" aria-hidden="true" />
                </div>
                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-summary">{item.summary}</p>
                <div className="process-deliverable-box">
                  <span className="process-deliverable-label">OUTCOME</span>
                  <span className="process-deliverable-text">{item.deliverable}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
