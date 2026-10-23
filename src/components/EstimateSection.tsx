import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, ROOFING_SERVICES } from '../data/siteContent';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './SectionHeading';

interface EstimateSectionProps {
  preselectedService: string;
}

interface EstimateFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
}

type FormErrors = Partial<Record<keyof EstimateFormData, string>>;

export const EstimateSection: React.FC<EstimateSectionProps> = ({ preselectedService }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  const [formData, setFormData] = useState<EstimateFormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Roof Replacement',
    location: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof EstimateFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<
    (EstimateFormData & { referenceCode: string }) | null
  >(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validateField = (field: keyof EstimateFormData, value: string): string => {
    const trimmed = value.trim();
    switch (field) {
      case 'name':
        if (!trimmed) return 'Please enter your full name.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'phone': {
        if (!trimmed) return 'Please enter a phone number where we can reach you.';
        const digits = trimmed.replace(/\D/g, '');
        if (digits.length < 7 || digits.length > 15) {
          return 'Please enter a valid phone number (7–15 digits).';
        }
        return '';
      }
      case 'email': {
        if (!trimmed) return 'Please enter your email address.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
        return '';
      }
      case 'service':
        if (!trimmed) return 'Please select the roofing service required.';
        return '';
      case 'location':
        if (!trimmed) return 'Please enter the property address, city, or ZIP code.';
        if (trimmed.length < 3) return 'Please provide a recognizable city, street, or postal code.';
        return '';
      case 'details':
        if (!trimmed) return 'Please briefly describe your roofing needs or roof condition.';
        if (trimmed.length < 10) return 'Please include at least a short sentence (10+ characters).';
        return '';
      default:
        return '';
    }
  };

  const validateAll = (data: EstimateFormData): FormErrors => {
    const nextErrors: FormErrors = {};
    (Object.keys(data) as Array<keyof EstimateFormData>).forEach((key) => {
      const msg = validateField(key, data[key]);
      if (msg) nextErrors[key] = msg;
    });
    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as { name: keyof EstimateFormData; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as { name: keyof EstimateFormData; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<keyof EstimateFormData, boolean>> = {
      name: true,
      phone: true,
      email: true,
      service: true,
      location: true,
      details: true,
    };
    setTouched(allTouched);

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      const code = `EST-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedPayload({
        ...formData,
        referenceCode: code,
      });
      setIsSubmitting(false);
    }, 350);
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: preselectedService || 'Roof Replacement',
      location: '',
      details: '',
    });
    setErrors({});
    setTouched({});
  };

  return (
    <section
      id="estimate"
      ref={ref}
      className="editorial-section estimate-section"
      aria-label="Contact and Free Estimate Form"
    >
      <div className="editorial-split">
        <SectionHeading
          lines={['REQUEST', 'A FREE', 'Estimate']}
          inView={inView}
          light={true}
          eyebrow="NO-OBLIGATION CONSULTATION"
          description="Tell us about your residential or commercial roof. We review your request promptly to coordinate an on-site evaluation and written proposal."
        >
          <div
            className={`contact-direct-cards rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.4s' } as React.CSSProperties}
          >
            <a href={COMPANY_INFO.phoneHref} className="contact-glass-row">
              <span className="contact-glass-icon" aria-hidden="true">
                <Phone size={17} strokeWidth={2} />
              </span>
              <span>
                <small>Click-to-Call (Placeholder)</small>
                <strong>{COMPANY_INFO.phoneDisplay}</strong>
              </span>
            </a>

            <a href={COMPANY_INFO.emailHref} className="contact-glass-row">
              <span className="contact-glass-icon" aria-hidden="true">
                <Mail size={17} strokeWidth={2} />
              </span>
              <span>
                <small>Email Inquiries (Placeholder)</small>
                <strong>{COMPANY_INFO.emailDisplay}</strong>
              </span>
            </a>

            <div className="contact-glass-row is-static">
              <span className="contact-glass-icon" aria-hidden="true">
                <MapPin size={17} strokeWidth={2} />
              </span>
              <span>
                <small>Office &amp; Service Region (Placeholder)</small>
                <strong>{COMPANY_INFO.addressPlaceholder}</strong>
              </span>
            </div>

            <div className="contact-glass-row is-static">
              <span className="contact-glass-icon" aria-hidden="true">
                <Clock size={17} strokeWidth={2} />
              </span>
              <span>
                <small>Scheduling Hours (Placeholder)</small>
                <strong>{COMPANY_INFO.hoursPlaceholder}</strong>
              </span>
            </div>
          </div>
        </SectionHeading>

        <div className="editorial-content-col">
          <div
            className={`estimate-form-card rise-in-item ${inView ? 'is-visible' : ''}`}
            style={{ '--rise-delay': '0.24s' } as React.CSSProperties}
          >
            {submittedPayload ? (
              <div className="estimate-success-state" role="status" aria-live="polite">
                <div className="success-badge-circle">
                  <CheckCircle2 size={30} strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="success-ref-pill">Reference #{submittedPayload.referenceCode}</span>
                <h3 className="success-heading">Your Free Estimate Request Has Been Received</h3>
                <p className="success-copy">
                  Thank you, <strong>{submittedPayload.name}</strong>. We have recorded your inquiry
                  for <strong>{submittedPayload.service}</strong> at{' '}
                  <strong>{submittedPayload.location}</strong>. Our team will reach out via{' '}
                  <strong>{submittedPayload.phone}</strong> or{' '}
                  <strong>{submittedPayload.email}</strong> to confirm your inspection window.
                </p>

                <dl className="submitted-summary-list">
                  <div>
                    <dt>Service Requested</dt>
                    <dd>{submittedPayload.service}</dd>
                  </div>
                  <div>
                    <dt>Property Location</dt>
                    <dd>{submittedPayload.location}</dd>
                  </div>
                  <div className="is-full">
                    <dt>Project Notes</dt>
                    <dd>{submittedPayload.details}</dd>
                  </div>
                </dl>

                <div className="success-actions-row">
                  <button type="button" onClick={handleReset} className="primary-cobalt-pill">
                    SUBMIT ANOTHER REQUEST
                  </button>
                  <a href={COMPANY_INFO.phoneHref} className="outline-dark-pill">
                    <Phone size={15} strokeWidth={2} aria-hidden="true" />
                    <span>CALL {COMPANY_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Request a Free Roofing Estimate">
                <div className="estimate-card-header">
                  <h3>Free Roofing Estimate Request</h3>
                  <p>All fields marked with * are required so we can prepare accurately.</p>
                </div>

                <div className="estimate-fields-grid">
                  {/* 1. Name */}
                  <div className="form-field">
                    <label htmlFor="est-name">Full Name *</label>
                    <input
                      id="est-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'err-est-name' : undefined}
                      required
                    />
                    {errors.name && (
                      <span id="err-est-name" className="field-error-msg" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* 2. Phone */}
                  <div className="form-field">
                    <label htmlFor="est-phone">Phone Number *</label>
                    <input
                      id="est-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="(555) 000-0000"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'err-est-phone' : undefined}
                      required
                    />
                    {errors.phone && (
                      <span id="err-est-phone" className="field-error-msg" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* 3. Email */}
                  <div className="form-field">
                    <label htmlFor="est-email">Email Address *</label>
                    <input
                      id="est-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-est-email' : undefined}
                      required
                    />
                    {errors.email && (
                      <span id="err-est-email" className="field-error-msg" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* 4. Service Required */}
                  <div className="form-field">
                    <label htmlFor="est-service">Service Required *</label>
                    <select
                      id="est-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'err-est-service' : undefined}
                      required
                    >
                      {ROOFING_SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.formValue}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="General Consultation / Unsure">
                        Not Sure — Need Roof Evaluation &amp; Advice
                      </option>
                    </select>
                    {errors.service && (
                      <span id="err-est-service" className="field-error-msg" role="alert">
                        {errors.service}
                      </span>
                    )}
                  </div>

                  {/* 5. Property Location */}
                  <div className="form-field is-full-span">
                    <label htmlFor="est-location">Property Location *</label>
                    <input
                      id="est-location"
                      name="location"
                      type="text"
                      autoComplete="street-address"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Street address, neighborhood, or City & ZIP code"
                      aria-invalid={Boolean(errors.location)}
                      aria-describedby={errors.location ? 'err-est-location' : undefined}
                      required
                    />
                    {errors.location && (
                      <span id="err-est-location" className="field-error-msg" role="alert">
                        {errors.location}
                      </span>
                    )}
                  </div>

                  {/* 6. Project Details */}
                  <div className="form-field is-full-span">
                    <label htmlFor="est-details">Project Details *</label>
                    <textarea
                      id="est-details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Share whether the property is residential or commercial, current roof material or leak symptoms, and preferred contact times..."
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? 'err-est-details' : undefined}
                      required
                    />
                    {errors.details && (
                      <span id="err-est-details" className="field-error-msg" role="alert">
                        {errors.details}
                      </span>
                    )}
                  </div>
                </div>

                <div className="estimate-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="primary-cobalt-pill is-large"
                  >
                    <span>{isSubmitting ? 'SENDING REQUEST...' : 'SUBMIT FREE ESTIMATE REQUEST'}</span>
                    <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                  <span className="estimate-privacy-note">
                    No obligation · Written itemized scope following inspection
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
