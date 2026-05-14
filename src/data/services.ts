import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServiceStat {
  display: string;
  label: string;
}

export interface ServiceData {
  slug: string;
  label: string;
  title: string;
  titleAccent: string;
  heroImage: string;
  tagline: string;
  intro: string[];
  bodyImage: string;
  stats: ServiceStat[];
  features: { title: string; body: string }[];
  ctaHeading: string;
  ctaPoints: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'tree-removal',
    label: 'Professional Service',
    title: 'Tree',
    titleAccent: 'Removal',
    heroImage: '/tree-removal-nwi.png',
    tagline: 'Safe. Efficient. Enterprise-Level.',
    intro: [
      "When a tree needs to come down, there is no room for error. Walls Tree Service brings high-capacity cranes, specialized rigging, and ISA-certified arborists to remove trees of any size — safely and completely.",
      "From single-tree removals in tight suburban yards to full commercial land clearing, our crews execute every job with precision planning, zero property damage, and complete cleanup included.",
    ],
    bodyImage: '/tree-removal-nwi.png',
    stats: [
      { display: '20+', label: 'Years Removing Trees' },
      { display: '5,000+', label: 'Trees Removed' },
      { display: '100%', label: 'Licensed & Insured' },
      { display: '24/7', label: 'Emergency Available' },
    ],
    features: [
      { title: 'Crane-Assisted Removal', body: 'We deploy heavy-lift cranes for trees that cannot be felled conventionally — near homes, power lines, or in tight spaces.' },
      { title: 'Section-by-Section Dismantling', body: 'Large trees are taken down piece by piece from the top, ensuring complete control and zero collateral damage.' },
      { title: 'Full Property Protection', body: 'Ground mats, rigging, and strategic cut planning protect your lawn and structures before a single saw starts.' },
      { title: 'Complete Debris Removal', body: 'Every branch, log, and chip is hauled off your property. We leave your yard cleaner than we found it.' },
    ],
    ctaHeading: 'Get Your Free Tree Removal Estimate',
    ctaPoints: [
      'Free on-site estimates — no obligation',
      'Same-week scheduling on most jobs',
      'Stump grinding available as an add-on',
      'Fully licensed, insured & ISA certified',
      '24/7 emergency removal available',
    ],
  },
  {
    slug: 'tree-pruning-trimming',
    label: 'Arborist Service',
    title: 'Pruning &',
    titleAccent: 'Trimming',
    heroImage: '/wallstreegallery12.jpg',
    tagline: 'Healthier Trees. Better Structure. Safer Property.',
    intro: [
      "Regular pruning isn't just about aesthetics — it's essential tree health care. Our ISA-certified arborists assess each tree's structure, growth patterns, and hazard potential before making any cuts.",
      "We remove dead, diseased, and crossing branches to improve airflow, light penetration, and long-term vitality. The result is a stronger, safer, more beautiful tree.",
    ],
    bodyImage: '/tree-pruning-nwi.png',
    stats: [
      { display: '20+', label: 'Years of Experience' },
      { display: 'ANSI', label: 'A300 Standards' },
      { display: 'ISA', label: 'Certified Arborists' },
      { display: '100%', label: 'Licensed & Insured' },
    ],
    features: [
      { title: 'Crown Thinning', body: 'Selective removal of interior branches to reduce wind resistance and improve light and air movement through the canopy.' },
      { title: 'Deadwood Removal', body: 'Removing dead and dying branches eliminates fall hazards and prevents the spread of decay and disease.' },
      { title: 'Structural Pruning', body: 'Early pruning of young trees to establish strong architecture and reduce the need for costly corrective work later.' },
      { title: 'Clearance Pruning', body: 'Trimming branches that encroach on buildings, power lines, driveways, or sight lines for safety and compliance.' },
    ],
    ctaHeading: 'Schedule a Pruning Consultation',
    ctaPoints: [
      'Free estimates for all pruning work',
      'ANSI A300 pruning standards followed',
      'ISA-certified arborists on every job',
      'Improves tree health and longevity',
      'Reduces storm damage risk significantly',
    ],
  },
  {
    slug: 'debris-cleanup',
    label: 'Property Service',
    title: 'Debris',
    titleAccent: 'Cleanup',
    heroImage: '/wallstreegallery.png',
    tagline: 'Clean Property. Peace of Mind.',
    intro: [
      "After a storm, a tree job, or years of natural accumulation, debris left on your property can be a safety hazard and an eyesore. Walls Tree Service provides thorough, efficient debris removal for residential and commercial properties.",
      "We haul away fallen branches, brush, wood chips, and storm debris — leaving your property clear, clean, and ready to use.",
    ],
    bodyImage: '/wallstreegallery13.jpg',
    stats: [
      { display: '24/7', label: 'Storm Response' },
      { display: '100%', label: 'Licensed & Insured' },
      { display: '20+', label: 'Years Experience' },
      { display: 'FREE', label: 'Cleanup w/ Service' },
    ],
    features: [
      { title: 'Storm Debris Removal', body: 'Fast response after hurricanes, ice storms, and high-wind events. We clear fallen limbs, uprooted trees, and scattered debris.' },
      { title: 'Brush & Branch Hauling', body: 'Piles of branches, trimmings, and brush from DIY yard work or previous service visits cleared and hauled efficiently.' },
      { title: 'Wood Chip Removal', body: 'Excess wood chips and mulch from grinding operations removed from your property or redistributed as requested.' },
      { title: 'Commercial Lot Clearing', body: 'Large-scale debris clearing for commercial properties, construction sites, and land development projects.' },
    ],
    ctaHeading: 'Request Debris Cleanup Today',
    ctaPoints: [
      'Free estimates with no obligation',
      'Standalone cleanup — no other work required',
      'Residential and commercial properties',
      '24/7 post-storm emergency response',
      'Complete haul-away included',
    ],
  },
  {
    slug: 'danger-tree-removal',
    label: 'Hazard Assessment',
    title: 'Danger Tree',
    titleAccent: 'Removal',
    heroImage: '/wallstreegallery14.jpg',
    tagline: "Don't Wait. Danger Trees Cost Lives.",
    intro: [
      "A danger tree is any tree at imminent risk of failure — due to disease, storm damage, root problems, or hidden structural defects. The consequences of inaction can be catastrophic.",
      "Our ISA-certified arborists are trained to identify danger trees that look healthy on the outside and execute complex removals safely, even in the most challenging access conditions.",
    ],
    bodyImage: '/wallstreegallery11.jpg',
    stats: [
      { display: '24/7', label: 'Emergency Response' },
      { display: 'ISA', label: 'Certified Arborists' },
      { display: '100%', label: 'Licensed & Insured' },
      { display: '20+', label: 'Years Experience' },
    ],
    features: [
      { title: 'Hazard Assessment', body: 'Thorough on-site inspection evaluating root stability, trunk integrity, canopy condition, and proximity to structures.' },
      { title: 'Complex Access Removal', body: 'We remove danger trees in confined spaces, steep terrain, and tight urban settings using cranes, ropes, and specialized rigging.' },
      { title: 'Disease & Decay Analysis', body: 'We identify internal rot, fungal infection, and pest damage that compromise a tree from within — before failure occurs.' },
      { title: 'Insurance Documentation', body: 'Written hazard assessments and photo documentation to support insurance claims and liability protection.' },
    ],
    ctaHeading: 'Do You Have a Danger Tree?',
    ctaPoints: [
      'Free on-site hazard assessment',
      'Same-day response for urgent situations',
      'Written reports for insurance claims',
      'Cranes & specialized rigging on standby',
      'ISA-certified arborists assess every tree',
    ],
  },
  {
    slug: 'emergency',
    label: '24/7 Response',
    title: '24/7',
    titleAccent: 'Emergency',
    heroImage: '/wallstreegallery5.jpeg',
    tagline: "We Answer. Every Call. Every Night.",
    intro: [
      "When a storm rolls through at 3 AM and a tree comes down on your house, you don't need a voicemail — you need a crew. Walls Tree Service maintains 24/7 emergency dispatch, 365 days a year.",
      "Our emergency teams arrive with full equipment ready to make the scene safe, remove fallen trees, tarp exposed structures, and begin cleanup — all in a single response.",
    ],
    bodyImage: '/clean-up-2.png',
    stats: [
      { display: '24/7', label: '365 Days a Year' },
      { display: '1–2hr', label: 'Avg. Response Time' },
      { display: '20+', label: 'Years Experience' },
      { display: '100%', label: 'Licensed & Insured' },
    ],
    features: [
      { title: 'Rapid Dispatch', body: 'Emergency crews are on standby around the clock. We typically arrive within 1–2 hours of your call, day or night.' },
      { title: 'Structure Tarping', body: 'When a tree damages your roof or walls, we tarp exposed areas immediately to prevent further interior damage from rain.' },
      { title: 'Road & Driveway Clearing', body: 'Fallen trees blocking roads, driveways, or access routes cleared quickly so you and emergency services can get through.' },
      { title: 'Full Emergency Cleanup', body: "We don't just remove the tree — we clear all debris and leave your property secured before we leave the scene." },
    ],
    ctaHeading: 'Tree Emergency? Call Now.',
    ctaPoints: [
      'Live dispatch 24/7 — no voicemail',
      'Crews arrive in 1–2 hours on average',
      'Roof tarping included when needed',
      'Road & driveway clearing available',
      'Full scene cleanup before we leave',
    ],
  },
  {
    slug: 'cabling-bracing',
    label: 'Structural Support',
    title: 'Cabling &',
    titleAccent: 'Bracing',
    heroImage: '/wallstreebefore.jpg',
    tagline: 'Preserve the Trees You Love.',
    intro: [
      "Not every compromised tree needs to come down. Cabling and bracing is a proven method of extending the life of structurally weak trees by providing supplemental support to vulnerable branches and trunks.",
      "Our certified arborists assess each tree individually to determine whether cabling, bracing, or a combination is the right solution — and install all hardware to ANSI A300 standards.",
    ],
    bodyImage: '/wallstreegalleryafter.jpg',
    stats: [
      { display: 'ANSI', label: 'A300 Standards' },
      { display: 'ISA', label: 'Certified Install' },
      { display: '10+', label: 'Yr System Lifespan' },
      { display: '100%', label: 'Licensed & Insured' },
    ],
    features: [
      { title: 'High-Strength Steel Cabling', body: 'Flexible cables installed in the upper canopy to reduce load on co-dominant stems and weak branch unions.' },
      { title: 'Rigid Bracing Rods', body: 'Threaded steel rods installed through cracks and splits to provide reinforcement and prevent further spreading.' },
      { title: 'Multi-Trunk Support Systems', body: 'Custom cable configurations for trees with multiple leaders or wide-spreading crown structures prone to failure.' },
      { title: 'Annual Inspection Program', body: 'Cabling systems require periodic inspection and adjustment. We offer annual follow-up visits to ensure continued effectiveness.' },
    ],
    ctaHeading: 'Protect Your Trees Before It\'s Too Late',
    ctaPoints: [
      'Free assessment to determine if cabling is right',
      'ANSI A300 installation standards',
      'Extends the life of valued trees by years',
      'Annual inspection program available',
      'ISA-certified arborists handle every install',
    ],
  },
  {
    slug: 'tree-inspection',
    label: 'Arborist Consultation',
    title: 'Tree Inspection',
    titleAccent: '+ More',
    heroImage: '/wallstreegallery9.jpg',
    tagline: 'Know Before You Act.',
    intro: [
      "A professional tree inspection by an ISA-certified arborist is the foundation of sound tree management. Whether you're buying a property, concerned about a specific tree, or building a long-term care plan, expert eyes make all the difference.",
      "We provide written inspection reports, photographic documentation, and clear recommendations — everything you need to make informed decisions about your trees.",
    ],
    bodyImage: '/wallstreegallery10.jpg',
    stats: [
      { display: 'ISA', label: 'Certified Arborists' },
      { display: '20+', label: 'Years Experience' },
      { display: '100%', label: 'Licensed & Insured' },
      { display: 'FREE', label: 'Initial Consultation' },
    ],
    features: [
      { title: 'Full Tree Health Assessment', body: 'Visual and diagnostic evaluation of overall tree health including canopy density, branch structure, and signs of disease or pest activity.' },
      { title: 'Root Zone Evaluation', body: 'Assessment of soil compaction, root damage, girdling roots, and root flare condition that affect long-term stability.' },
      { title: 'Written Arborist Report', body: 'Formal written documentation of findings, risk ratings, and recommended treatments — suitable for insurance, legal, or real estate purposes.' },
      { title: 'Custom Tree Care Plans', body: 'Long-term maintenance plans tailored to your property, specifying pruning cycles, treatments, and monitoring schedules.' },
    ],
    ctaHeading: 'Book Your Tree Inspection Today',
    ctaPoints: [
      'ISA-certified arborist conducts every inspection',
      'Written report provided after every assessment',
      'Pre-purchase property inspections available',
      'Insurance & legal documentation accepted',
      'Free initial consultation — no obligation',
    ],
  },
];

export const SERVICE_NAV = [
  { label: 'Tree Removal',         slug: 'tree-removal',          navDesc: 'Safe removal of any size tree with crane & rigging' },
  { label: 'Pruning & Trimming',   slug: 'tree-pruning-trimming', navDesc: 'ISA-certified arborist pruning for health & structure' },
  { label: 'Debris Cleanup',       slug: 'debris-cleanup',        navDesc: 'Full haul-away of storm debris and yard waste' },
  { label: 'Danger Tree Removal',  slug: 'danger-tree-removal',   navDesc: 'Hazard assessment & complex risk-tree extraction' },
  { label: '24/7 Emergency',       slug: 'emergency',             navDesc: '1–2 hr response, day or night, 365 days a year' },
  { label: 'Cabling & Bracing',    slug: 'cabling-bracing',       navDesc: 'Structural support to preserve and protect valued trees' },
  { label: 'Tree Inspection',      slug: 'tree-inspection',       navDesc: 'Written arborist reports for insurance, legal & real estate' },
];
