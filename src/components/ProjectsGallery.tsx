import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { GALLERY_PROJECTS, GalleryProject } from '../data/siteContent';
import { useInView } from '../hooks/useInView';

type GalleryFilter = 'Featured' | 'All' | 'Residential' | 'Commercial' | 'Repairs & Gutters';

interface ProjectsGalleryProps {
  onRequestSimilarEstimate: (projectTitle: string, category: GalleryProject['category']) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onRequestSimilarEstimate }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [filter, setFilter] = useState<GalleryFilter>('Featured');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const visibleProjects: GalleryProject[] = (() => {
    if (filter === 'Featured') return GALLERY_PROJECTS.slice(0, 3);
    if (filter === 'All') return GALLERY_PROJECTS;
    return GALLERY_PROJECTS.filter((p) => p.category === filter);
  })();

  const mapCategoryToFormService = (project: GalleryProject): string => {
    if (project.category === 'Commercial') return 'Commercial Roofing';
    if (project.id.includes('gutter')) return 'Gutter Services';
    if (project.id.includes('storm')) return 'Storm Damage Repairs';
    if (project.id.includes('inspection')) return 'Roof Inspections';
    if (project.id.includes('replacement')) return 'Roof Replacement';
    return 'Roof Installation';
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="gallery-showcase-section"
      aria-label="Projects Gallery"
    >
      {/* STEP 9 — Exact Split Showcase Layout */}
      <div className="gallery-showcase-wrap">
        <div className="gallery-left-col">
          <div
            className={`editorial-eyebrow rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0s' } as React.CSSProperties}
          >
            COMPLETED WORK SHOWCASE
          </div>

          <h2 className="gallery-showcase-h2">
            {['OUR', 'LATEST', 'Projects'].map((word, idx) => (
              <span key={word} className="gallery-h2-line">
                <span
                  className={`word-in-token editorial-underline ${inView ? 'is-visible' : ''}`}
                  style={
                    {
                      '--word-delay': `${(idx * 0.15).toFixed(2)}s`,
                      '--word-duration': '0.9s',
                    } as React.CSSProperties
                  }
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p
            className={`editorial-lead rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.35s' } as React.CSSProperties}
          >
            Representative residential, commercial, storm-restoration, and seamless gutter scopes.
            Select any card to review full material and weatherproofing details.
          </p>

          <div
            className={`filter-pill-row rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.45s' } as React.CSSProperties}
            role="tablist"
            aria-label="Filter roofing projects"
          >
            {(
              ['Featured', 'All', 'Residential', 'Commercial', 'Repairs & Gutters'] as GalleryFilter[]
            ).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
                className={`surface-pill-btn ${filter === tab ? 'is-active' : ''}`}
              >
                {tab === 'Featured' ? 'Featured (3)' : tab === 'All' ? 'All (6)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right: 3 image cards in a row (aspect-ratio .79, 1s scale(1.05) hover, mobile snap scroll) */}
        <div className="gallery-right-col">
          <div className={`gallery-cards-track ${visibleProjects.length > 3 ? 'is-expanded-grid' : ''}`}>
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className={`gallery-project-item rise-in-card ${inView ? 'is-visible' : ''}`}
                style={
                  {
                    '--card-delay': `${(0.2 + (index % 3) * 0.15).toFixed(2)}s`,
                  } as React.CSSProperties
                }
              >
                <button
                  type="button"
                  className="gallery-image-card"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View project details for ${project.title}`}
                >
                  <picture>
                    <source srcSet={project.imageWebp} type="image/webp" />
                    <img
                      src={project.imageJpg}
                      alt={project.alt}
                      className="gallery-card-img"
                      loading="lazy"
                    />
                  </picture>
                  <span className="gallery-card-badge">{project.category}</span>
                  <span className="gallery-card-inspect-pill">
                    <span>View Scope</span>
                    <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </button>

                <div className="gallery-card-meta">
                  <span className="gallery-system-type">{project.systemType}</span>
                  <h3 className="gallery-card-title">{project.title}</h3>
                  <p className="gallery-card-desc">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Project Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <div className="project-modal-grid">
              <div className="project-modal-media">
                <picture>
                  <source srcSet={selectedProject.imageWebp} type="image/webp" />
                  <img
                    src={selectedProject.imageJpg}
                    alt={selectedProject.alt}
                    className="project-modal-img"
                  />
                </picture>
              </div>

              <div className="project-modal-body">
                <span className="service-scope-tag">{selectedProject.category}</span>
                <h3 id="modal-project-title" className="project-modal-title">
                  {selectedProject.title}
                </h3>
                <p className="project-modal-location">{selectedProject.locationLabel}</p>
                <p className="project-modal-desc">{selectedProject.description}</p>

                <div className="project-modal-highlights">
                  <h4>Roofing Scope Highlights</h4>
                  <ul>
                    {selectedProject.scopeHighlights.map((hl) => (
                      <li key={hl}>
                        <Check size={15} strokeWidth={2.2} aria-hidden="true" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal-actions">
                  <button
                    type="button"
                    className="primary-cobalt-pill"
                    onClick={() => {
                      const mappedService = mapCategoryToFormService(selectedProject);
                      setSelectedProject(null);
                      onRequestSimilarEstimate(mappedService, selectedProject.category);
                    }}
                  >
                    <span>REQUEST SIMILAR ESTIMATE</span>
                    <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
