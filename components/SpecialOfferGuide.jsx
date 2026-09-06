import { Reveal } from '@/components/Motion';

export default function SpecialOfferGuide({ eventName }) {
  return (
    <section className="bg-white py-20">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Special offer guide</p>
          <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Special Occasion Group Travel: Plan and Book Your Group Flights with Ease
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 space-y-10 text-[16px] leading-relaxed text-navy/70 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:text-navy [&_h3]:mb-3 [&_strong]:font-semibold [&_strong]:text-navy [&_p+p]:mt-4">
            <div>
              <p>
                Special occasions are often better when shared with family, friends, colleagues, and loved ones. If
                you are planning a <strong>{eventName}</strong> holiday, arranging flights for a group can make the
                journey more enjoyable — but coordinating everyone&apos;s travel can also be challenging.
              </p>
              <p>
                Our group travel specialists can help simplify the process by assisting you with{' '}
                <strong>flight options</strong>, <strong>group reservations</strong>, passenger coordination, and
                travel planning based on your group&apos;s requirements.
              </p>
            </div>

            <div>
              <h3>Plan Your Group Reservation Early</h3>
              <p>
                Popular holidays and special occasions are often busy travel periods. Flights can become limited as
                the travel date approaches, particularly when a large group needs to travel on the same flights or
                within similar schedules.
              </p>
              <p>
                Starting your group reservation <strong>early</strong> can give you more opportunities to compare
                airlines, departure times, routes, cabin classes, and available group fare options. This is
                particularly important for events, meetings and weddings, where travelers need to arrive at a
                destination by a specific date.
              </p>
            </div>

            <div>
              <h3>Consider Flexible Travel Dates</h3>
              <p>
                If your event schedule allows some flexibility, compare different departure and return dates.
                Traveling a day earlier or returning slightly later may provide <strong>additional flight choices</strong>{' '}
                and potentially different fare options.
              </p>
              <p>
                You can also consider different departure times or nearby airports when practical.{' '}
                <strong>Flexibility</strong> can be especially valuable during high-demand holiday periods.
              </p>
            </div>

            <div>
              <h3>Compare the Complete Travel Package</h3>
              <p>
                When arranging group flights, the lowest advertised fare isn&apos;t always the only factor to
                consider. Review the complete booking conditions, including <strong>baggage allowance</strong>,
                flight schedules, connections, seat availability, <strong>change and cancellation policies</strong>,
                and cabin class.
              </p>
              <p>
                For groups, keeping travelers on compatible itineraries can also make airport coordination and
                arrival arrangements easier.
              </p>
              <p>
                Whether you are arranging travel for a small family group or coordinating flights for a larger party,
                our team can help you explore suitable options based on your destination, dates, number of
                travelers, and preferred cabin.
              </p>
            </div>

            <div>
              <h3>Make Your Group Journey Easier</h3>
              <p>
                Organizing everyone&apos;s flight details can take considerable time, particularly during peak travel
                seasons. Working with a <strong>group travel specialist</strong> can help streamline the process and
                make it easier to compare available options.
              </p>
              <p>
                From finding suitable flight schedules to coordinating your group&apos;s reservation requirements, we
                are here to help make your special occasion travel planning simpler.
              </p>
              <p>
                Planning a group trip for your next {eventName}? <strong>Request a group travel quote today</strong>{' '}
                and let our team help you explore available flight options for your group.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
