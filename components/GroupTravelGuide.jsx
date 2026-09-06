import { Anchor, Briefcase, CalendarDays, Compass, GraduationCap, Heart, HeartHandshake, Trophy, Users } from 'lucide-react';
import { site } from '@/data/site';
import { Reveal } from '@/components/Motion';

const audiences = [
  {
    Icon: Briefcase,
    title: 'Corporate & Business Groups',
    body: 'We assist businesses arranging air travel for employees, executives, clients, and colleagues traveling together. Whether it is a corporate meeting, conference, business retreat, training program, or company event, our team can help coordinate the group’s flight requirements.',
  },
  {
    Icon: Users,
    title: 'Family & Friends',
    body: 'Large family vacations, reunions, anniversaries, celebrations, and trips with friends often require careful coordination. We help groups arrange their flights while keeping the booking process organized and providing assistance when travel plans change.',
  },
  {
    Icon: Heart,
    title: 'Wedding Groups',
    body: 'Destination weddings often involve guests traveling from different locations to the same destination. We specialize in helping wedding parties and their guests coordinate group air travel and understand applicable booking, payment, and passenger requirements.',
  },
  {
    Icon: Trophy,
    title: 'Sports Teams & Athletic Groups',
    body: 'Sports teams frequently travel with players, coaches, staff, and accompanying family members. We can assist with group flight arrangements for tournaments, competitions, training camps, and sporting events.',
  },
  {
    Icon: GraduationCap,
    title: 'Student & Educational Groups',
    body: 'Schools, colleges, universities, and educational organizations can use our group travel service when arranging flights for students, teachers, faculty, and chaperones. We understand that educational groups often require careful passenger coordination and organized travel planning.',
  },
  {
    Icon: HeartHandshake,
    title: 'Religious & Faith-Based Groups',
    body: 'We assist religious organizations and faith-based groups traveling together for conferences, events, pilgrimages, retreats, and other religious activities. Our team can help coordinate the group’s flight requirements and provide support throughout the booking process.',
  },
  {
    Icon: Compass,
    title: 'Tour Groups & Travel Organizers',
    body: 'Tour operators and organized travel groups can work with our team to arrange airfare for their customers and travelers. We can assist with group travel requirements based on the itinerary, passenger count, travel dates, and destination.',
  },
  {
    Icon: CalendarDays,
    title: 'Conference, Event & Convention Groups',
    body: 'If you are organizing travel for a conference, convention, trade show, concert, festival, or other major event, we can help coordinate flights for your attendees. Our group travel specialists can work with you to understand your requirements and explore suitable group travel options.',
  },
  {
    Icon: Anchor,
    title: 'Cruise & Vacation Groups',
    body: 'Groups traveling together for cruises, resort vacations, or special trips can also benefit from coordinated group airfare. We can assist with arranging flights that fit your group’s travel plans and provide guidance throughout the booking process.',
  },
];

export default function GroupTravelGuide({ airlineName }) {
  return (
    <>
      <section className="bg-white py-20">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Group travel guide</p>
            <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">{airlineName} Group Travel</h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 space-y-10 text-[16px] leading-relaxed text-navy/70 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:text-navy [&_h3]:mb-3 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_p+p]:mt-4">
              <div>
                <p>
                  Planning a trip with family, friends, colleagues, students, or a larger organization? Our{' '}
                  {airlineName} group travel service is designed for groups of {site.minGroupSize} or more passengers
                  traveling together.
                </p>
                <p>
                  With group travel arrangements, you can benefit from a more coordinated booking experience and
                  access to group-fare flexibility, subject to airline terms and approval.
                </p>
              </div>

              <div>
                <h3>Group Fare Flexibility</h3>
                <p>
                  Group fares can provide additional flexibility when organizing travel for a larger number of
                  passengers. Depending on the itinerary and airline approval, group bookings may offer flexibility
                  with passenger name deviations and payment arrangements, making it easier to manage your
                  group&apos;s travel plans.
                </p>
                <p>
                  Our group travel agents will explain the applicable terms, deadlines, and requirements before you
                  finalize your reservation.
                </p>
              </div>

              <div>
                <h3>Why book through us?</h3>
                <p>
                  We are committed to making your group&apos;s journey as smooth and seamless as possible. Planning
                  travel for a group of {site.minGroupSize} or more can be complicated, but our team makes it easier.
                </p>
                <ul className="mt-4">
                  <li>Get personalized assistance from a dedicated group travel agent.</li>
                  <li>We help you explore group fare options based on your travel needs.</li>
                  <li>Our team assists with the booking process from quote to confirmation.</li>
                  <li>Get guidance on deposits, payments, and applicable deadlines.</li>
                  <li>We assist with passenger name changes, subject to airline approval.</li>
                  <li>Our team can help with cancellations and applicable refund requests.</li>
                  <li>Get assistance with baggage policies and other group travel requirements.</li>
                  <li>We remain available to support your group before and around your departure.</li>
                  <li>Let us handle the details while you focus on enjoying your journey.</li>
                </ul>
                <p className="mt-4">
                  From the initial quote through departure, our goal is to provide your group with responsive support
                  and a coordinated travel experience.
                </p>
              </div>

              <div>
                <h3>How to Request a Quote and Make a Booking</h3>
                <p>
                  Kindly fill out our group travel request form with your travel details, including the number of
                  passengers, departure city, destination, and preferred travel dates. One of our group travel agents
                  will contact you within 24 hours to discuss your requirements and provide available options.
                </p>
                <p>
                  Finalize the option as per your needs. Make a deposit to block seats for your group, and your
                  booking will be confirmed.
                </p>
                <p>
                  For immediate assistance, you may also call us at{' '}
                  <a href={site.phoneHref} className="font-semibold text-navy underline">
                    {site.phone}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3>Deposit / Payment Options</h3>
                <p>A group booking deposit is non-refundable and is subject to the applicable booking terms.</p>
                <p>For your convenience, we accept multiple payment methods, including:</p>
                <ul className="mt-4">
                  <li>Credit card</li>
                  <li>Debit card</li>
                  <li>Wire transfer</li>
                </ul>
                <p className="mt-4">
                  Payment deadlines and amounts may vary depending on the airline, itinerary, and group booking
                  terms. Your agent will provide the applicable payment schedule when arranging your reservation.
                </p>
              </div>

              <div>
                <h3>Cancellation</h3>
                <p>
                  We understand that travel plans can change, and our team will be happy to assist with cancellation
                  requests whenever possible.
                </p>
                <p>
                  For group bookings, cancellations are generally subject to the airline&apos;s group-fare terms.
                  Where permitted, we can work with the airline to explore available refund options, provided that
                  cancellations remain within the applicable 10% group limit and other airline conditions are
                  satisfied.
                </p>
                <p>
                  We will make every reasonable effort to help you obtain any refund available under the applicable
                  fare and airline rules.
                </p>
              </div>

              <div>
                <h3>Name Change Rules</h3>
                <p>Passenger name changes are subject to the airline&apos;s approval and applicable fare rules.</p>
                <p>
                  In many cases, when travel is more than 60 days away, name changes may be accommodated without a
                  fee, subject to airline approval and the specific conditions of the group booking. Changes
                  requested within 60 days of departure may be subject to a nominal fee and airline approval.
                </p>
                <p>
                  Please contact our group travel agent before making any name changes so we can confirm the
                  applicable rules for your itinerary.
                </p>
              </div>

              <div>
                <h3>Baggage Considerations</h3>
                <p>
                  Baggage allowances and restrictions vary depending on the route, fare type, cabin, and applicable
                  {' '}{airlineName} policies.
                </p>
                <p>
                  Before completing your reservation, please check with your group travel agent regarding the
                  baggage allowance for your specific itinerary. You may also confirm the applicable baggage
                  restrictions directly with the airline.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Who we help</p>
            <h2 className="h-display mt-4 max-w-[26ch] text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Who do we specialize in arranging group travel for?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <div className="card h-full p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky/10 text-sky">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy/60">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap max-w-[700px] text-center">
          <Reveal>
            <p className="eyebrow">Get started</p>
            <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Planning travel for {site.minGroupSize} or more people?
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-navy/70">
              Whatever the purpose of your trip, our goal is to make group airfare easier to manage. Tell us your
              passenger count, travel dates, departure city, destination, and other requirements, and our group
              travel team will work with you to explore available options.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-navy/70">
              Submit your group travel request today and let our team help coordinate your group&apos;s journey from
              quote to departure.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
