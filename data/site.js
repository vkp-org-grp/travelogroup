export const site = {
  name: 'Travelo Group',
  legalName: 'Global Group Solutions LLC',
  domain: 'travelogroup.com',
  url: 'https://travelogroup.com',

  phone: '+1-888-608-7453',
  phoneHref: 'tel:+18886087453',
  email: 'support@travelogroup.com',
  address: ['11961 Cobble Brook Dr', 'Rancho Cordova, CA 95742'],

  hours: '24/7 phone support',
  minGroupSize: 10,
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Group Bookings',
    href: '/group-booking',
    children: 'airlines', // resolved in Header from data/airlines.js
  },
  {
    label: 'Business Class',
    href: '/business-class',
    children: 'business',
  },
  {
    label: 'Special Deals',
    href: '/deals',
    children: 'deals',
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Cancellation / Refund Policy', href: '/refund-policy' },
    { label: 'Terms & conditions', href: '/terms-condition' },
  ],
};
