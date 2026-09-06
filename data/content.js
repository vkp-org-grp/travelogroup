import { site } from '@/data/site';

export const whyUs = [
  {
    title: 'Seamless group coordination',
    body: 'One group PNR, one point of contact, and seats held together across every leg — even on connecting itineraries.',
  },
  {
    title: 'Flexible early reservations',
    body: 'Lock in a seat block with a deposit and finalize the passenger list closer to departure.',
  },
  {
    title: 'Instant booking by phone',
    body: `Call ${site.phone} and a group specialist checks live availability across airlines while you're on the line.`,
  },
  {
    title: 'Easy group fare requests',
    body: 'Share your route, dates, and headcount once — we come back with a fare, not a form to keep filling out.',
  },
  {
    title: '24/7 contact support',
    body: 'Schedule changes and last-minute questions get a real answer any time, not a support ticket queue.',
  },
];

export const stats = [
  { value: site.minGroupSize, suffix: '+', label: 'Minimum group size' },
  { text: 'Access', label: 'To major Airlines' },
  { value: 24, suffix: '/7', label: 'Phone desk hours' },
  { value: 96, suffix: '%', label: 'Groups seated together' },
];

export const testimonials = [
  {
    name: 'Ethan Miller',
    role: 'Group traveler',
    avatar: 'https://airlinesgroupbookings.com/wp-content/uploads/2025/09/20240827103312.webp',
    quote:
      'Booking group flights used to be stressful. This team handled the fare, the seating, and the coordination without back-and-forth.',
  },
  {
    name: 'Sophia Bennett',
    role: 'Family reunion organizer',
    avatar: 'https://airlinesgroupbookings.com/wp-content/uploads/2022/03/img5.jpeg',
    quote:
      'We booked for a family reunion and the process was fast and clear. Every option was explained before we committed.',
  },
  {
    name: 'Daniel Ruiz',
    role: 'School trip coordinator',
    avatar: 'https://airlinesgroupbookings.com/wp-content/uploads/2022/03/cropped-img6.jpeg',
    quote:
      'I manage school trips every year. This was the easiest one yet — 42 seats held together, names finalized later.',
  },
  {
    name: 'Jackson Reid',
    role: 'Corporate travel lead',
    avatar: 'https://airlinesgroupbookings.com/wp-content/uploads/2022/03/img4.jpeg',
    quote:
      'A schedule change came up last minute and they handled the rebooking for the whole team without us losing a seat.',
  },
  {
    name: 'Madison Parker',
    role: 'Sports team manager',
    avatar: 'https://airlinesgroupbookings.com/wp-content/uploads/2022/03/img1.jpeg',
    quote:
      'Our team had overlapping schedules to coordinate. They matched everything and kept us within budget.',
  },
];

export const homeFaqs = [
  {
    q: 'How many passengers count as a group?',
    a: `Most airlines set the group threshold at ${site.minGroupSize} or more passengers traveling on the same itinerary. Below that, standard individual fares usually work out cheaper.`,
  },
  {
    q: 'Do we need all passenger names to get a quote?',
    a: 'No. A quote only needs the route, dates, and headcount. Names are typically needed closer to departure once the fare is confirmed and a deposit holds the seat block.',
  },
  {
    q: 'Can the group be seated together?',
    a: 'Seating together across the full group is the standard request on every group booking we handle, including on connecting flights where possible.',
  },
  {
    q: 'What happens if the airline changes the schedule?',
    a: 'Our group desk is notified directly by the airline and handles rebooking for the whole party, so individual passengers are not left to sort it out on their own.',
  },
  {
    q: 'Is there a deposit required to hold group seats?',
    a: 'Most group fares are held with a deposit while the final passenger count and names are confirmed. The exact amount depends on the airline and route.',
  },
];
