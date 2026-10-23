import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WordReveal } from './WordReveal';

interface HeroProps {
  onRequestEstimate: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestEstimate, onExploreServices }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeSegment, setActiveSegment] = useState<number>(0);

  // SceneAI STEP 7: Video must NEVER stop — re-play on pause/ended/stalled,
  // check every 1s, resume on tab visibility change and on the first tap/pointer.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensurePlaying = () => {
      if (!video) return;
      video.muted = true;
      if (video.paused || video.ended) {
        video.play().catch(() => {
          // Silently handle initial policy check; retried on interval & first gesture
        });
      }
    };

    const handleTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const ratio = video.currentTime / video.duration;
      const seg = Math.min(3, Math.max(0, Math.floor(ratio * 4)));
      setActiveSegment(seg);
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        ensurePlaying();
      }
    };

    const handleFirstInteract = () => {
      ensurePlaying();
    };

    ensurePlaying();

    video.addEventListener('pause', ensurePlaying);
    video.addEventListener('ended', ensurePlaying);
    video.addEventListener('stalled', ensurePlaying);
    video.addEventListener('waiting', ensurePlaying);
    video.addEventListener('timeupdate', handleTimeUpdate);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pointerdown', handleFirstInteract, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteract, { once: true, passive: true });

    const watchdog = window.setInterval(ensurePlaying, 1000);

    return () => {
      window.clearInterval(watchdog);
      video.removeEventListener('pause', ensurePlaying);
      video.removeEventListener('ended', ensurePlaying);
      video.removeEventListener('stalled', ensurePlaying);
      video.removeEventListener('waiting', ensurePlaying);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pointerdown', handleFirstInteract);
      window.removeEventListener('touchstart', handleFirstInteract);
    };
  }, []);

  const handleSegmentClick = (index: number) => {
    const video = videoRef.current;
    setActiveSegment(index);
    if (!video) return;
    if (video.duration && !Number.isNaN(video.duration)) {
      video.currentTime = (index / 4) * video.duration;
    }
    video.muted = true;
    video.play().catch(() => {});
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero">
      {/* STEP 5 — HERO HEADLINE + TAGLINE */}
      <div className="hero-headline-row">
        <h1 className="hero-h1">
          <span className="hero-h1-line is-indented">
            <span
              className="word-in-token is-visible"
              style={{ '--word-delay': '0.55s', '--word-duration': '1s' } as React.CSSProperties}
            >
              COMPLETE
            </span>
          </span>
          <span className="hero-h1-line">
            <span
              className="word-in-token is-visible"
              style={{ '--word-delay': '0.75s', '--word-duration': '1s' } as React.CSSProperties}
            >
              ROOFING
            </span>
          </span>
          <span className="hero-h1-line">
            <span
              className="word-in-token is-visible"
              style={{ '--word-delay': '0.95s', '--word-duration': '1s' } as React.CSSProperties}
            >
              SYSTEMS
            </span>
          </span>
        </h1>

        <p className="hero-tagline">
          <span className="hero-tagline-line is-first-indented">
            <WordReveal
              text="DEPENDABLE RESIDENTIAL &"
              active={true}
              startDelay={1.15}
              stagger={0.06}
              duration={0.7}
            />
          </span>
          <span className="hero-tagline-line">
            <WordReveal
              text="COMMERCIAL ROOFING BUILT FOR"
              active={true}
              startDelay={1.33}
              stagger={0.06}
              duration={0.7}
            />
          </span>
          <span className="hero-tagline-line">
            <WordReveal
              text="LASTING WEATHER PROTECTION."
              active={true}
              startDelay={1.57}
              stagger={0.06}
              duration={0.7}
            />
          </span>
        </p>
      </div>

      {/* STEP 6 — HERO CTA BUTTONS + EXPLORE LINK */}
      <div className="hero-explore-row">
        <button
          type="button"
          onClick={onRequestEstimate}
          className="hero-primary-cta word-in-token is-visible"
          style={{ '--word-delay': '1.82s', '--word-duration': '0.8s' } as React.CSSProperties}
        >
          <span>GET A FREE ESTIMATE</span>
          <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
        </button>

        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            onExploreServices();
          }}
          className="hero-explore-link word-in-token is-visible"
          style={{ '--word-delay': '1.90s', '--word-duration': '0.8s' } as React.CSSProperties}
        >
          <span>EXPLORE SERVICES</span>
          <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
        </a>
      </div>

      {/* STEP 7 — BOTTOM-LEFT VIDEO CARD */}
      <div className="hero-video-card" aria-label="Architectural showcase preview">
        <div className="hero-video-box">
          <video
            ref={videoRef}
            className="hero-video-el"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/video/hero-showcase.mp4" type="video/mp4" />
            <source
              src="https://cdn.sceneai.art/Hero%20Section%20Video/adec243d-ffda-48cf-a8a8-26e6d6bcbe9b.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <p className="hero-video-caption">
          <span className="hero-caption-line">
            <WordReveal
              text="Built to shield every"
              active={true}
              startDelay={2.15}
              stagger={0.06}
              duration={0.7}
            />
          </span>
          <span className="hero-caption-line">
            <WordReveal
              text="roof & structure"
              active={true}
              startDelay={2.39}
              stagger={0.06}
              duration={0.7}
            />
          </span>
        </p>

        <div className="hero-progress-bars" role="group" aria-label="Video showcase progress">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSegmentClick(idx)}
              className={`hero-progress-hit ${activeSegment === idx ? 'is-active' : ''}`}
              aria-label={`Jump to video part ${idx + 1} of 4`}
              aria-pressed={activeSegment === idx}
            >
              <span className="hero-progress-bar" />
            </button>
          ))}
        </div>
      </div>

      {/* STEP 3 — MAIN ARCHITECTURAL HOUSE IMAGE (transparent PNG / WebP rising from bottom) */}
      <picture className="hero-house-picture">
        <source srcSet="/images/hero-building.webp" type="image/webp" />
        <img
          src="https://cdn.sceneai.art/Bg%20images/1dd58514-cedb-4f70-9aee-709c3f887808.png"
          alt="Contemporary multi-level residential and commercial-grade architectural roof structure"
          className="hero-house-img"
          decoding="async"
        />
      </picture>
    </section>
  );
};
