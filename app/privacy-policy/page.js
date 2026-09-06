import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="July 2026">
      <p>
        This policy explains what {site.name} ({site.legalName}) collects when you use {site.domain} or call our
        group desk, why we collect it, and what you can ask us to do with it.
      </p>
      <div>
        <h2>What we collect</h2>
        <ul>
          <li>Details you give us: name, email, phone number, group size, travel dates, and passenger details once confirmed.</li>
          <li>Call records: calls may be recorded for training and dispute resolution — you'll be told at the start of the call.</li>
          <li>Site data: pages visited, approximate location from IP address, device and browser type.</li>
          <li>SMS opt-in: if you check the text-message consent box, your number is used for booking-related texts only.</li>
        </ul>
      </div>
      <div>
        <h2>Why we use it</h2>
        <ul>
          <li>To quote group fares, hold seat blocks, and issue tickets once confirmed.</li>
          <li>To contact you about a group enquiry you started.</li>
          <li>To meet legal, tax, and airline record-keeping obligations.</li>
        </ul>
      </div>
      <div>
        <h2>Who we share it with</h2>
        <p>
          Airlines and global distribution systems, so group tickets can be issued. Payment processors, so charges
          can be taken. Service providers who host this site under contract. We do not sell your personal data.
        </p>
      </div>
      <div>
        <h2>Your choices</h2>
        <p>
          Ask for a copy of your data, ask us to correct it, or ask us to delete it where no legal obligation
          requires us to keep it. Write to{' '}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
      <div>
        <h2>Dispute Resolution</h2>
        <p>
          We value our customers and are committed to resolving any concern as quickly and fairly as possible.
          Before initiating any formal legal proceedings, customers are required to contact us directly and provide
          us with a reasonable opportunity to investigate and resolve the dispute.
        </p>
        <p>
          Customers should first submit their complaint to our customer support team using the contact details
          provided on our website. We will review the matter and make reasonable efforts to reach an amicable
          resolution.
        </p>
        <p>
          Where a dispute cannot be resolved through our internal complaint-resolution process, the dispute shall be
          handled in accordance with the applicable dispute-resolution and arbitration provisions contained in our
          Terms &amp; Conditions, to the extent permitted by applicable law.
        </p>
        <p>
          Nothing in these terms is intended to restrict or waive any rights or remedies that cannot legally be
          excluded under applicable law.
        </p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>{site.legalName} · {site.address.join(', ')} · {site.phone} · {site.email}</p>
      </div>
    </LegalPage>
  );
}
