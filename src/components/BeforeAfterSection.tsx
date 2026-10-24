import React from 'react';
import { useInView } from '../hooks/useInView';

export const BeforeAfterSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.35 });

  return (
    <section
      ref={ref}
      className={`before-after-section ${inView ? 'is-visible' : ''}`}
      aria-labelledby="before-after-title"
    >
      <div className="before-after-copy">
        <span className="before-after-eyebrow">A better roof starts here</span>
        <h2 id="before-after-title">See the difference.</h2>
        <p>Scroll to reveal a fresh residential roof, built for lasting weather protection.</p>
      </div>

      <div
        className="before-after-frame"
        role="group"
        aria-label="Before and after roofing comparison"
      >
        <img
          className="before-after-image before-after-image-before"
          src="/images/projects/roof-inspection.webp"
          alt="Roof inspection before a roofing upgrade"
          loading="lazy"
        />
        <img
          className="before-after-image before-after-image-after"
          src="/images/projects/architectural-shingle.webp"
          alt="Completed residential architectural shingle roof"
          loading="lazy"
        />
        <span className="before-after-label before-after-label-before">Before</span>
        <span className="before-after-label before-after-label-after">After</span>
        <span className="before-after-divider" aria-hidden="true" />
      </div>
    </section>
  );
};
