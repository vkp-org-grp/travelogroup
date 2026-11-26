import AirlineGuideLayout from './AirlineGuideLayout';

// Phrases shown in bold wherever they appear in the body text.
const BOLD = /\b(United Airlines (?:group (?:flights|flight|reservation|fares|travel|bookings)|flight bookings))\b/gi;

const facts = [
  ['Main Hubs', 'Chicago O’Hare, Denver, Houston, Newark and San Francisco'],
  ['Alliance', 'Star Alliance'],
  ['Fleet', 'Boeing 737 aircraft for domestic routes and 787 Dreamliners for longer routes.'],
];

const benefits = [
  ['Exclusive Fares', 'Get access to exclusive United Airlines group fares based on your destination and travel dates.'],
  ['Coordinated Group Bookings', 'Keep your reservations organized under a single group PNR which allows you to track your whole group booking.'],
  ['Dedicated Travel Support', 'Have assistance from a dedicated travel agent at every stage of your United Airlines group travel, from initial enquiry to seat arrangements and airport assistance.'],
  ['Flexible Group Booking Arrangements', 'Enjoy flexibility with passenger name, details and payment arrangements, depending on the itinerary and airline approval.'],
];

const audiences = [
  ['Family & Friends Tour', 'Having a family reunion, holiday or celebration in mind? Let our team coordinate between flight bookings, seating arrangements and airport assistance, easing your whole United Airlines group travel experience.'],
  ['Corporates & Businesses', 'Whether it’s business meetings, company conferences, employee travel or corporate events, we provide end to end assistance in your United Airlines group travel, making your journey much more manageable.'],
  ['Sports Teams & Athletic Groups', 'Travelling for a sports event involves more than getting players from one city to another. Teams often travel with coaches, trainers and management, making flight coordination important. We assist with United Airlines group bookings for tournaments, championships and sports events, taking group schedules and seating requests into consideration.'],
  ['Student & Educational Groups', 'We help schools, universities and educational institutions in coordinating the United Airlines group arrangements required for their academic tours and educational visits.'],
  ['Wedding Groups', 'Destination weddings and large wedding celebrations often come along with multiple booking challenges for guests travelling from different cities or countries. We arrange group flight bookings offering flexible seating and airport assistance as well making it easier to plan travel around the celebration.'],
  ['Religious & Community Groups', 'Group travel for religious gatherings, pilgrimages and community programmes demands well-planned flight arrangements. We help religious institutions and organizations in coordinating United Airlines flight bookings and passenger requirements throughout the process.'],
  ['Tour Groups & Organizers', 'Managing flight arrangements for an organized tour requires attention to departure schedules, destination connections and the overall group itinerary. We work with tour operators and travel agencies to book United Airlines group flight options at exclusive fares while providing assistance throughout the process.'],
  ['Cruise & Vacation Groups', 'From flight bookings to airport assistance, we help vacation planners and cruise groups coordinate flights, seating arrangements and last minute changes making their group travel a well-coordinated experience for their customers.'],
];

const faqs = [
  ['Can I book domestic and international United Airlines group flights through Travelogroup?', 'Yes. Travelogroup accepts enquiries for both domestic and international group flight bookings for United Airlines. Submit your details such as destination, travel dates and group requirements with our team to receive a group flight booking proposal.'],
  ['What deposit is required to confirm a United Airlines group booking?', 'The deposit amount required for a United Airlines group booking depends on the itinerary and applicable booking terms. Before confirming your booking, our agent will provide the exact deposit amount, payment deadlines and schedule.'],
  ['How far in advance should I book United Airlines group flights?', 'The advance booking period depends on your travel dates, destination, flight availability and other group booking conditions.'],
  ['Can I review different flight options before confirming my group booking?', 'Yes. Once you share your travel requirements, our team will share a proposal where you can review the available options and finalize the one as per your travel plans.'],
];

const terms = (
  <>
    <div>
      <h3>Deposits and Payment Deadlines</h3>
      <p>
        To confirm your booking for <strong>United Airlines group flights</strong>, a deposit is required to be paid which remains
        non-refundable and is subject to the applicable terms and conditions.
      </p>
      <p>We offer the following payment methods for your convenience:</p>
      <ul className="mt-4">
        <li>Credit card</li>
        <li>Debit card</li>
        <li>Wire transfer</li>
      </ul>
      <p className="mt-4">
        The payment amounts and deadlines may differ depending on the airline, itinerary, and group booking terms.
      </p>
    </div>

    <div>
      <h3>Passenger Name Changes</h3>
      <p>
        We provide flexibility in passenger name changes. Just contact our group travel agent before requesting a
        change to confirm any applicable rules.
      </p>
      <p>
        Name changes requested more than 60 days before departure may be permitted without any fee. However, changes
        requested within 60 days of departure might involve a nominal charge, subject to approval.
      </p>
    </div>

    <div>
      <h3>Flight Changes and Cancellations</h3>
      <p>
        Sometimes due to uncertainties even a well-coordinated group trip needs to be cancelled. In such cases, our
        team will align with the airline to check the available options and refund eligibility.
      </p>
      <p>
        However, refunds will only be considered where permitted, provided the cancellation falls within the
        applicable 10% group limit and other airline conditions are met.
      </p>
    </div>

    <div>
      <h3>Baggage Allowances</h3>
      <p>
        Baggage restrictions and allowances for <strong>United Airlines group bookings</strong> may differ as per the route, fare
        type, cabin, and airline policies. You are advised to check the baggage allowance associated with your
        itinerary with the group travel agent.
      </p>
    </div>
  </>
);

export default function UnitedGroupGuide() {
  return (
    <AirlineGuideLayout
      boldPattern={BOLD}
      title="United Airlines Group Flights"
      intro="United Airlines is a strong choice offering a wide range of flight connections across the United States and beyond. Its wide network is supported by major US hubs, offering multiple routing options for domestic and international group travels."
      facts={facts}
      why={{
        heading: 'Why Choose Travelogroup for United Airlines Group Bookings?',
        intro:
          'Booking United Airlines group flights for 10 or more passengers involves much more than just confirming the tickets. From comparing fares to coordinating flight schedules and passenger details, there are various aspects to consider. Travelogroup aims to simplify this process by providing dedicated booking assistance through each stage of your United Airlines group reservation.',
        benefits,
      }}
      processHeading="How to Book United Airlines Group Flights"
      audienceHeading="Who Do We Arrange United Airlines Group Travel For?"
      audiences={audiences}
      termsHeading="Terms and Conditions for United Airlines Group Flights Booking"
      terms={terms}
      faqHeading="Frequently Asked Questions About United Airlines Group Travel"
      faqs={faqs}
      closing={{
        heading: 'Group Travel? Let’s Fly United Airlines',
        paragraphs: [
          'Planning flights for a group doesn’t have to be complicated. Be it a family holiday, a corporate trip or an international group tour, let Travelogroup bring you closer to your destination.',
          'Submit your group travel enquiry today and let our team help coordinate your group’s journey from quote to departure.',
        ],
      }}
    />
  );
}
