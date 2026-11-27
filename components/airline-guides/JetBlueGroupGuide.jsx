import AirlineGuideLayout from './AirlineGuideLayout';

// Phrases shown in bold wherever they appear in the body text.
const BOLD = /\b(JetBlue Airlines (?:group travel|group flights|flight booking)|JetBlue group flight arrangements)\b/gi;

const facts = [
  ['Main Hubs & Focus Cities', 'New York (JFK), Boston, Fort Lauderdale, Orlando, Los Angeles and San Juan.'],
  ['Alliance', 'Not a member of any major global airline alliance.'],
  ['Fleet', 'Airbus A320 and A321 aircraft, including A321neo and A321LR variants for selected longer-haul routes.'],
];

const benefits = [
  ['Negotiated Flight Fares', 'Get access to negotiated flight fares for JetBlue Airlines group travel based on your destination, travel dates, and itinerary.'],
  ['Organised Reservations', 'Keep passenger information and booking details coordinated through a streamlined reservation process.'],
  ['Personalised Booking Support', 'Get dedicated assistance throughout the process, from the initial enquiry and fare quotation to reservation confirmation.'],
  ['Seating Flexibility', 'Get benefit from flexible seating arrangements and convenient passenger detail updates, subject to airline terms and conditions.'],
];

const audiences = [
  ['Corporate & Business', 'Planning a conference, business meeting or company retreat? Explore JetBlue group flight arrangements to keep your team’s travel organised.'],
  ['Schools & Educational Institutions', 'From school and college tours to academic events and student exchange programmes, make travel planning easier for students and faculty.'],
  ['Sports Teams & Clubs', 'Whether travelling for tournaments, championships or training events, coordinate flight arrangements for players, coaches and support staff.'],
  ['Family & Friends Getaways', 'Bringing everyone together for a holiday, reunion or trip?'],
  ['Wedding & Celebration Groups', 'From destination weddings to milestone celebrations, help guests travelling from different places come together for the occasion.'],
  ['Religious & Community Groups', 'Planning a pilgrimage, spiritual retreat, community gathering or faith-based event? Explore multiple flight options and get dedicated assistance in coordinating bookings and passenger details.'],
  ['Tour Operators & Travel Organisers', 'Organising a group tour, be it an international holiday or multi-destination itinerary, involves a lot of planning. Let our travel specialists guide you throughout the process for a hassle-free journey.'],
  ['Cruise & Vacation Groups', 'Getting everyone to the port or holiday destination on time? Get a track of your whole booking under one organized system to make your entire journey more manageable.'],
];

const faqs = [
  ['Can I book domestic and international JetBlue Airline group flights through Travelogroup?', 'Yes. You can book both domestic and international group flights. Just share your destinations, dates, and travel requirements to explore available flight options.'],
  ['How much deposit is required for a JetBlue Airlines group booking?', 'The deposit amount depends on the itinerary and applicable reservation conditions. Our agent will explain the amount and payment schedule before confirmation.'],
  ['Can passenger names be changed after booking?', 'Yes, we allow flexibility in passenger details; however, it is subject to the airline’s applicable rules, fees, and deadlines. Connect to our agent to understand the available options.'],
  ['How early should I enquire about group flights?', 'Usually early planning is advised to give you more time to compare fares, and explore flight options. The ideal timeline depends on your destination and travel dates.'],
  ['Can I compare flight options before confirming?', 'Yes. You can explore multiple flight options and fare proposals before selecting the itinerary that suits your group.'],
];

const terms = (
  <>
    <div>
      <h3>Deposit Guidelines</h3>
      <p>
        A deposit is mandatory to secure your <strong>JetBlue Airlines flight booking</strong>, given that the deposit amount remains
        non-refundable. The accepted payment methods by Travelogroup are credit card, debit card and wire transfer.
      </p>
      <p>Payment amounts and deadlines may vary depending on the flight fares, destination and other booking conditions.</p>
    </div>

    <div>
      <h3>Passenger Name Changes</h3>
      <p>Travelogroup allows changing passenger names and details on the following conditions.</p>
      <ul className="mt-4">
        <li>Name updates are subject to the applicable airline conditions.</li>
        <li>You must contact your travel agent to request modifications.</li>
        <li>
          Changes requested more than 60 days before departure may be permitted without any fee, while changes
          requested within 60 days of departure might involve a nominal charge, subject to approval.
        </li>
      </ul>
    </div>

    <div>
      <h3>Flight Cancellations</h3>
      <p>
        Cancellation requests can be made through our team members; however, requests are subject to airline terms
        and conditions.
      </p>
      <p>Our team can help coordinate such requests with the airline.</p>
      <p>
        Refunds may be available for cancellations within the permitted 10% group limit, subject to airline
        conditions.
      </p>
    </div>

    <div>
      <h3>Baggage Allowances</h3>
      <p>
        We provide guidance on JetBlue Airlines baggage restrictions and allowances to ensure an uninterrupted flight
        boarding.
      </p>
      <p>
        Check-in baggage and carry-on allowances for <strong>JetBlue Airlines group flights</strong> depend on the fare, route and
        airline policies.
      </p>
      <p>Review the baggage inclusions associated with your selected itinerary in advance.</p>
    </div>
  </>
);

export default function JetBlueGroupGuide() {
  return (
    <AirlineGuideLayout
      boldPattern={BOLD}
      title="Jet Blue Airways Group Flights"
      intro="With a wide network, Jet Blue Airways connects key destinations across the United States with several cities across the Caribbean, Latin America and Europe. With a strong presence in major domestic cities and growing international connectivity, the airline offers travellers various options for planning group journeys across the world."
      facts={facts}
      why={{
        heading: 'JetBlue Airlines Group Bookings, Made Easier with Travelogroup',
        intro:
          'Planning a group trip requires juggling between multiple travel schedules, comparing flight fares and managing passenger requirements. Having the right booking guidance can not only simplify the whole process but also keep your entire journey well organized. That’s where Travelogroup comes to streamline the Jet Blue Airways flight booking by providing:',
        benefits,
      }}
      processHeading="Process to Book JetBlue Airlines Group Flights"
      termsFirst
      termsHeading="JetBlue Airlines Group Travel: Booking Policies"
      terms={terms}
      audienceHeading="Group Travel for Business, Leisure & Everything Between"
      audiences={audiences}
      faqHeading="Frequently Asked Questions About JetBlue Airlines Group Booking"
      faqs={faqs}
      closing={{
        heading: 'Your JetBlue Group Travel Starts Here',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
