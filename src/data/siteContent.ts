export interface CompanyPlaceholders {
  companyName: string;
  shortBrandLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  emailDisplay: string;
  emailHref: string;
  addressPlaceholder: string;
  serviceAreaPlaceholder: string;
  hoursPlaceholder: string;
  licensePlaceholder: string;
}

/**
 * Centralized Business Placeholders.
 * Update these fields with verified business details before publishing live.
 */
export const COMPANY_INFO: CompanyPlaceholders = {
  companyName: '[Company Name] Roofing',
  shortBrandLabel: '[COMPANY NAME]',
  phoneDisplay: '(555) 000-0000 [Phone Placeholder]',
  phoneHref: 'tel:+15550000000',
  emailDisplay: 'estimates@your-roofing-company.example',
  emailHref: 'mailto:estimates@your-roofing-company.example',
  addressPlaceholder: '[Street Address, Suite #, City, State ZIP — Location Placeholder]',
  serviceAreaPlaceholder: '[Primary City, Metro Area & Surrounding Communities — Service Area Placeholder]',
  hoursPlaceholder: '[Mon–Fri: 8:00 AM – 6:00 PM | Sat: By Appointment — Hours Placeholder]',
  licensePlaceholder: '[State Roofing Contractor License & Insurance Info Placeholder]',
};

export type ServiceCategory = 'All' | 'Residential' | 'Commercial' | 'Repairs & Exterior';

export interface RoofingService {
  id: string;
  number: string;
  title: string;
  formValue: string;
  category: Exclude<ServiceCategory, 'All'>;
  scopeBadge: string;
  summary: string;
  highlights: string[];
  imageWebp: string;
  imageJpg: string;
}

export const ROOFING_SERVICES: RoofingService[] = [
  {
    id: 'roof-installation',
    number: '01',
    title: 'Roof Installation',
    formValue: 'Roof Installation',
    category: 'Residential',
    scopeBadge: 'New Construction & Additions',
    summary:
      'Complete roofing installations engineered for newly framed homes, custom residential builds, and structural additions—combining balanced deck ventilation, synthetic underlayments, and watertight flashing.',
    highlights: [
      'Architectural asphalt shingle, standing seam metal, and slate roof assemblies',
      'Code-aligned ice-and-water shield, drip edge, and intake-to-ridge airflow balance',
      'Coordinated scheduling with builders, architects, and property owners',
    ],
    imageWebp: '/images/projects/standing-seam.webp',
    imageJpg: '/images/projects/standing-seam.jpg',
  },
  {
    id: 'roof-replacement',
    number: '02',
    title: 'Roof Replacement',
    formValue: 'Roof Replacement',
    category: 'Residential',
    scopeBadge: 'Full Tear-Off & Re-Roofing',
    summary:
      'Full roof system replacement when aging shingles or worn membranes reach the end of their service life, starting right at the bare structural decking for long-term weather protection.',
    highlights: [
      'Complete removal of worn roofing layers down to structural sheathing',
      'Thorough wood deck inspection and replacement of compromised panels',
      'New valleys, step flashing, pipe boots, ridge vents, and magnetic nail cleanup',
    ],
    imageWebp: '/images/projects/architectural-shingle.webp',
    imageJpg: '/images/projects/architectural-shingle.jpg',
  },
  {
    id: 'roof-repairs',
    number: '03',
    title: 'Roof Repairs',
    formValue: 'Roof Repairs',
    category: 'Repairs & Exterior',
    scopeBadge: 'Leak Diagnostics & Restoration',
    summary:
      'Targeted diagnostics and durable roof repairs designed to resolve active leaks, cracked vent collars, lifted shingles, skylight seepage, and worn chimney counter-flashing before moisture spreads.',
    highlights: [
      'Source-traced moisture and penetration diagnostics across roof planes',
      'Shingle, slate, metal seam, flashing, and vent boot repairs matched to existing materials',
      'Honest guidance when a focused repair can extend your current roof’s life',
    ],
    imageWebp: '/images/projects/roof-inspection.webp',
    imageJpg: '/images/projects/roof-inspection.jpg',
  },
  {
    id: 'storm-damage-repairs',
    number: '04',
    title: 'Storm Damage Repairs',
    formValue: 'Storm Damage Repairs',
    category: 'Repairs & Exterior',
    scopeBadge: 'Wind, Hail & Weather Recovery',
    summary:
      'Prompt post-storm stabilization, protective tarping when needed, detailed wind and hail surface assessments, and permanent structural restoration to return your roof envelope to full integrity.',
    highlights: [
      'Protective temporary weatherproofing to help prevent secondary interior water intrusion',
      'Clear photographic condition reports documenting hail impact, creased shingles, and wind uplift',
      'Complete structural restoration of damaged roof slopes, ridge caps, vents, and trim',
    ],
    imageWebp: '/images/projects/storm-restoration.webp',
    imageJpg: '/images/projects/storm-restoration.jpg',
  },
  {
    id: 'roof-inspections',
    number: '05',
    title: 'Roof Inspections',
    formValue: 'Roof Inspections',
    category: 'Repairs & Exterior',
    scopeBadge: 'Condition Reports & Maintenance',
    summary:
      'Methodical multi-point evaluations covering exterior roof coverings, valleys, penetrations, parapet walls, gutters, and accessible attic ventilation—ideal for seasonal upkeep or real-estate due diligence.',
    highlights: [
      'Surface-by-surface review of wear patterns, granule loss, seams, and fastener integrity',
      'Flashing, skylight, chimney, drainage, and attic airflow assessment',
      'Plain-language written summary with clear photos and prioritized recommendations',
    ],
    imageWebp: '/images/projects/roof-inspection.webp',
    imageJpg: '/images/projects/roof-inspection.jpg',
  },
  {
    id: 'commercial-roofing',
    number: '06',
    title: 'Commercial Roofing',
    formValue: 'Commercial Roofing',
    category: 'Commercial',
    scopeBadge: 'Flat, Low-Slope & Metal Systems',
    summary:
      'Dependable roofing installations, replacements, leak repairs, and preventative maintenance plans tailored for offices, retail centers, warehouses, multi-family buildings, and commercial facilities.',
    highlights: [
      'TPO, EPDM, modified bitumen, and architectural standing seam metal roof systems',
      'Custom sheet-metal parapet coping, rooftop curb flashing, and scupper drainage',
      'Phased jobsite logistics planned to minimize disruption to tenants and daily operations',
    ],
    imageWebp: '/images/projects/commercial-tpo.webp',
    imageJpg: '/images/projects/commercial-tpo.jpg',
  },
  {
    id: 'gutter-services',
    number: '07',
    title: 'Gutter Services',
    formValue: 'Gutter Services',
    category: 'Repairs & Exterior',
    scopeBadge: 'Seamless Gutters & Roofline Drainage',
    summary:
      'Proper roof protection continues at the eaves. We install and service seamless gutters, downspouts, drip edges, and leaf protection systems to channel roof runoff safely away from fascia, siding, and foundations.',
    highlights: [
      'Custom-measured seamless K-style and half-round gutter installations',
      'Downspout sizing, mitered corners, hidden hangers, and gutter guard options',
      'Fascia board and soffit edge evaluation during roofline drainage upgrades',
    ],
    imageWebp: '/images/projects/seamless-gutters.webp',
    imageJpg: '/images/projects/seamless-gutters.jpg',
  },
];

export interface ValuePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export const WHY_CHOOSE_US_PILLARS: ValuePillar[] = [
  {
    number: '01',
    title: 'Quality Workmanship',
    subtitle: 'Precision at Every Flashing, Valley & Ridge',
    description:
      'A roof is an integrated weather-defense system, not merely its outer layer. Every installation and repair follows disciplined fastening patterns, clean metal flashing geometry, and balanced attic ventilation.',
    points: [
      'Attention to vulnerable transitions: valleys, dormers, skylights, and chimneys',
      'Proper deck preparation and moisture barrier layering before final surfacing',
      'Thorough site protection and magnetic sweep cleanup upon completion',
    ],
  },
  {
    number: '02',
    title: 'Dependable Service',
    subtitle: 'Organized Scheduling & Jobsite Care',
    description:
      'From showing up on schedule for your initial evaluation to protecting driveways, landscaping, and building entrances during active work, we treat every residential and commercial property with respect.',
    points: [
      'Realistic scheduling windows communicated before materials arrive on site',
      'Protective tarps and organized staging to safeguard surrounding grounds',
      'Dedicated final walkthrough to verify every detail meets the agreed scope',
    ],
  },
  {
    number: '03',
    title: 'Quality Materials',
    subtitle: 'Proven Components Built for Weather Exposure',
    description:
      'We pair durable primary roof coverings—architectural shingles, standing seam metal, slate, and commercial single-ply membranes—with matching starter strips, high-grade underlayments, and corrosion-resistant fasteners.',
    points: [
      'Complete system components matched for compatibility and weather resistance',
      'Material profiles selected to suit roof pitch, climate demands, and architecture',
      'Manufacturer product specifications shared transparently in your written proposal',
    ],
  },
  {
    number: '04',
    title: 'Clear Communication',
    subtitle: 'Straightforward Proposals Without Pressure',
    description:
      'Roofing decisions are easier when you can see exactly what is happening overhead. We provide clear photo findings, itemized written scopes, and direct answers at every stage of your project.',
    points: [
      'Honest distinction between urgent leak issues, routine upkeep, and full replacement',
      'Written, itemized estimates explaining materials, preparation, and project steps',
      'Direct point-of-contact updates before, during, and after your roofing work',
    ],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  deliverable: string;
}

export const OUR_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Request an Estimate',
    summary:
      'Reach out through our online estimate form, phone placeholder link, or email with your property location and the roofing service you need. We coordinate a convenient appointment time for your home or commercial building.',
    deliverable: 'Prompt scheduling & confirmation of property details',
  },
  {
    step: '02',
    title: 'Inspection',
    summary:
      'We evaluate the roof surface, flashings, penetrations, eaves, gutters, drainage paths, and accessible structural decking, capturing clear photographs so you have an accurate view of current roof conditions.',
    deliverable: 'On-site roof evaluation & photo-documented findings',
  },
  {
    step: '03',
    title: 'Project Proposal',
    summary:
      'You receive a clear, itemized written proposal outlining recommended repair or replacement options, material specifications, preparation procedures, estimated timeline, and transparent pricing.',
    deliverable: 'Written scope of work, material options & clear pricing',
  },
  {
    step: '04',
    title: 'Project Completion',
    summary:
      'Once approved, our team protects surrounding landscaping, completes your roofing work methodically, performs thorough debris and magnetic nail cleanup, and reviews the finished roof with you.',
    deliverable: 'Completed roofing work, full site cleanup & final walkthrough',
  },
];

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Repairs & Gutters';
  systemType: string;
  locationLabel: string;
  imageWebp: string;
  imageJpg: string;
  alt: string;
  description: string;
  scopeHighlights: string[];
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'standing-seam-residence',
    title: 'Standing Seam Metal Roof Installation',
    category: 'Residential',
    systemType: 'Architectural Standing Seam Metal',
    locationLabel: '[Residential Property — Location Placeholder]',
    imageWebp: '/images/projects/standing-seam.webp',
    imageJpg: '/images/projects/standing-seam.jpg',
    alt: 'Contemporary two-story limestone residence featuring a matte charcoal standing seam metal roof under a clear blue sky',
    description:
      'Concealed-fastener matte charcoal standing seam metal roof assembly installed over high-temperature synthetic underlayment, paired with custom eave drip edge and vented timber soffit transitions.',
    scopeHighlights: [
      'Vertical lock-seam metal panels with concealed clip fastening',
      'High-temp ice-and-water membrane along eaves, valleys, and penetrations',
      'Custom ridge cap ventilation and precision fascia trim integration',
    ],
  },
  {
    id: 'architectural-shingle-replacement',
    title: 'Dimensional Shingle & Copper Flashing Replacement',
    category: 'Residential',
    systemType: 'Architectural Shingle Roof Replacement',
    locationLabel: '[Residential Estate — Location Placeholder]',
    imageWebp: '/images/projects/architectural-shingle.webp',
    imageJpg: '/images/projects/architectural-shingle.jpg',
    alt: 'Upscale stone home with newly replaced charcoal architectural asphalt shingle roof and copper valley and dormer flashing',
    description:
      'Complete tear-off and replacement featuring heavy-profile charcoal architectural shingles, open-cut copper valley flashing, masonry chimney counter-flashing, and continuous ridge ventilation.',
    scopeHighlights: [
      'Full tear-off to bare sheathing with structural deck inspection',
      'Custom-formed copper open valleys, bay-window accent roof, and chimney step flashing',
      'Balanced soffit-to-ridge attic airflow and complete magnetic grounds sweep',
    ],
  },
  {
    id: 'commercial-tpo-membrane',
    title: 'Commercial Reflective TPO Flat Roof System',
    category: 'Commercial',
    systemType: 'Single-Ply TPO Membrane & Parapet Coping',
    locationLabel: '[Commercial Facility — Location Placeholder]',
    imageWebp: '/images/projects/commercial-tpo.webp',
    imageJpg: '/images/projects/commercial-tpo.jpg',
    alt: 'Commercial building flat roof with white reflective TPO membrane, dark bronze parapet coping, and overflow scuppers',
    description:
      'Low-slope commercial roof installation utilizing white heat-welded TPO membrane over tapered rigid insulation, finished with custom-fabricated dark bronze parapet cap metal and through-wall scuppers.',
    scopeHighlights: [
      'Heat-welded reflective TPO seams engineered for ponding-water resistance',
      'Tapered insulation layout directing positive drainage to perimeter scuppers',
      'Shop-formed architectural sheet-metal parapet coping and mechanical curb flashings',
    ],
  },
  {
    id: 'steep-slope-storm-restoration',
    title: 'Steep-Slope Storm & Skylight Restoration',
    category: 'Repairs & Gutters',
    systemType: 'Storm Damage Repair & Flashing Upgrade',
    locationLabel: '[Residential Home — Location Placeholder]',
    imageWebp: '/images/projects/storm-restoration.webp',
    imageJpg: '/images/projects/storm-restoration.jpg',
    alt: 'Restored steep-slope gabled residential roof with multi-tone architectural shingles, metal valley, and flashed skylight',
    description:
      'Post-storm restoration addressing wind-damaged gable slopes and skylight perimeter flashing, integrating heavy-duty metal valley liners, ice-barrier underlayment, and matching dimensional shingles.',
    scopeHighlights: [
      'Documented wind and hail slope inspection prior to full weatherproofing restoration',
      'Upgraded pre-finished metal valley channel and factory skylight flashing kit',
      'Reinforced starter course and high-wind six-nail fastening pattern along rakes and eaves',
    ],
  },
  {
    id: 'seamless-gutter-drainage',
    title: 'Seamless Bronze Gutters & Eave Drainage Upgrade',
    category: 'Repairs & Gutters',
    systemType: 'Seamless Gutter & Downspout System',
    locationLabel: '[Stone Residence — Location Placeholder]',
    imageWebp: '/images/projects/seamless-gutters.webp',
    imageJpg: '/images/projects/seamless-gutters.jpg',
    alt: 'Close-up of pitched natural slate roof edge meeting newly installed dark bronze seamless K-style gutters and downspout',
    description:
      'Custom-measured dark bronze seamless aluminum K-style gutter system with heavy-duty hidden hangers, precision-sealed corner miters, and high-capacity rectangular downspouts.',
    scopeHighlights: [
      'Continuous run lengths custom-formed to match eave geometry without mid-span seams',
      'Heavy-gauge hidden bracket hangers pitched accurately toward downspout outlets',
      'Coordinated drip-edge alignment protecting vented hardwood soffits and stonework',
    ],
  },
  {
    id: 'diagnostic-roof-inspection',
    title: 'Comprehensive Roof & Ridge Flashing Inspection',
    category: 'Repairs & Gutters',
    systemType: 'Multi-Point Roof Condition Evaluation',
    locationLabel: '[Service Area Property — Location Placeholder]',
    imageWebp: '/images/projects/roof-inspection.webp',
    imageJpg: '/images/projects/roof-inspection.jpg',
    alt: 'Roofing specialist in safety harness inspecting metal ridge flashing and architectural shingles with digital tablet',
    description:
      'Detailed visual and tactile inspection of ridge cap metal, shingle granule retention, fastener seals, and roof-to-wall transitions, compiled into an itemized condition report.',
    scopeHighlights: [
      'Harness-secured close-range assessment of ridges, hips, valleys, and vents',
      'Digital photo documentation pinpointing preventive maintenance items early',
      'Clear written findings distinguishing immediate repairs from routine upkeep',
    ],
  },
];

export interface CustomerTestimonial {
  id: string;
  clientName: string;
  propertyType: 'Residential' | 'Commercial';
  serviceProvided: string;
  location: string;
  reviewText: string;
  dateLabel: string;
  isSessionSubmission?: boolean;
}

/**
 * IMPORTANT: Intentionally empty by default — no customer testimonials are fabricated.
 * Add verified, permissioned client reviews here once collected from real customers.
 */
export const VERIFIED_TESTIMONIALS: CustomerTestimonial[] = [];

export interface ReviewSlotPlaceholder {
  slotLabel: string;
  category: string;
  description: string;
}

export const GENUINE_REVIEW_SLOTS: ReviewSlotPlaceholder[] = [
  {
    slotLabel: '[Verified Homeowner Review Slot #1]',
    category: 'Residential Roof Replacement / Installation',
    description:
      'Reserved exclusively for an authentic, permissioned homeowner review detailing completed residential roofing work. No placeholder quote has been invented.',
  },
  {
    slotLabel: '[Verified Commercial Client Review Slot #2]',
    category: 'Commercial Roofing & Maintenance',
    description:
      'Reserved exclusively for verified feedback from a commercial property owner or facility manager once provided. No fabricated rating or quote is displayed.',
  },
  {
    slotLabel: '[Verified Repair & Storm Client Slot #3]',
    category: 'Roof Repairs, Inspections & Gutters',
    description:
      'Reserved exclusively for genuine customer feedback regarding leak diagnostics, storm damage restoration, roof inspections, or gutter installations.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-estimate',
    question: 'How do I request a free roofing estimate, and what is included?',
    answer:
      'You can request a free estimate using the online form below, or by contacting us via our phone or email links. After reviewing your property location and needs, we schedule an on-site visit to evaluate the roof, discuss material or repair options, and provide a clear, itemized written proposal with no obligation.',
  },
  {
    id: 'faq-repair-vs-replace',
    question: 'How do I know whether my roof needs a targeted repair or a full replacement?',
    answer:
      'When leaks or damage are isolated—such as a cracked pipe boot, displaced flashing around a chimney, or localized wind damage on an otherwise healthy roof—a targeted repair is often the practical choice. When shingles show widespread granule loss, curling, brittle aging across multiple slopes, or recurring deck moisture, a full replacement is typically more cost-effective long term. Our inspection findings show photos of both options so you can decide confidently.',
  },
  {
    id: 'faq-storm-damage',
    question: 'What should I do if wind or hail damages my roof during a storm?',
    answer:
      'First, stay safely on the ground and avoid climbing onto wet or wind-loosened roof surfaces. Note any interior ceiling stains or fallen shingle debris, and contact us for a storm damage inspection. If active water entry is occurring, temporary protective tarping can help limit interior damage while we document roof conditions with clear photos and prepare a permanent repair or replacement scope.',
  },
  {
    id: 'faq-inspection-process',
    question: 'What happens during a professional roof inspection?',
    answer:
      'During an inspection, we examine the primary roof covering (shingles, metal panels, slate, or flat membrane), ridge caps, valleys, step and counter-flashing, plumbing vents, skylights, gutters, downspouts, and accessible attic ventilation or moisture indicators. You receive a straightforward summary of current conditions along with photos of any areas needing attention.',
  },
  {
    id: 'faq-materials',
    question: 'What roofing materials and commercial systems do you work with?',
    answer:
      'For pitched residential properties, we work with dimensional architectural asphalt shingles, standing seam metal roofing, slate, and composite systems, paired with synthetic underlayments and ice-and-water barriers. For flat and low-slope commercial roofs, we service and install single-ply membranes such as TPO and EPDM, modified bitumen, metal roof systems, and custom parapet flashings.',
  },
  {
    id: 'faq-property-protection',
    question: 'How do you protect landscaping, driveways, and daily operations during a roof project?',
    answer:
      'Before tear-off or installation begins, we stage protective tarps over plantings, walkways, and entry areas, establish clear material drop zones, and coordinate parking or building access with homeowners or commercial tenants. At completion, we clear all project debris and run magnetic sweeps across lawns, beds, and driveways to collect stray fasteners.',
  },
  {
    id: 'faq-gutters',
    question: 'Can gutter installation or drainage repairs be combined with roofing work?',
    answer:
      'Yes. Coordinating seamless gutter replacement, downspout routing, fascia inspection, and drip-edge integration alongside roof replacement or eave repairs ensures water sheds cleanly from the roof deck directly into properly pitched gutters without sneaking behind fascia boards.',
  },
  {
    id: 'faq-timeline',
    question: 'How long does a typical roof repair or roof replacement take?',
    answer:
      'Project duration depends on roof size, pitch complexity, material type, decking repairs, and local weather conditions. Focused roof repairs and inspections are often completed within a single visit, while residential replacements and commercial low-slope installations vary by square footage and system specifications. Every written proposal includes an estimated schedule tailored to your property.',
  },
];
