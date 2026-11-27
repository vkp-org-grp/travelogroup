import AirlineGuideLayout from './AirlineGuideLayout';

// Phrases shown in bold wherever they appear in the body text.
const BOLD = /\b(Frontier Airlines group (?:flight options|flight|travel|bookings|reservations))\b/gi;

const facts = [
  ['Main Hub & Crew Bases', 'Denver, Atlanta, Orlando'],
  ['Alliance', 'None'],
  ['Fleet', 'Operates an all-Airbus A320neo family with an all-economy configuration.'],
];

const benefits = [
  ['Special Group Fares', 'Scroll through the most exclusive Frontier Airlines group flight fares based on your itinerary, group size and destination.'],
  ['Flexible Seating', 'We allow flexibility in updating passenger seat names, making it easier to coordinate seating arrangements for everyone travelling together.'],
  ['Baggage Options', 'For Frontier Airlines group reservations, there are optional carry-on or checked baggage inclusions; however, standard size and weight limits may apply. We provide full guidance for an uninterrupted airport check-in.'],
  ['Convenient Flight Options', 'Travellers can book nonstop routes available between key destinations, or select scheduled connecting itineraries to accommodate your entire travel group.'],
];

const audiences = [
  ['Businesses & Corporates', 'Businesses travelling for meetings, conferences, exhibitions and corporate events can arrange Frontier Airlines group travel through Travelogroup for employees, executives, clients and business partners.'],
  ['Educational Groups', 'Academic institutions and universities planning academic tours, student exchange programmes and educational competitions.'],
  ['Sports & Athletic Tours', 'Teams travelling for a tournament, championship or sporting competition can arrange Frontier Airlines group bookings for players, coaches and support staff to get coordinated flight schedules and assistance.'],
  ['Family & Friends Tours', 'Whether it’s a family reunion, holiday or special celebration, keep your Frontier Airlines group booking well-coordinated throughout the process.'],
  ['Wedding Groups', 'Destination weddings involve guests travelling from different cities, multiple schedules and plenty of arrangements. Travelogroup coordinates Frontier Airlines group flights for wedding guests, keeping flight bookings organised around the celebration dates.'],
  ['Tour Groups & Organizers', 'Planning a domestic tour or international group trip? Travelogroup provides Frontier Airlines group booking support for tour operators and travel organisers, helping coordinate flight arrangements with planned itineraries and travel schedules.'],
  ['Cruise & Vacation Groups', 'Taking your group on a cruise or vacation? Explore Frontier Airlines group flight options at negotiated prices and enjoy flexible seating options as well.'],
  ['Religious & Community Groups', 'For pilgrimages, religious conferences, retreats and community gatherings, Travelogroup coordinates Frontier Airlines group reservations around the group’s destination, travel dates and passenger requirements.'],
];

const faqs = [
  ['1. Is Frontier Airlines a good choice for group travel?', 'Yes. Frontier Airlines offers affordable group fares and flexible baggage options, making it an ideal option. Through Travelogroup, you can explore available group flight options and receive personalized assistance for booking your flights.'],
  ['2. Can passenger names be changed after booking?', 'Yes. Travelogroup allows passenger name changes subject to applicable airline conditions. Changes requested more than 60 days before departure may be permitted without a fee, while requests within 60 days may involve a nominal charge, subject to approval.'],
  ['3. How much deposit is required for a Frontier Airlines group booking?', 'The deposit amount and deadlines rely on the booking requirements and applicable conditions. Our agent will share the payment details and deadlines before confirmation.'],
  ['4. Can I cancel part of my Frontier Airlines group booking?', 'Cancellation requests can be submitted through your Travelogroup consultant. Refunds may be available for cancellations within the permitted 10% group limit, subject to airline conditions.'],
  ['5. How can I book Frontier Airlines group flights through Travelogroup?', 'Just fill out the form available on our website with your basic travel details or connect with our team through our helpline number +1-888-608-7453.'],
];

const payment = (
  <>
    <h2 className="h-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-navy">
      Payment Guidelines for Frontier Airlines Group Travel
    </h2>
    <p className="mt-6">A deposit is required to be paid to confirm your <strong>Frontier Airlines group travel</strong>.</p>
    <p>The deposit amount and payment deadline will be conveyed by our agent before the confirmation.</p>
    <p>For your convenience, we accept payments through credit card, debit card and wire transfer.</p>
    <p>Please note that any deposit amount remains non-refundable.</p>
  </>
);

const terms = (
  <>
    <div>
      <h3>Passenger Name Changes</h3>
      <p>
        You can request passenger name changes by coordinating with our team. Name updates are subject to the
        applicable airline conditions.
      </p>
      <p>
        Changes requested more than 60 days before departure may be permitted without any fee, while changes requested
        within 60 days of departure might involve a nominal charge, subject to approval.
      </p>
    </div>

    <div>
      <h3>Flight Cancellations</h3>
      <p>
        Cancellation requests can be made through our team members; however, requests are subject to airline terms and
        conditions.
      </p>
      <p>
        Refunds may be available for cancellations within the permitted 10% group limit, subject to airline
        conditions.
      </p>
    </div>
  </>
);

export default function FrontierGroupGuide() {
  return (
    <AirlineGuideLayout
      boldPattern={BOLD}
      title="Frontier Airlines Group Flights"
      intro="Known for its low-fare approach and extensive route network, Frontier Airlines connects more than 100 destinations across the United States, Mexico, the Caribbean and Central America. Headquartered in Denver, the airline serves a wide range of major cities and popular leisure destinations, offering groups convenient options for domestic and select international journeys."
      facts={facts}
      why={{
        heading: 'Your Frontier Airlines Group Travel, Made Easier with Travelogroup!',
        intro:
          'From a competitive group fare to baggage allowance and convenient schedules, Frontier Airlines makes coordinating group journeys more convenient. Through Travelogroup, you can explore available Frontier Airlines group flight options and get assistance to arrange your reservations.',
        checklist: '☑️',
        benefits,
      }}
      processHeading="Frontier Airlines Group Booking Process"
      afterProcess={payment}
      termsFirst
      termsHeading="Terms and Conditions for Frontier Airlines Group Flights"
      terms={terms}
      audienceHeading="Frontier Airlines Group Travel for Every Occasion"
      audiences={audiences}
      faqHeading="Frequently Asked Questions for Frontier Airlines Group Bookings"
      faqs={faqs}
      closing={{
        heading: 'Let’s Take Off Together with Frontier Airlines!',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
