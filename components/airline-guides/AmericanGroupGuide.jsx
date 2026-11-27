import AirlineGuideLayout from './AirlineGuideLayout';

// Phrases shown in bold wherever they appear in the body text.
const BOLD = /\b(American Airlines group (?:travel|booking|flight bookings))\b/gi;

const facts = [
  ['Main Hubs', 'Charlotte, Chicago, Dallas/Fort Worth, Los Angeles, Miami, New York and Phoenix'],
  ['Alliance', 'Oneworld'],
  ['Fleet', 'Airbus A320 and Boeing 737 aircraft for domestic routes, along with Boeing 787 Dreamliners for long-haul flights.'],
];

const benefits = [
  [null, 'Get access to competitive fare options for your American Airlines group travel tailored to your travel dates, destination and itinerary.'],
  [null, 'Keep your group’s flight arrangements organised and tracked through a single PNR without having to coordinate each enquiry separately.'],
  [null, 'We make managing passenger details easier by providing flexibility with name changes and seating arrangements.'],
  [null, 'Our team provides support with check-in information, terminal details, flight schedules and other important pre-departure requirements for a smooth airport experience.'],
];

const audiences = [
  ['Corporate Travel', 'Companies, corporate teams and professionals travelling for meetings, exhibitions, conferences or events.'],
  ['Academic Groups', 'Schools, universities and educational groups planning academic trips or student exchange programmes.'],
  ['Sports Events', 'Sports teams, coaches and associations travelling for tournaments, matches and championships.'],
  ['Wedding Groups', 'Wedding planners, families and guests travelling for destination weddings.'],
  ['Tour Groups', 'Tour operators and organised groups planning sightseeing trips and multi-city itineraries.'],
  ['Cruise & Vacation Groups', 'Cruise passengers and holiday groups arranging flights to their cruise departure destinations.'],
  ['Family & Friends', 'Families and social groups planning holidays, reunions and special occasions together.'],
  ['Religious Communities', 'Pilgrimage groups, faith-based communities and spiritual organisations travelling together.'],
];

const faqs = [
  ['1. Are American Airlines group fares cheaper than individual flight tickets?', 'Group fares may have different pricing and booking conditions compared with individual tickets. Travelogroup lets you explore the most competitive group fare options based on your passenger count, destination and travel dates.'],
  ['2. Can I request a name change on an American Airlines group booking?', 'Yes. Travelogroup allows passenger name change requests for American Airlines group bookings. Contact our team with the details to get assistance with the process.'],
  ['3. Can I cancel my American Airlines group booking made through Travelogroup?', 'Yes, you can request cancellation of your American Airlines group booking through Travelogroup. Our team will coordinate with the airline to update you regarding the refund, if applicable.'],
  ['4. Is the deposit for an American Airlines group booking refundable?', 'The initial deposit received to confirm your American Airlines group travel through Travelogroup is non-refundable and is subject to the applicable booking terms and conditions.'],
  ['5. Can I include connecting flights in my American Airlines group itinerary?', 'Yes. You can share your route preferences while submitting your enquiry. Our team will find suitable itinerary options based on flight availability and your group’s travel requirements.'],
];

const CELL = 'border border-navy/10 px-4 py-3 text-left align-top';

const terms = (
  <>
    <div>
      <h3>1. Deposits and Payment Deadlines</h3>
      <p>
        To confirm your <strong>American Airlines group booking</strong>, a non-refundable deposit is required to be paid. For your
        convenience, we accept payments through credit card, debit card and wire transfer.
      </p>
      <p>Deposit amounts may vary depending on the itinerary and group booking conditions.</p>
      <p>Payment deadlines are communicated during the booking process.</p>
    </div>

    <div>
      <h3>2. Passenger Name Changes</h3>
      <p>
        Travelogroup allows passenger name changes on <strong>American Airlines group flight bookings</strong>, subject to the
        conditions mentioned below. Just contact our travel agent to submit a request.
      </p>
      <div className="mt-4 max-w-[760px] overflow-x-auto">
        <table className="w-full border-collapse text-[15px]">
          <thead className="bg-paper text-navy">
            <tr>
              <th scope="col" className={CELL}>Request Period</th>
              <th scope="col" className={CELL}>Applicable Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={CELL}>More than 60 days before departure</td>
              <td className={CELL}>May be permitted without a fee, subject to approval.</td>
            </tr>
            <tr>
              <td className={CELL}>Within 60 days of departure</td>
              <td className={CELL}>A nominal charge may apply, subject to approval.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3>3. Flight Changes and Cancellations</h3>
      <p>
        Not every travel journey goes ahead as planned, and we understand that and help you proceed with the
        cancellation requests. Our team coordinates with American Airlines to check available options and refund
        eligibility.
      </p>
      <ul className="mt-4">
        <li>Contact your Travelogroup agent to place a cancellation request.</li>
        <li>Our team will coordinate with the airline to check available options.</li>
        <li>
          Refunds will be considered only where permitted, including compliance with the applicable 10% group
          cancellation limit.
        </li>
      </ul>
    </div>

    <div>
      <h3>4. Baggage Allowances</h3>
      <p>
        For <strong>American Airlines group travel</strong>, baggage allowance may depend on the route and airline policies. For a
        smooth check-in experience, check the baggage restrictions with the group travel agent beforehand.
      </p>
    </div>
  </>
);

export default function AmericanGroupGuide() {
  return (
    <AirlineGuideLayout
      boldPattern={BOLD}
      title="American Airlines Group Flights"
      intro="American Airlines offers a broad range of domestic and international flight networks, connecting major cities across the United States with destinations around the world. Its well-connected network brings routing options convenient for group travel."
      facts={facts}
      why={{
        heading: 'Simplify Your American Airlines Group Flight Booking',
        intro:
          'Let our group travel specialist guide you throughout the booking process, from comparing flight fares to airport assistance and last-minute queries.',
        benefits,
      }}
      processHeading="How to Book American Airlines Group Flights"
      audienceHeading="Who Benefits from Travelogroup American Airlines Group Bookings"
      audiences={audiences}
      termsHeading="American Airlines Group Flight Booking Guidelines"
      terms={terms}
      faqHeading="Frequently Asked Questions About American Airlines Group Booking"
      faqs={faqs}
      closing={{
        heading: 'Your American Airlines Group Journey Awaits!',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
