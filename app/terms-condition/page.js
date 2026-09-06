import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = { title: 'Terms & Conditions' };

export default function Terms() {
  return (
    <LegalPage title="Terms & conditions" updated="July 2026">
      <p>By using {site.domain} or booking through our group desk, you agree to these terms.</p>
      <div>
        <h2>Who we are</h2>
        <p>
          {site.name} is a service of {site.legalName}, an independent travel agency specializing in group air
          travel. We are not an airline. Airlines named on this site operate the flights and set the fare rules that
          apply to your ticket.
        </p>
      </div>
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
          <li>Final payment and ticketing deadlines are set by the airline\u2019s group contract for your booking.</li>
        </ul>
      </div>
      <div>
        <h2>Changes and cancellations</h2>
        <p>
          What can be changed, and what it costs, is governed by the airline\u2019s group fare rules. Our service fee
          for handling a change is separate from any airline penalty.
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
        <h2>Trademarks</h2>
        <p>Airline names, logos, and trademarks belong to their owners and appear here only to describe the group fares we can arrange.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>Questions about these terms: {site.email} · {site.phone}</p>
      </div>
    </LegalPage>
  );
}
