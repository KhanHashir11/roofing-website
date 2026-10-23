import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

interface FaqSectionProps {
  onAskQuestionClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestionClick }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" ref={ref} className="editorial-section faq-section" aria-label="Frequently Asked Questions">
      <div className="editorial-split">
        <SectionHeading
          lines={['COMMON', 'ROOFING', 'Questions']}
          inView={inView}
          eyebrow="STRAIGHTFORWARD ANSWERS"
          description="Practical guidance on free estimates, roof inspections, deciding between repair and replacement, storm damage precautions, and commercial roof care."
        >
          <div
            className={`faq-cta-box rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.42s' } as React.CSSProperties}
          >
            <p className="faq-aside-note">
              Have a specific question about an active leak, roof material, or commercial building?
            </p>
            <button type="button" onClick={onAskQuestionClick} className="outline-dark-pill">
              ASK OUR TEAM / REQUEST ESTIMATE
            </button>
          </div>
        </SectionHeading>

        <div className="editorial-content-col">
          <div className="faq-accordion-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `panel-${item.id}`;
              const triggerId = `trigger-${item.id}`;
              return (
                <div
                  key={item.id}
                  className={`faq-item rise-in-item ${isOpen ? 'is-open' : ''} ${inView ? 'is-visible' : ''}`}
                  style={{ '--rise-delay': `${(0.15 + idx * 0.06).toFixed(2)}s` } as React.CSSProperties}
                >
                  <h3 className="faq-question-heading">
                    <button
                      id={triggerId}
                      type="button"
                      className="faq-trigger-btn"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className="faq-q-index">0{idx + 1}</span>
                      <span className="faq-q-text">{item.question}</span>
                      <span className="faq-icon-circle" aria-hidden="true">
                        {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`faq-answer-wrapper ${isOpen ? 'is-open' : ''}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
