import { Reveal } from '@/components/Motion';

export default function PremiumClassGuide() {
  return (
    <section className="bg-white py-20">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Premium class guide</p>
          <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">Business Class Travel, Explained</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 space-y-10 text-[16px] leading-relaxed text-navy/70 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:text-navy [&_h3]:mb-3 [&_strong]:font-semibold [&_strong]:text-navy [&_p+p]:mt-4">
            <div>
              <h3>What Is Business Class? Complete Guide for First-Time Travelers</h3>
              <p>
                Business Class is a premium cabin designed to provide travelers with greater comfort, convenience,
                and personalized service than Economy Class. It is especially popular for long-haul and overnight
                flights. Depending on the airline and aircraft, Business Class may include a <strong>wider seat</strong>,{' '}
                <strong>additional legroom</strong>, <strong>priority check-in and boarding</strong>,{' '}
                <strong>airport lounge access</strong>, enhanced meals, and a <strong>higher baggage allowance</strong>.
                On many long-distance flights, Business Class seats can recline into <strong>fully flat beds</strong>,
                making it easier to rest during the journey.
              </p>
              <p>
                Travelers may also receive amenity kits, premium entertainment, and Wi-Fi on selected flights.
                Business Class benefits vary by airline, route, aircraft, and fare type. Before booking, compare the
                seat configuration, baggage allowance, lounge access, and ticket flexibility to make sure the fare
                meets your travel needs.
              </p>
            </div>

            <div>
              <h3>Business Class vs Premium Economy: Is It Worth the Extra Cost?</h3>
              <p>
                Premium Economy and Business Class both offer an upgrade over standard Economy, but the level of
                comfort and service can differ considerably. Premium Economy generally provides a wider seat, more
                legroom, additional recline, and improved onboard service. Business Class usually offers additional
                benefits such as <strong>lounge access</strong>, <strong>priority airport services</strong>, enhanced
                dining, and, on many long-haul aircraft, <strong>lie-flat seats</strong>.
              </p>
              <p>
                The biggest difference can be particularly noticeable on overnight flights, where a fully flat
                Business Class seat can make sleeping much easier. However, Business Class can cost considerably
                more, so it may not always be worth the extra expense for shorter journeys. Travelers should compare
                the actual fare difference and consider flight duration, aircraft, seat configuration, lounge access,
                baggage allowance, and ticket flexibility before deciding which cabin provides the best value.
              </p>
            </div>

            <div>
              <h3>What Do You Get with a Business Class Ticket?</h3>
              <p>
                A Business Class ticket can offer benefits throughout the entire travel experience, from the airport
                to the aircraft. Depending on the airline, passengers may receive{' '}
                <strong>dedicated check-in counters</strong>, <strong>priority boarding</strong>,{' '}
                <strong>lounge access</strong>, and <strong>priority baggage handling</strong>. Onboard, Business
                Class generally provides a wider seat, more personal space, enhanced dining, premium beverages, and
                improved entertainment.
              </p>
              <p>
                Many long-haul aircraft feature Business Class seats that convert into fully flat beds. Passengers
                may also receive amenity kits and additional baggage allowance. Some Business Class fares offer
                greater flexibility for flight changes or cancellations, although this depends on the specific fare
                rules. Benefits are not identical across airlines, so travelers should check what is included before
                booking. Comparing the seat, baggage allowance, lounge access, flexibility, and onboard services can
                help you choose the right Business Class ticket.
              </p>
            </div>

            <div>
              <h3>How Does Business Class Boarding Work?</h3>
              <p>
                Business Class passengers generally receive <strong>priority</strong> during the airport boarding
                process. The experience usually begins with dedicated check-in counters, followed by priority
                security or immigration services where available. Eligible passengers can often relax in an airport
                lounge before their flight.
              </p>
              <p>
                At the boarding gate, Business Class travelers are normally invited to board before most Economy
                passengers, although the exact boarding order depends on the airline and airport. Boarding passes may
                assign passengers to specific zones or groups. <strong>Priority boarding</strong> allows travelers to
                settle into their seats and store cabin baggage before the main boarding process becomes busy.
                However, Business Class passengers must still follow the airline&apos;s boarding deadline and arrive
                at the gate on time. Since procedures vary, travelers should check the instructions on their boarding
                pass and monitor airport announcements for gate or boarding changes.
              </p>
            </div>

            <div>
              <h3>Business Class Baggage Allowance Explained</h3>
              <p>
                Business Class passengers generally receive a more generous <strong>baggage allowance</strong> than
                Economy travelers, but the exact amount varies by airline, route, fare type, and frequent-flyer
                status. Airlines may use either a weight-based system or a piece-based system for checked baggage.
              </p>
              <p>
                Business Class passengers may also receive a higher cabin baggage allowance, although restrictions on
                the number, weight, and dimensions of bags still apply. Special items such as sports equipment,
                musical instruments, or oversized luggage may have separate rules. If your itinerary includes
                multiple airlines, baggage allowances can also differ. Before traveling, check the baggage allowance
                shown on your ticket, booking confirmation, or airline website. Weighing your luggage before leaving
                home and checking size restrictions can help avoid unexpected fees or delays at the airport.
              </p>
            </div>

            <div>
              <h3>Can You Upgrade from Economy to Business Class?</h3>
              <p>
                Many airlines allow eligible Economy passengers to upgrade to Business Class, subject to availability
                and fare conditions. Upgrade options can include paying an additional fee through the airline&apos;s
                website, mobile app, Manage Booking section, or airport counter. Some airlines also allow eligible
                travelers to use <strong>frequent-flyer miles</strong>, points, vouchers, or upgrade certificates.
              </p>
              <p>
                Selected airlines may offer bidding programs where passengers can make an offer for an available
                Business Class seat. However, not every Economy ticket qualifies for an upgrade, particularly certain
                restricted or discounted fares. Before purchasing an Economy ticket with the intention of upgrading
                later, check the airline&apos;s upgrade rules. Travelers should also compare the cost of upgrading
                with the price of purchasing Business Class initially. <strong>Availability is never guaranteed</strong>,
                particularly on popular routes and busy travel dates.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
