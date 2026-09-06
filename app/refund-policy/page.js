import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = { title: 'Refund Policy' };

export default function Refund() {
  return (
    <LegalPage title="Refund policy" updated="July 2026">
      <p>
        Refunds on group air tickets are governed by the group fare contract issued by the airline. {site.name}
        files and follows the request; the airline decides the outcome and holds the funds until it does.
      </p>
      <div>
        <h2>Deposits</h2>
        <p>
          Deposits paid to hold a group seat block are typically non-refundable once the block is confirmed with the
          airline, since the airline releases that inventory to us on that basis. Deposit terms are stated on your
          booking call before you pay.
        </p>
      </div>
      <div>
        <h2>After ticketing</h2>
        <ul>
          <li><strong>Refundable group fares</strong> — refunded to the original payment method, minus any airline penalty and our service fee.</li>
          <li><strong>Non-refundable group fares</strong> — usually no cash refund; many airlines issue a credit or voucher instead, minus a change fee.</li>
        </ul>
      </div>
      <div>
        <h2>If the airline cancels or reschedules</h2>
        <p>
          If the airline cancels the flight or makes a significant schedule change, the group is entitled to a
          refund of the unused tickets. We file that claim at no additional service fee.
        </p>
      </div>
      <div>
        <h2>How to request a refund</h2>
        <p>
          Call {site.phone} with your group booking reference, or email {site.email}. We confirm what your fare
          allows, file the request, and give you a reference number to track it.
        </p>
      </div>
      <div>
        <h2>Timelines</h2>
        <p>Card refunds typically post within 7–20 business days once the airline approves them. We follow up if it stalls.</p>
      </div>
    </LegalPage>
  );
}
