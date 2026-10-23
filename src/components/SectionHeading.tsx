import React from 'react';

interface SectionHeadingProps {
  lines: [string, string, string] | string[];
  inView: boolean;
  light?: boolean;
  eyebrow?: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Implements SceneAI STEP 9 left editorial heading style:
 * Playfair Display 400, clamp(40px, 4.6vw, 80px), line-height 1.2,
 * color #0d0d0d (or #fff on cobalt sections), underlined (1.5px thick, offset .06em),
 * one word/phrase per line, scroll-triggered wordIn (.9s, delays 0 / .15 / .3s).
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  lines,
  inView,
  light = false,
  eyebrow,
  description,
  children,
}) => {
  return (
    <div className={`editorial-heading-col ${light ? 'is-light' : ''}`}>
      {eyebrow && (
        <div
          className={`editorial-eyebrow rise-in-item ${inView ? 'is-visible' : ''}`}
          style={{ '--rise-delay': '0s' } as React.CSSProperties}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="editorial-h2">
        {lines.map((line, index) => (
          <span key={line} className="editorial-h2-line">
            <span
              className={`word-in-token editorial-underline ${inView ? 'is-visible' : ''}`}
              style={
                {
                  '--word-delay': `${(index * 0.15).toFixed(2)}s`,
                  '--word-duration': '0.9s',
                } as React.CSSProperties
              }
            >
              {line}
            </span>
          </span>
        ))}
      </h2>
      {description && (
        <p
          className={`editorial-lead rise-in-item ${inView ? 'is-visible' : ''}`}
          style={{ '--rise-delay': '0.32s' } as React.CSSProperties}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
