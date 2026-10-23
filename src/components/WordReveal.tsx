import React from 'react';

interface WordRevealProps {
  text: string;
  active?: boolean;
  startDelay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
  wordClassName?: string;
}

/**
 * Implements SceneAI STEP 8 ("wordIn"):
 * Each word animates on its own: opacity 0, translateY(.45em), blur(10px) -> visible, sharp.
 * cubic-bezier(.2, .7, .2, 1)
 */
export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  active = true,
  startDelay = 0,
  stagger = 0.06,
  duration = 0.7,
  className = '',
  wordClassName = '',
}) => {
  const words = text.trim().split(/\s+/);

  return (
    <span className={className}>
      {words.map((word, idx) => {
        const delay = Number((startDelay + idx * stagger).toFixed(3));
        return (
          <React.Fragment key={`${word}-${idx}`}>
            <span
              className={`word-in-token ${active ? 'is-visible' : ''} ${wordClassName}`}
              style={
                {
                  '--word-delay': `${delay}s`,
                  '--word-duration': `${duration}s`,
                } as React.CSSProperties
              }
            >
              {word}
            </span>
            {idx < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </span>
  );
};
