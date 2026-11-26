import AirlineGuideLayout from './AirlineGuideLayout';

const facts = [
  ['Main Hubs', 'Atlanta, Detroit, Minneapolis–St. Paul, Salt Lake City and Seattle'],
  ['Alliance', 'SkyTeam'],
  ['Fleet', 'Airbus A320 for domestic routes and A330 and A350 for long-haul flights'],
];

const benefits = [
  ['Group Fare Assistance', 'Get access to exclusive Delta airline fares based on your destination, travel dates and itinerary.'],
  ['Simplified Bookings', 'Manage and keep a track of your whole group booking through a single PNR.'],
  ['Dedicated Travel Assistance', 'From initial enquiry quotations to confirmation and airport assistance, get personalized assistance from our dedicated group travel agent at each stage of the Delta Airline booking process.'],
  ['Flexible Seating Arrangements', 'Enjoy flexible passenger name changes and seating options ahead of an initial deposit.'],
];

const audiences = [
  ['Corporates & Businesses', 'Businesses arranging group travel for employees, executives, clients or business partners can book Delta Airlines group flights for meetings, conferences, exhibitions and other corporate events. We assist with coordinating flight arrangements around business schedules making their travel hustle-free.'],
  ['Student & Educational Groups', 'From academic tours and educational visits to student exchange programmes and university events, we assist schools, universities and other education organizations in coordination throughout the booking process to make their group travel manageable.'],
  ['Sports Teams & Athletic Groups', 'Whether it’s a sports tournament, championship or an international competition, we provide end to end support for your Delta Airlines group flight bookings. From coordinating flights for players, coaches, and accompanying personnel to last minute passenger changes, we make your team journey well planned and seamless.'],
  ['Family & Friends Tour', 'Whether it is a family reunion, holiday or celebration, it should always begin with a well-coordinated travel plan. We ease the process by simplifying your Delta Airlines group travel, seating arrangements and providing full airport assistance.'],
  ['Wedding Groups', 'Destination weddings are fun but coordinating flights of guests traveling through different locations needs considerable time and planning. From the initial enquiry to booking confirmation, we take all of that load keeping travel arrangements organized around the wedding dates.'],
  ['Religious & Community Groups', 'For pilgrimages, religious conferences, retreats and community gatherings, we assist organizers with Delta group flight arrangements for their members. We coordinate passenger details, explore flight options based on the group’s destination and travel dates, and provide booking support for domestic and international journeys.'],
  ['Tour Groups & Organizers', 'Whether you’re arranging a domestic tour or an international travel programme, let our team streamline the process and arrange your Delta group flight options that fit the entire planned itinerary.'],
  ['Cruise & Vacation Groups', 'Planning a cruise holiday or resort vacation with a group? From exploring suitable Delta group flight options to assisting you throughout the booking process, we keep your group’s air travel aligned with your holiday plans.'],
];

const faqs = [
  ['Can I book domestic and international Delta group flights through Travelogroup?', 'Yes. Travelogroup accepts enquiries for both domestic and international group flight bookings. Just share your destination, travel dates and group requirements with our team to receive available flight options and a booking proposal.'],
  ['What deposit is required to confirm a Delta group booking?', 'The deposit amount required for Delta Airlines group bookings depends on the itinerary and applicable booking terms. Before confirming your reservation, our agent will share the exact deposit amount, payment deadlines and schedule.'],
  ['How far in advance should I book Delta group flights?', 'The advance booking period may differ depending on your travel dates, destination, flight availability and other group booking conditions.'],
  ['Can I review different flight options before confirming my group booking?', 'Yes. Once your travel requirements have been discussed, our team will share a proposal where you can review the available options and finalize the one that best suits your travel plans.'],
];

const terms = (
  <>
    <div>
      <h3>Deposits and Payment Deadlines</h3>
      <p>
        To confirm your group booking, a deposit is required to be paid. Please note that the deposit amount
        is non-refundable and is subject to the applicable terms and conditions.
      </p>
      <p>We offer the following payment methods for your convenience:</p>
      <ul className="mt-4">
        <li>Credit card</li>
        <li>Debit card</li>
        <li>Wire transfer</li>
      </ul>
      <p className="mt-4">
        The payment amounts and deadlines may differ depending on the airline, itinerary, and group booking
        terms.
      </p>
    </div>

    <div>
      <h3>Passenger Name Changes</h3>
      <p>
        Need to update a passenger&apos;s name after booking? We got you covered. Just contact our group
        travel agent before requesting a change to confirm any applicable rules.
      </p>
      <p>
        In most cases, name changes requested more than 60 days before departure may be permitted without
        any fee, while changes requested within 60 days of departure may involve a nominal charge, subject
        to approval.
      </p>
    </div>

    <div>
      <h3>Flight Changes and Cancellations</h3>
      <p>
        We understand that even well-planned group trips may sometimes need to be cancelled. In such cases,
        our team will be happy to coordinate with the airline to check the available options and applicable
        refund eligibility.
      </p>
      <p>
        However, refunds may be considered where permitted, provided the cancellation falls within the
        applicable 10% group limit and other airline conditions are met.
      </p>
    </div>

    <div>
      <h3>Baggage Allowances</h3>
      <p>
        Baggage allowances for Delta group bookings may depend on the route, fare type, cabin, and airline
        policies. To avoid last minute confusion, check the baggage allowance associated with your specific
        itinerary with your group travel agent.
      </p>
    </div>
  </>
);

export default function DeltaGroupGuide() {
  return (
    <AirlineGuideLayout
      title="Delta Airlines Group Flights"
      intro="With its extensive domestic and international network, Delta Airlines connects major cities across the United States with destinations around the world making it an ideal choice for group travel across multiple destinations."
      facts={facts}
      why={{
        heading: 'Why Book Delta Airlines Group Travel With Us?',
        intro:
          'Whether it’s a trip of 10 people or a large organization, arranging group travel requires coordinating across flight schedules, comparing fares and last minute changes. Travelogroup simplifies the process of booking group travel with Delta Airlines through personalized reservation support to ease your entire journey.',
        benefits,
      }}
      processHeading="Delta Airlines Group Booking Process"
      audienceHeading="Who Do We Arrange Delta Airlines Group Travel For?"
      audiences={audiences}
      termsHeading="Delta Airlines Group Flights Booking Terms and Conditions"
      terms={terms}
      faqHeading="Frequently Asked Questions About Delta Airlines Group Bookings"
      faqs={faqs}
      closing={{
        heading: 'Planning a Group Travel Soon? Let’s Get Your Delta Flights Sorted.',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
