import React, { useState } from 'react';
import { CheckCircle2, MessageSquarePlus, ShieldAlert } from 'lucide-react';
import {
  CustomerTestimonial,
  GENUINE_REVIEW_SLOTS,
  ROOFING_SERVICES,
  VERIFIED_TESTIMONIALS,
} from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [sessionReviews, setSessionReviews] = useState<CustomerTestimonial[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const [clientName, setClientName] = useState('');
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial'>('Residential');
  const [serviceProvided, setServiceProvided] = useState('Roof Replacement');
  const [location, setLocation] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const allReviews = [...VERIFIED_TESTIMONIALS, ...sessionReviews];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || clientName.trim().length < 2) {
      setFormError('Please enter your name (at least 2 characters).');
      return;
    }
    if (!location.trim()) {
      setFormError('Please include your city or neighborhood.');
      return;
    }
    if (!reviewText.trim() || reviewText.trim().length < 20) {
      setFormError('Please share at least 20 characters describing your completed roofing project.');
      return;
    }

    setFormError('');
    const newEntry: CustomerTestimonial = {
      id: `session-review-${Date.now()}`,
      clientName: clientName.trim(),
      propertyType,
      serviceProvided,
      location: location.trim(),
      reviewText: reviewText.trim(),
      dateLabel: 'Submitted During Current Session (Pending Verification)',
      isSessionSubmission: true,
    };

    setSessionReviews((prev) => [newEntry, ...prev]);
    setClientName('');
    setLocation('');
    setReviewText('');
    setShowReviewForm(false);
    setSubmittedNotice(true);
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="editorial-section testimonials-section"
      aria-label="Customer Testimonials"
    >
      <div className="editorial-split">
        <SectionHeading
          lines={['GENUINE', 'CLIENT', 'Reviews']}
          inView={inView}
          eyebrow="VERIFIED CUSTOMER FEEDBACK"
          description="We publish only real feedback from verified residential homeowners and commercial property clients. No testimonials or star ratings have been fabricated."
        >
          <div
            className={`reviews-action-wrap rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.4s' } as React.CSSProperties}
          >
            <button
              type="button"
              onClick={() => {
                setSubmittedNotice(false);
                setShowReviewForm((prev) => !prev);
              }}
              className="outline-dark-pill"
              aria-expanded={showReviewForm}
            >
              <MessageSquarePlus size={16} strokeWidth={2} aria-hidden="true" />
              <span>{showReviewForm ? 'CLOSE FEEDBACK FORM' : 'SUBMIT A GENUINE REVIEW'}</span>
            </button>
          </div>
        </SectionHeading>

        <div className="editorial-content-col">
          {/* Authenticity Notice */}
          <div
            className={`authenticity-banner rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.18s' } as React.CSSProperties}
          >
            <ShieldAlert size={18} strokeWidth={2} className="authenticity-icon" aria-hidden="true" />
            <div>
              <strong>Authentic Reviews Policy:</strong> Customer reviews are never invented or
              auto-generated. Add verified client feedback in{' '}
              <code>src/data/siteContent.ts</code> (<code>VERIFIED_TESTIMONIALS</code>) or invite
              completed-project clients to submit their experience below.
            </div>
          </div>

          {submittedNotice && (
            <div className="review-success-banner" role="status">
              <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
              <span>
                Thank you for sharing your feedback. Your submission is previewed below as a
                current-session entry awaiting business verification.
              </span>
            </div>
          )}

          {/* Optional Genuine Customer Review Submission Form */}
          {showReviewForm && (
            <form className="genuine-review-form" onSubmit={handleReviewSubmit} noValidate>
              <h3 className="review-form-heading">Share Feedback on a Completed Roofing Project</h3>
              {formError && (
                <div className="inline-form-error" role="alert">
                  {formError}
                </div>
              )}
              <div className="review-form-grid">
                <div className="form-field">
                  <label htmlFor="rev-name">Your Name *</label>
                  <input
                    id="rev-name"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Your full name or initials"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="rev-location">City / Community *</label>
                  <input
                    id="rev-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., [City / Neighborhood]"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="rev-type">Property Type</label>
                  <select
                    id="rev-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as 'Residential' | 'Commercial')}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="rev-service">Service Completed</label>
                  <select
                    id="rev-service"
                    value={serviceProvided}
                    onChange={(e) => setServiceProvided(e.target.value)}
                  >
                    {ROOFING_SERVICES.map((s) => (
                      <option key={s.id} value={s.formValue}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="rev-body">Your Project Experience *</label>
                <textarea
                  id="rev-body"
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Describe the roofing work completed on your property..."
                  required
                />
              </div>
              <div className="review-form-actions">
                <button type="submit" className="primary-cobalt-pill">
                  SUBMIT FEEDBACK FOR VERIFICATION
                </button>
              </div>
            </form>
          )}

          {/* Render Verified / Session Reviews if present */}
          {allReviews.length > 0 && (
            <div className="verified-reviews-grid">
              {allReviews.map((rev) => (
                <article key={rev.id} className="testimonial-card is-live-entry">
                  <div className="testimonial-card-top">
                    <span className="service-scope-tag">
                      {rev.propertyType} · {rev.serviceProvided}
                    </span>
                    <span className="testimonial-date-tag">{rev.dateLabel}</span>
                  </div>
                  <blockquote className="testimonial-quote">“{rev.reviewText}”</blockquote>
                  <footer className="testimonial-author">
                    <strong>{rev.clientName}</strong>
                    <span>{rev.location}</span>
                  </footer>
                </article>
              ))}
            </div>
          )}

          {/* Dedicated Placeholder Slots for Verified Customer Reviews (No Fabricated Quotes) */}
          <div className="review-slots-grid">
            {GENUINE_REVIEW_SLOTS.map((slot, index) => (
              <article
                key={slot.slotLabel}
                className={`testimonial-slot-card rise-in-item ${inView ? 'is-visible' : ''}`}
                style={{ '--rise-delay': `${(0.24 + index * 0.12).toFixed(2)}s` } as React.CSSProperties}
              >
                <span className="slot-status-pill">Awaiting Verified Client Submission</span>
                <h3 className="slot-title">{slot.slotLabel}</h3>
                <span className="slot-category">{slot.category}</span>
                <p className="slot-description">{slot.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
