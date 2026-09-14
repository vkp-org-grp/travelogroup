import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = { title: 'Terms & Conditions' };

export default function Terms() {
  return (
    <LegalPage title="Terms & conditions" updated="September 2026">
      <p>
        Please be advised of the following legally binding Terms and Conditions governing travel services arranged
        by {site.legalName} (&ldquo;the Company&rdquo;) dba {site.domain}, registered at {site.address.join(', ')},
        an independent travel agency specializing in group air travel. We are not an airline. Airlines named on this
        site operate the flights and set the fare rules that apply to your ticket.
      </p>
      <p>
        By authorizing payment, you agree to the total amount charged for your travel purchase, including
        applicable airfare, taxes, government-imposed fees, carrier-imposed charges, and the Company&apos;s service
        fees. Airline tickets and other travel services are subject to the applicable travel supplier&apos;s fare
        rules, Contract of Carriage, and policies regarding refunds, exchanges, cancellations, schedule changes,
        baggage, seating, and other travel-related matters. Unless otherwise required by applicable law, the
        Company&apos;s service fees are non-refundable once travel services have been arranged or tickets have been
        issued. However, the Company may, in its sole discretion, issue a full or partial refund of its service fees
        on a case-by-case basis. Any such discretionary refund does not create an obligation or precedent for future
        refunds.
      </p>
      <p>
        Customers are responsible for verifying the accuracy of passenger names, travel dates, and itinerary details
        before ticket issuance, as well as obtaining all required passports, visas, health documentation, and other
        travel documents. The Company is not liable for acts, omissions, delays, cancellations, schedule changes,
        overbooking, strikes, weather events, government actions, supplier insolvency, or other events beyond its
        reasonable control. Nothing in this invoice limits or waives any rights or remedies available under
        applicable federal or state law or applicable payment network rules. By completing your purchase, you
        acknowledge that you have read and agree to these Terms and Conditions.
      </p>

      <div>
        <h2>Scope of this agreement</h2>
        <p>
          This Agreement describes the terms and conditions applicable to the services available through this Site
          (&ldquo;Site&rdquo;) and through our offices. This Agreement describes Your responsibilities and, among
          other things, limits the liability of {site.legalName}. Before submitting a travel information request
          and/or using any of the services provided by this Site, please read all of this Agreement carefully. By
          accessing any areas of this Site or by using our services, users (&ldquo;Users&rdquo; or &ldquo;You&rdquo;)
          agree to be legally bound and to abide by these Terms and Conditions. If You do not agree with any part of
          these Terms and Conditions, you do not have permission to use our Site and You MUST NOT USE THIS SITE OR
          OUR SERVICES.
        </p>
        <p>
          We reserve the right, in its sole discretion, to amend this Agreement at any time by posting the amended
          terms on this Site or by providing You with a copy of the amended agreement. The amended terms shall be
          effective from and after the earlier of the date that they are posted on the Site or otherwise provided to
          You.
        </p>
      </div>

      <div>
        <h2>Intellectual property and content</h2>
        <p>
          You, the User, acknowledge that all content included on this Site or in documents received by personal
          delivery, mail, e-mail or fax, including the information, data, software, photographs, graphs, video,
          typefaces, graphics, music, sounds, images, illustrations, maps, designs, icons, written and other
          material and compilations (collectively &ldquo;Content&rdquo;) are intellectual property and copyrighted
          works of {site.legalName} and/or various third party providers (&ldquo;Providers&rdquo;). Reproductions or
          storage of information or works retrieved from this Site, in all forms, media and technologies now
          existing or hereafter developed, is subject to the U.S. Copyright Act of 1976, Title 17 of the United
          States Code.
        </p>
      </div>

      <div>
        <h2>Trademarks and service marks</h2>
        <p>
          Trademarks and service marks of {site.name}, and other product and company names identified on this Site,
          may be the trademark, trade name, service mark, logo, symbol or other proprietary designation of a third
          party. The use of the name, trademark, trade name, service mark, logo, symbol or other proprietary
          designation or marking of or belonging to any third party, and the availability of specific goods or
          services from such third party through {site.name}, should not be construed as an endorsement or
          sponsorship of {site.name} by any such third party, or the participation by such third party in the
          offering of goods, services or information through {site.name}.
        </p>
        <p>
          The services of {site.name} are intended for personal or wholesale use. The content and information given
          to you, including without limitation, price and availability of travel services, as well as the
          infrastructure used to provide such content and information, is proprietary to {site.name} or its
          suppliers and providers. Accordingly, as a condition of using our services, you agree not to use this Site
          or its contents or information for any commercial or non-personal purpose (direct or indirect) or for any
          purpose that is unlawful or prohibited by these Terms &amp; Conditions. You agree not to modify, copy,
          distribute, transmit, display, perform, reproduce, publish, license, create derivative works from,
          transfer, or sell or re-sell any information, software, products, or services obtained from this Site.
        </p>
        <p>
          In addition, you agree not to access, monitor or copy any content or information of this site using any
          robot, spider, scraper or other automated means or any manual process for any purpose without express
          written permission of {site.name}. Airline names, logos, and trademarks belong to their owners and appear
          here only to describe the group fares we can arrange.
        </p>
      </div>

      <div>
        <h2>No warranties</h2>
        <p>
          Unless a Provider has agreed otherwise, all products, services, advice, merchandise, and information
          available through this Site or by {site.name} are provided on an &ldquo;as is&rdquo;, &ldquo;as
          available&rdquo; basis without warranties of any kind, either expressed or implied, including but not
          limited to, warranties of title or implied warranties of merchantability or fitness for a particular
          purpose. Without limiting the above, no warranty or guarantee is made regarding the availability of
          products and/or services through this Site or, where applicable, at any participating retailer or
          retailer location; that use of this Site and all software, products or services associated with this Site
          will be error free; regarding the results that may be obtained from the use of this Site; regarding the
          completeness, accuracy, reliability or quality of any information content, data, service, advice or
          merchandise provided or available through this Site; or regarding the performance or non-performance of
          this Site. You expressly agree that the use of this Site and the services provided by {site.name} is at
          Your sole risk.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p className="font-semibold uppercase text-navy/80">
          In no event shall {site.name}, including its respective officers, directors, employees, members,
          representatives, affiliates, or providers (collectively, the &ldquo;Covered Parties&rdquo;), be liable for
          any injury, death, loss, claim, damage, act of God, accident, delay, or any special, exemplary, punitive,
          incidental or consequential damages of any kind, whether based in contract, tort or otherwise, which arise
          out of or are in any way connected with any use of this Site or with any delay or inability to use this
          Site, or for any information, software, products or services obtained through this Site, even if a
          Covered Party has been advised of the possibility of such damages.
        </p>
      </div>

      <div>
        <h2>Force majeure and provider failures</h2>
        <p>
          Further, the Covered Parties accept no responsibilities for any damage and/or delay due to provider
          cancellations, shortages, sickness, pilferage, labor disputes, machinery breakdown, quarantine, pandemic,
          government restraints, weather or causes beyond the Covered Parties&apos; control. No responsibility is
          accepted for any additional expense, omissions, delays, re-routing or acts of any governmental authority.
          No Covered Party shall be responsible for any provider&apos;s breach of any warranty including, but not
          limited to, implied warranties of fitness for a particular purpose or of merchantability, nor shall any
          Covered Party be responsible for any other wrongdoing of a Provider (including any liability in tort), as
          to any products and/or services available through this Site or by {site.name}. No Covered Party shall be
          responsible for any Provider&apos;s failure to comply with these Terms and Conditions nor for any
          Provider&apos;s failure to comply with applicable federal, state and local law including, without
          limitation, laws governing the sale, warranty, and return of perishables.
        </p>
      </div>

      <div>
        <h2>Liability cap and your comments</h2>
        <p>
          If, notwithstanding the above, a Covered Party is found liable for any loss or damage relating to the use
          of this Site or services provided by {site.name}, User agrees the liability of any such party shall in no
          event exceed the fee or charge to the User assessed by {site.name} in connection with the use of this
          Site.
        </p>
        <p>
          All comments, feedback, suggestions, and ideas disclosed, submitted or offered to a Covered Party in
          connection with Your use of this Site (collectively, &ldquo;Comments&rdquo;), shall be and remain the
          exclusive property of {site.name} and may be used by a Covered Party in any medium and for any purpose
          worldwide without obtaining Your specific consent. For example, Your Comments could be used on this Site
          for advertisement purposes. No Covered Party is under any obligation to maintain Your Comments (and the
          use of Your first name and first initial of Your last name with any comments) in confidence, to pay to you
          any compensation for any Comments submitted, or to respond to any of Your Comments. You agree you will be
          solely responsible for the content of any Comments you make.
        </p>
      </div>

      <div>
        <h2>Third-party links and resources</h2>
        <p>
          To the extent this site contains links to outside services and resources, any concerns regarding such
          services or resources should be directed to the particular outside service or resource provider. None of
          the Covered Parties guarantees or warrants the accuracy or completeness of the information or content
          included on the Web sites of these outside services and resources.
        </p>
      </div>

      <p className="font-display text-lg font-bold text-navy">Before booking with {site.name}, please read the following:</p>

      <div>
        <h2>Group fares and minimums</h2>
        <p>
          Group rates apply to parties of {site.minGroupSize} or more passengers traveling on the same itinerary.
          Fares are quoted against live airline availability and are not guaranteed until a deposit is paid and the
          seat block is confirmed.
        </p>
      </div>

      <div>
        <h2>Deposits, names, and final payment</h2>
        <ul>
          <li>A deposit typically holds the group seat block while final passenger names are confirmed.</li>
          <li>Name changes after ticketing may carry an airline fee, or may not be possible — confirmed on your call.</li>
          <li>Final payment and ticketing deadlines are set by the airline&apos;s group contract for your booking.</li>
        </ul>
      </div>

      <div>
        <h2>Changes and cancellations</h2>
        <p>
          What can be changed, and what it costs, is governed by the airline&apos;s group fare rules. Our service
          fee for handling a change is separate from any airline penalty.
        </p>
      </div>

      <div>
        <h2>SMS communications</h2>
        <p>
          If you opt in to text messages, you may receive booking-related texts from {site.legalName}. Message
          frequency varies. Reply STOP to opt out, HELP for assistance. Message and data rates may apply.
        </p>
      </div>

      <div>
        <h2>Liability</h2>
        <p>
          We are responsible for arranging your group booking correctly. We are not responsible for airline delays,
          cancellations, schedule changes, or lost baggage — these are governed by the operating airline.
        </p>
      </div>

      <div>
        <h2>Check-in of flights</h2>
        <p>
          Traveling passengers may check in and obtain boarding passes for domestic/international travel within 24
          hours of the flight time. For information regarding an airline&apos;s checked baggage policies, please
          visit that airline&apos;s website. Travelers must present a government-issued photo ID with either a
          boarding pass or a priority verification card at the security screening checkpoint. Please remember flight
          details are subject to change. To check a flight&apos;s status, gate, or departure and arrival time, go to
          the airline&apos;s website and enter the flight information in the Gates and Times search area. In order
          to receive automatic notifications of flight changes, look for the Flight Status Notifications section on
          the airline&apos;s website homepage and enter the required flight and contact information.
        </p>
      </div>

      <div>
        <h2>Travel insurance</h2>
        <p>
          {site.name} strongly suggests you purchase separate travel insurance to cover possible additional costs.
          If you choose not to or fail to purchase travel insurance, You are fully responsible for any costs related
          to the cancellation or delay of your travel purchase. Refunds are not possible for any reason, so please
          protect Your travel investment with travel insurance. Comprehensive travel insurance benefits may include
          trip cancellation, interruption, travel delay, lost baggage, worldwide health &amp; medical coverage,
          emergency medical evacuation, hurricane protection, terrorism and more.
        </p>
      </div>

      <div>
        <h2>Data protection notice</h2>
        <p>
          Your personal data will be processed in accordance with the applicable carrier&apos;s privacy policy and,
          if your booking is made via a reservation system provider (&ldquo;GDS&rdquo;), with its privacy policy.
          You should read this documentation, which applies to your booking and specifies, for example, how your
          personal data is collected, stored, used, disclosed, and transferred.
        </p>
      </div>

      <div>
        <h2>Notice of baggage liability limitations</h2>
        <p>
          For domestic travel between points within the United States (except for domestic portions of
          international journeys), an airline&apos;s liability for loss of, damage to, or delay in delivery of a
          customer&apos;s checked baggage is limited to $3,800 per ticketed customer unless a higher value is
          declared in advance and additional charges are paid (not applicable to wheelchairs or other assistive
          devices). For such travel, airlines assume no liability for high value, fragile, perishable, or otherwise
          excluded items; excess valuation may not be declared on certain types of valuable articles. Further
          information may be obtained from the carrier.
        </p>
        <p>
          For international travel governed by the Warsaw Convention (including the domestic portions of the trip),
          maximum liability is approximately 640 USD per bag for checked baggage, and 400 USD per passenger for
          unchecked baggage. For international travel governed by the Montreal Convention (including the domestic
          portions of the trip), maximum liability is 1,288 SDRs per passenger for baggage, whether checked or
          unchecked.
        </p>
        <p>
          For baggage lost, delayed, or damaged in connection with domestic travel, the airline requires that
          customers provide preliminary notice within 24 hours after arrival of the flight on which the baggage was
          or was to be transported and submit a written claim within 45 days of the flight. For baggage damaged or
          delayed in connection with most international travel (including domestic portions of international
          journeys), the Montreal Convention and the airline require customers to provide carriers written notice as
          follows: (a) for damaged baggage, within seven days from the date of receipt of the damaged baggage; (b)
          for delayed baggage, within 21 days from the date the baggage should have been returned to the customer.
          Please refer to the applicable airline&apos;s Contract of Carriage for important information relating to
          baggage and other limitations of liability.
        </p>
      </div>

      <div>
        <h2>Seller of Travel disclosures</h2>
        <p>
          The Company is registered as a California Seller of Travel (Registration No. CST 2173867-50). Registration
          as a Seller of Travel does not constitute approval by the State of California. California law requires
          certain sellers of travel to have a trust account or bond. This business has a bond issued by Westfield
          National Insurance Company in the amount of $10,000. The Company participates in the Travel Consumer
          Restitution Corporation (TCRC No. 710561). Any disclosures required by the California Seller of Travel
          Law, including any applicable Travel Consumer Restitution Corporation (TCRC) notice, are provided in
          accordance with applicable California law.
        </p>
      </div>

      <div>
        <h2>California Travel Consumer Restitution Fund (TCRF) notice</h2>
        <p>
          This transaction is covered by the California Travel Consumer Restitution Fund (TCRF) if the seller of
          travel was registered and participating in the TCRF at the time of sale and the passenger is located in
          California at the time of payment. Eligible passengers may file a claim with TCRF if the passenger is owed
          a refund of more than $50 for transportation or travel services which the seller of travel failed to
          forward to a proper provider or such money was not refunded to you when required. The maximum amount which
          may be paid by the TCRF to any one passenger is the total amount paid on behalf of the passenger to the
          seller of travel, not to exceed $15,000.
        </p>
        <p>
          A claim must be submitted to the TCRF within 12 months after the scheduled completion date of the travel.
          A claim must include sufficient documentation to prove your claim and a $35 processing fee. Claimants must
          agree to waive their right to other civil remedies against a registered participating seller of travel for
          matters arising out of a sale for which you file a TCRF claim. You may request a claim form by writing to:
          Travel Consumer Restitution Corporation, 468 Manzanita Ave., Suite 1, Chico, CA 95926, or by visiting{' '}
          <a className="font-semibold text-navy underline" href="https://www.tcrcinfo.org" target="_blank" rel="noopener noreferrer">
            www.tcrcinfo.org
          </a>
          . For passengers purchasing from outside California: this transaction is not covered by the California
          Travel Consumer Restitution Fund.
        </p>
      </div>

      <div>
        <h2>No dispute clause</h2>
        <p>
          Once services are issued — whether tickets, itineraries, or any related services — customers agree to
          contact the Company on the direct line number ({' '}
          <a className="font-semibold text-navy underline" href={site.phoneHref}>{site.phone}</a>
          {' '}) or email{' '}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>{site.email}</a>{' '}
          before initiating a payment dispute so that any billing concerns may be reviewed and resolved promptly.
          Nothing in these terms limits any rights available under applicable law or payment network rules. This
          includes, but is not limited to, claims related to dissatisfaction with the service, perceived
          overcharges, or changes in travel plans.
        </p>
      </div>

      <div>
        <h2>Legal recourse</h2>
        <p>
          Any attempt to reverse, dispute, or chargeback a transaction in violation of this policy will be met with
          immediate legal action, including but not limited to, collection efforts, reporting to credit bureaus, and
          litigation under applicable U.S. law. The Company reserves the right to seek full restitution, including
          legal fees and costs incurred, from any party attempting to violate this policy.
        </p>
      </div>

      <div>
        <h2>Disabilities</h2>
        <p>
          Any preexisting physical, mental or emotional disability that may require attention or treatment must be
          reported in writing prior to the beginning of travel planning.
        </p>
      </div>

      <div>
        <h2>Forms of payment</h2>
        <p>
          {site.name} accepts major credit cards, PayPal, and wire transfers. The &ldquo;Total Charges&rdquo; that
          you will pay for using our services will always be disclosed to you before you are asked for final
          payment.
        </p>
      </div>

      <div>
        <h2>Chargeback policy</h2>
        <p>
          If You have a complaint about any service we provide, please contact us first. Customer satisfaction is
          very important to us, and we strive to stand behind our products and services that we sell. We will make
          every attempt to ensure that you are completely satisfied with the services we&apos;ve provided you.{' '}
          {site.name} considers credit card or PayPal chargebacks to be fraud if you made no reasonable effort to
          notify us that a problem existed, or to resolve or clarify a situation or matter. You agree that you will
          not chargeback any amounts charged to your credit card or PayPal by {site.name}. If You chargeback a
          credit card or PayPal charge for a payment initiated by you, You agree that we may recover the amount of
          the chargeback, as well as the chargeback fee of minimum $50 by any means we deem necessary.
        </p>
        <p>
          No chargebacks for trip delays, changes or cancellations. Your verbal communication of your credit card or
          PayPal details to an employee of {site.name} is a binding agreement for charging your credit card or
          PayPal account. As such, you waive any right to a chargeback in the case of trip delays, changes, or
          cancellations for any cause (except fraud), including a Force Majeure event, and You agree to the refund
          policies and procedures as outlined in the terms and conditions of the suppliers operating components of
          Your trip. In the event that you attempt without {site.name}&apos;s prior written authorization to
          chargeback, reverse, or recollect a trip payment already made, {site.name} reserves the right to collect
          all additional costs, fees, and expenses associated with such chargeback, reversal, or recollection
          including, but not limited to, attorney fees.
        </p>
      </div>

      <div>
        <h2>Service issues</h2>
        <p>
          Proper protocol must be followed to report any issues. Failure to do so will eliminate our ability to
          properly handle the issue, and {site.name} is not responsible for any loss that occurs due to the issue.
        </p>
      </div>

      <div>
        <h2>Exchange rate</h2>
        <p>
          In the event of currency exchange fluctuations between the U.S. Dollar and the destination currency,{' '}
          {site.name} reserves the right to adjust accordingly the cost of the &ldquo;trip&rdquo; or
          &ldquo;trips&rdquo;. Your currency exchange rate is not locked until final payment.
        </p>
      </div>

      <div>
        <h2>Your travel specialist</h2>
        <p>
          {site.name} will assign a travel specialist to assist you throughout the planning of your trip. You are
          responsible to supply any flight schedules, passport names or information needed to plan your trip in a
          timely manner. {site.name} is not responsible for delays caused by information not given to us in a
          timely manner. If you have any questions about this, please call us — we will be happy to answer any
          questions you have. Every reasonable effort will be made by {site.name} to supply itineraries, services,
          and accommodations as outlined. If these cannot be supplied due to causes beyond {site.name}&apos;s
          control, {site.name} reserves the right without prior notice to substitute or delete such service and
          accommodations.
        </p>
      </div>

      <div>
        <h2>Acceptance of terms</h2>
        <p>
          By completing a transaction with the Company, you fully accept and agree to these terms. This agreement is
          binding and enforceable under the laws of the United States, and any legal action relating to these terms
          shall be brought exclusively in the state or federal courts located in Sacramento County, California,
          unless applicable law requires otherwise.
        </p>
      </div>

      <div>
        <h2>Disclaimer</h2>
        <p>
          The Company is an independent third-party travel agency and is not affiliated with, endorsed by,
          sponsored by, or acting on behalf of any airline. Any reference to an airline&apos;s name, trademarks,
          logos, or other intellectual property is used solely for descriptive purposes to identify the travel
          services being arranged and does not imply any sponsorship, endorsement, partnership, agency, or
          affiliation. For official airline services, please visit the applicable airline&apos;s official website.
        </p>
      </div>

      <div>
        <h2>Entire agreement, modification, no waiver</h2>
        <p>
          These Terms &amp; Conditions constitute the entire and only understanding between the parties and replace
          any prior understandings or agreements (whether oral or written) relating to the subject matter hereof.
          The failure of {site.name} to exercise any of its rights shall not be construed as a waiver or
          relinquishment of the future performance of any of its rights, and your obligations with respect to such
          future performance shall continue in full force and effect.
        </p>
      </div>

      <div>
        <h2>Pandemics and states of emergency</h2>
        <p>
          In the event of health pandemics or states of emergency, the suppliers operating your trip may change,
          delay, or cancel the services they offer for your trip at their sole discretion and with little or no
          advance notice. Government officials in the destinations you visit may change entry requirements, health
          protocols, and other rules for inbound visitors (including health screenings and tests and mandatory
          quarantines) at their discretion and with little or no advance notice. You agree that {site.name} has no
          control over these decisions and therefore {site.name} shall not be liable for any loss or damages caused
          by such changes, delays, or cancellations. You understand and agree that it is your responsibility to
          comply with the government&apos;s rules in the destinations you are visiting that are in effect during
          your trip.
        </p>
      </div>

      <div>
        <h2>Force majeure</h2>
        <p>
          {site.name} shall not be deemed to be in breach of any terms and conditions or otherwise liable to you,
          and shall not be required to provide any refund due to delay in performance or non-performance of any of{' '}
          {site.name}&apos;s obligations hereunder due to any circumstances beyond {site.name}&apos;s control,
          including, but not limited to, acts of God, explosion, flood, forceful wind, fire, accident, war or threat
          of war (declared or undeclared), acts of terrorism, sabotage, insurrection, riots, strikes, civil
          disturbance, sickness, epidemics, pandemics, quarantines, government intervention, weather conditions,
          defects in machinery and vehicles, delays, bankruptcy of supplier, or other unforeseeable events
          (&ldquo;Force Majeure&rdquo;). If {site.name} and/or any of its suppliers are affected by force majeure,{' '}
          {site.name} shall be entitled to, and may in its sole and absolute discretion, and without liability
          therefore, vary or cancel any itinerary or arrangement in relation to Your trip.
        </p>
      </div>

      <div>
        <h2>Hazardous materials</h2>
        <p>
          Federal law forbids the carriage of hazardous materials on board aircraft in your luggage or on your
          person. A violation can result in five years&apos; imprisonment and penalties of $250,000 or more (49
          U.S.C. 5124). Hazardous materials include explosives, compressed gases, flammable liquids and solids,
          oxidizers, poisons, corrosives, and radioactive materials. Common examples of hazardous materials/dangerous
          goods include spare or loose lithium batteries, fireworks, strike-anywhere matches, aerosols, pesticides,
          bleach, and corrosive materials. Additional information can be found on the applicable airline&apos;s
          website.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{' '}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>{site.email}</a>
          {' '}·{' '}
          <a className="font-semibold text-navy underline" href={site.phoneHref}>{site.phone}</a>
        </p>
      </div>
    </LegalPage>
  );
}
