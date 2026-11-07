/**
 * Single place to change business details, links and integrations.
 * Everything marked TODO is a placeholder to replace before/after launch.
 */
export const site = {
  name: 'QA Tech Labs',
  tagline: 'Learn QA the way it is actually done.',
  description:
    'QA Tech Labs is a free library and live training platform for QA engineers: manual, automation (Playwright + TypeScript), API, database and performance testing, plus AI for testers, interview prep and mock interviews.',
  url: 'https://www.qatechlabs.com',
  email: 'hello@qatechlabs.com', // TODO: confirm mailbox
  founder: 'Karthik Kodati',
  interviewUrl: 'https://interview.qatechlabs.com',

  social: {
    youtube: 'https://www.youtube.com/@qatechlabs', // TODO
    linkedin: 'https://www.linkedin.com/company/qatechlabs', // TODO
    github: 'https://github.com/qatechlabs',
    whatsapp: 'https://wa.me/910000000000', // TODO: real number
  },

  /**
   * Forms. Create a free form at https://formspree.io and paste the endpoint.
   * Until then the form falls back to a mailto: link.
   */
  formEndpoint: '', // e.g. 'https://formspree.io/f/abcdwxyz'

  /**
   * Payments. Create payment links in Razorpay (India) and/or Stripe (global)
   * and paste them per course. Buttons fall back to the contact page when empty.
   */
  payments: {
    currencyNote: 'Prices shown in USD. INR pricing available for India, ask us on WhatsApp.',
  },

  /** Free recordings playlist (YouTube) shown on the Batches page. */
  recordingsUrl: 'https://www.youtube.com/@qatechlabs/playlists', // TODO

  /** Optional analytics (Plausible, GA4, etc.). Leave empty to disable. */
  analyticsScript: '',
};

export const nav = [
  { label: 'Library', href: '/library' },
  { label: 'Courses', href: '/courses' },
  { label: 'Batches', href: '/batches' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Interview Prep', href: site.interviewUrl, external: true },
  { label: 'About', href: '/about' },
];

/** Upcoming live batches. Edit freely; past dates are hidden automatically. */
export const batches = [
  {
    course: 'playwright-typescript-automation',
    title: 'Playwright + TypeScript Automation (Live, Weekday)',
    starts: '2026-11-24',
    schedule: 'Mon to Fri, 7:00 to 8:30 PM IST (8:30 to 10:00 AM EST)',
    duration: '8 weeks',
    mode: 'Live online + recordings',
    seats: 25,
  },
  {
    course: 'manual-testing-foundations',
    title: 'Manual Testing Foundations (Live, Weekend)',
    starts: '2026-11-29',
    schedule: 'Sat and Sun, 10:00 AM to 1:00 PM IST',
    duration: '5 weeks',
    mode: 'Live online + recordings',
    seats: 30,
  },
  {
    course: 'api-testing-postman-playwright',
    title: 'API Testing with Postman and Playwright (Live, Weekend)',
    starts: '2026-12-13',
    schedule: 'Sat and Sun, 6:00 to 8:00 PM IST',
    duration: '4 weeks',
    mode: 'Live online + recordings',
    seats: 25,
  },
];

/** Sample numbers for the animated counters on the home page. Replace with real ones. */
export const stats = [
  { value: 1200, suffix: '+', label: 'Testers trained' },
  { value: 40, suffix: '+', label: 'Hours of free recordings' },
  { value: 18, suffix: '', label: 'Countries' },
  { value: 92, suffix: '%', label: 'Finish with a project on GitHub' },
];

/** Sample testimonials. Replace with real ones as they come in. */
export const testimonials = [
  {
    quote:
      'I had never written a line of code. Eight weeks later I had a Playwright framework on GitHub that I walked through in my interview. Got the offer.',
    name: 'Priya S.',
    role: 'Manual tester to SDET, Hyderabad',
  },
  {
    quote:
      'The real-time project is what sets this apart. We built the app, then tested it. It finally clicked why we test the way we do.',
    name: 'Daniel M.',
    role: 'QA Engineer, Toronto',
  },
  {
    quote:
      'The mock interviews were brutal in the best way. By the real interview I had already answered every question twice.',
    name: 'Aisha R.',
    role: 'Automation Engineer, Dubai',
  },
];
