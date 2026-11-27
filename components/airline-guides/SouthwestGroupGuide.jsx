import AirlineGuideLayout from './AirlineGuideLayout';

// Phrases shown in bold wherever they appear in the body text.
const BOLD = /\b(Southwest Airlines group (?:flight|travel))\b/gi;

const facts = [
  ['Main Hubs & Focus Cities', 'Seattle, Anchorage, Portland, San Francisco, Los Angeles and Honolulu.'],
  ['Alliance', 'None'],
  ['Fleet', 'Operates an all-Boeing 737 fleet over a wide range of domestic routes.'],
];

const benefits = [
  ['No Flight Change Fees', 'Southwest does not charge a separate change fee when modifying a flight. Any difference in fare may still apply.'],
  ['Complimentary Carry-On Baggage', 'Every passenger can bring one carry-on bag and one personal item without an additional charge.'],
  ['Assigned Seating', 'Southwest offers assigned seating, allowing passengers on most fare types to select seats during booking.'],
  ['Multiple Seat Options', 'Passengers can choose from Standard, Preferred and Extra Legroom seating options, depending on their fare and applicable charges.'],
];

const audiences = [
  ['Corporate & Business', 'Arrange Southwest flights for employees, business delegates and corporate teams attending conferences, meetings, trade shows and company retreats.'],
  ['Schools & Educational Institutions', 'Coordinate student and faculty travel for school excursions, university visits, academic competitions and educational programmes.'],
  ['Sports Teams & Clubs', 'We plan flight arrangements for players, coaches and support staff travelling to tournaments, league matches and training camps.'],
  ['Family & Friends Getaways', 'Bring everyone’s flight arrangements together for family reunions, group holidays, milestone celebrations and memorable vacations.'],
  ['Wedding & Celebration Groups', 'Coordinate guest flights for destination weddings, anniversaries and special celebrations, including travellers departing from different cities.'],
  ['Religious & Community Groups', 'Arrange group journeys for pilgrimages, religious conventions, community gatherings and spiritual retreats.'],
  ['Tour Operators & Travel Organizers', 'Coordinate Southwest flight arrangements for escorted tours, holiday packages and multi-city travel itineraries.'],
  ['Cruise & Vacation Groups', 'We plan flights around cruise departure dates, resort check-ins and vacation schedules to keep group travel arrangements aligned.'],
];

const faqs = [
  ['Can I book domestic and international Southwest Airlines group flights through Travelogroup?', 'Yes. You can book both domestic and international group flights. Just share your destinations, dates, and travel requirements to explore available flight options.'],
  ['How much deposit is required for a Southwest Airlines group booking?', 'The deposit amount varies depending on the routes, fares and other applicable conditions. Our agent will disclose all amount and payment details before confirmation.'],
  ['Can passenger names be changed after booking?', 'Yes, passenger names can be changed; however, it is subject to the airline’s applicable rules, fees, and deadlines. Speak to our agent to understand the available options.'],
  ['How early should I enquire about group flights?', 'Planning in advance is advised to give you buffer time to compare fares and explore flight options. The ideal timeline may vary depending on your destination and travel dates.'],
  ['Can I compare flight options before confirming?', 'Yes. You can go through the multiple flight options and, based on the itinerary of your group, you will receive a proposal.'],
];

const payment = (
  <>
    <h2 className="h-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-navy">
      Payment Guidelines for Southwest Airlines Group Travel
    </h2>
    <p className="mt-6">
      To confirm your <strong>Southwest Airlines group travel</strong> with Travelogroup, it is mandatory to pay a deposit which stays
      non-refundable. To make the payments easier we accept credit card, debit card and wire transfer. The deposit
      amount, total payment details and deadlines will be communicated before the confirmation of the booking process.
    </p>
  </>
);

const terms = (
  <ul>
    <li>
      Flight cancellation requests are subject to the terms of the confirmed group reservation. Contact your
      Travelogroup consultant to submit a cancellation request.
    </li>
    <li>Refund eligibility, applicable charges and cancellation deadlines depend on the booking conditions.</li>
    <li>
      Checked baggage fees and allowances depend on the routes, fare and airline policies. Our travel agent will
      coordinate to ensure a smooth departure.
    </li>
    <li>
      Passenger name change requests are subject to the applicable airline conditions. You must contact your travel
      agent to request modifications.
    </li>
  </ul>
);

export default function SouthwestGroupGuide() {
  return (
    <AirlineGuideLayout
      boldPattern={BOLD}
      title="Southwest Airlines Group Flights"
      intro="Known for its extensive domestic route network, Southwest Airlines is one of the major carriers in the United States, connecting cities across the country. With a strong presence in major markets and budgeted fares, the airline offers convenient travel options for groups heading to different parts of the US, making it a practical choice for group travellers."
      facts={facts}
      why={{
        heading: 'Your Southwest Airlines Group Travel Sorted!',
        intro:
          'Southwest Airlines offers various travel features to make the journey more comfortable for passengers. You can explore Southwest Airlines group flight options and arrange your group’s reservations with personalized booking assistance from Travelogroup.',
        benefits,
      }}
      beforeProcess={payment}
      processHeading="Southwest Airlines Group Booking Process"
      termsFirst
      termsHeading="Terms and Conditions for Southwest Airlines Group Flight"
      terms={terms}
      audienceHeading="Who Do We Arrange Southwest Airlines Group Travel For?"
      audiences={audiences}
      faqHeading="Frequently Asked Questions for Southwest Airlines Group Bookings"
      faqs={faqs}
      closing={{
        heading: 'Let’s Get Your Southwest Airlines Group Flights Planned!',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
