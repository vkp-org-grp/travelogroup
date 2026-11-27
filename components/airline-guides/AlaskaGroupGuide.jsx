import AirlineGuideLayout from './AirlineGuideLayout';

// Phrases shown in bold wherever they appear in the body text.
const BOLD = /\b(Alaska Airlines group (?:travel|flights|booking|reservations))\b/gi;

const facts = [
  ['Main Hubs & Focus Cities', 'Seattle, Anchorage, Portland, San Francisco, Los Angeles and Honolulu.'],
  ['Alliance', 'Oneworld'],
  ['Fleet', '737 aircraft, including 737-900ER and 737 MAX variants, along with Embraer E175 regional aircraft.'],
];

const benefits = [
  [null, 'Exclusive group flight fares'],
  [null, 'Flexibility in seating arrangements and passenger detail updates'],
  [null, 'Organized reservations under a single PNR'],
  [null, 'Personalised booking support throughout the booking process'],
  [null, 'Guidance for smooth airport check-ins'],
];

const audiences = [
  ['Businesses & Corporates', 'Businesses travelling for meetings, conferences, exhibitions and other corporate events can book Alaska Airlines group travel through Travelogroup for their employees, executives, clients or business partners. Our team will assist in coordinating flight arrangements around business schedules, streamlining their entire journey.'],
  ['Educational Groups', 'Whether it’s an academic tour, educational visits or a student exchange programme, we guide schools, universities and other education organizations throughout their Alaska Airlines group flights booking process to make their group travel manageable.'],
  ['Sports & Athletic Tours', 'Having a sports tournament or an international competition soon? We make the entire Alaska Airlines group booking easier by providing end to end support. From coordinating flights for players and coaches to last minute passenger name changes, we ensure that your journey remains well-planned throughout.'],
  ['Family & Friends Tour', 'Be it a family reunion, holiday or celebration, we make sure it stays hassle-free by simplifying your Alaska Airlines group travel, seating arrangements and providing full airport assistance.'],
  ['Wedding Groups', 'Destination weddings sound cool until you get stuck in multiple tasks involving fare comparisons, scheduling flights and managing guest details. Our team takes off that load, right from the initial enquiry to booking confirmation, keeping travel arrangements well-organized.'],
  ['Tour Groups & Organizers', 'Whether it’s a domestic tour or an international group travel, our team provides end to end flight booking support so your travel stays uninterrupted and stress-free.'],
  ['Cruise & Vacation Groups', 'Taking your group for a cruise getaway or resort vacation? Get negotiated group flight deals along with professional booking guidance to keep your journey aligned, from departure to destination.'],
  ['Religious & Community Groups', 'We assist in making Alaska Airlines group reservations for pilgrimages, religious conferences, retreats and community gatherings. Our team handles the passenger details and flight schedules based on the group’s destination and travel dates.'],
];

const faqs = [
  ['What makes Alaska Airlines good for group travel?', 'Alaska Airlines is a good option for group travel as it offers competitive fares and flexible booking conditions. Booking through Travelogroup gives you access to suitable group flight options and personalised assistance making your group’s journey easier.'],
  ['What deposit is required to confirm an Alaska Airlines group booking?', 'The deposit amount depends on the route, fares and applicable booking terms. Prior to your confirmation, our agent will share the deposit amount, payment deadlines and schedule.'],
  ['Can I make changes to the passenger names after booking Alaska Airlines group flights?', 'Passenger name changes can be done depending on the airline’s rules and departure dates. Speak to our agent to know the available options for your booking.'],
  ['Can I review different flight options before confirming my group booking?', 'Yes. Once you share your travel requirements, our team will share a proposal for you to review the available options and finalize the one as per your preferences.'],
  ['How can I book Alaska Airlines group flights through Travelogroup?', 'Simply fill out the form available on our website with your basic travel details. You can also connect with our team through our helpline number +1-888-608-7453.'],
];

const terms = (
  <>
    <div>
      <h3>Payment Guidelines</h3>
      <p>To secure your <strong>Alaska Airlines group booking</strong>, a deposit amount is required to be paid in advance.</p>
      <p>
        Payment amount and deadlines are determined by travel dates, fares and other applicable conditions, if any.
      </p>
      <p>We accept payments through credit card, debit card and wire transfer.</p>
    </div>

    <div>
      <h3>Passenger Detail Changes</h3>
      <p>
        Passenger names can be modified by contacting our team member; however, this is subject to the airline&apos;s
        applicable rules.
      </p>
      <p>Requests made more than 60 days before departure may be processed free of charge.</p>
      <p>Changes requested within 60 days of departure may incur a nominal fee.</p>
    </div>

    <div>
      <h3>Flight Cancellations</h3>
      <p>
        Cancellation requests made for the confirmed <strong>Alaska Airlines group reservations</strong> are subject to the airline
        policies.
      </p>
      <p>Please contact your Travelogroup consultant to place a cancellation request.</p>
      <p>Refund amounts, eligibility and cancellation deadlines depend on the confirmed booking terms.</p>
    </div>

    <div>
      <h3>Baggage Allowances</h3>
      <p>
        You can connect with our team to go through Alaska Airlines&apos; baggage guidelines prior to departure to
        avoid last-minute complications at the airport.
      </p>
      <p>
        Carry-on and checked baggage allowances depend on the fare type, route, cabin and applicable airline
        policies.
      </p>
    </div>
  </>
);

export default function AlaskaGroupGuide() {
  return (
    <AirlineGuideLayout
      boldPattern={BOLD}
      title="Alaska Airlines Group Flights"
      intro="Alaska Airlines connects key destinations across the United States with cities throughout North America and an expanding international network. With a strong presence and network along the West Coast to destinations across Central America and the Pacific, Alaska Airlines offers travellers an array of options for planning group journeys."
      facts={facts}
      why={{
        heading: 'Alaska Airlines Group Travel Sorted',
        intro:
          'Planning a group trip involves coordinating flight schedules, comparing airfares and managing passenger requirements – consuming a lot of time. Travelogroup focuses on making this Alaska Airlines process well-organised and easier to manage, from the initial fare enquiry to the final reservation.',
        checklist: true,
        benefits,
      }}
      audienceHeading="Who Benefits from Alaska Airlines Group Flight Booking?"
      audiences={audiences}
      processAfterAudience
      processHeading="Alaska Airlines Group Booking Process"
      termsHeading="Booking Policies for Alaska Airlines Group Travel"
      terms={terms}
      faqHeading="Frequently Asked Questions About Alaska Airlines Group Booking"
      faqs={faqs}
      closing={{
        heading: 'Ready to Take Off with Alaska Airlines?',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
