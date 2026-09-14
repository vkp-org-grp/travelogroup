import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="September 6, 2026">
      <p>
        Below you will find the updated Privacy Policy for {site.name} ({site.legalName}). It explains what we
        collect when you use {site.domain} or call our group desk, why we collect it, and what you can ask us to do
        with it.
      </p>
      <p>
        We value your trust and make it a high priority to ensure the security and confidentiality of the personal
        information you provide to us. Please read this policy to learn about our privacy practices. By visiting
        this website, you are accepting the practices described herein.
      </p>

      <div id="information-we-collect">
        <h2>What information we collect from you</h2>
        <p>
          <strong>In General.</strong> We receive and store any information you enter on our website or give us in
          any other way. This includes information that can identify you (&ldquo;personal information&rdquo;),
          including your first, middle, and last name, phone number, postal and email addresses, group size, travel
          dates, and all passenger details once confirmed.
        </p>
        <p>
          <strong>Call records:</strong> calls may be recorded for training and dispute resolution &mdash;
          you&apos;ll be told at the start of the call.
        </p>
        <p>
          <strong>SMS opt-in:</strong> if you check the text-message consent box, your number is used for
          booking-related texts only.
        </p>
      </div>

      <div id="how-we-use">
        <h2>How we use your information</h2>
        <p>We use information about you for the following general purposes:</p>
        <ul>
          <li>To provide you with the services you request.</li>
          <li>To quote group fares, hold seat blocks, and issue tickets once confirmed.</li>
          <li>To contact you about a group enquiry you started.</li>
          <li>To manage your account, including processing bills and providing travel notifications.</li>
          <li>To communicate with you in general, and to respond to your questions and comments.</li>
          <li>To measure interest in and improve our products, services, and website.</li>
          <li>To otherwise customize your experience with this website.</li>
          <li>To reward you as part of any reward and recognition program you choose to join.</li>
          <li>To solicit information from you, including through surveys.</li>
          <li>To resolve disputes, collect fees, or troubleshoot problems.</li>
          <li>To prevent potentially prohibited or illegal activities and enforce our Terms of Use.</li>
          <li>As otherwise described to you at the point of collection.</li>
        </ul>
      </div>

      <div id="who-we-share-with">
        <h2>With whom we share your information</h2>
        <p>This website may share your information with the following entities:</p>
        <ul>
          <li>
            Suppliers, such as airline and activity providers, who fulfill your travel reservations. Throughout this
            site, all services provided by a third-party supplier are described as such. By making a reservation
            through this site, you are authorizing us to disclose to suppliers the information required to complete
            the booking and deliver the related travel.
          </li>
          <li>
            Third-party vendors who provide services or functions on our behalf, including credit card processing,
            business analytics, customer service, marketing, distribution of surveys or sweepstakes programs, and
            fraud prevention. We may also authorize third-party vendors to collect information on our behalf,
            including as necessary to operate features of our website or to facilitate the delivery of online
            advertising tailored to your interests. Third-party vendors have access to and may collect information
            only as needed to perform their functions and are not permitted to share or use the information for any
            other purpose. They are also required to follow the same data security practices that we ourselves
            adhere to.
          </li>
        </ul>
        <p>We also may share your information:</p>
        <ul>
          <li>
            In response to subpoenas, court orders, or other legal process; to establish or exercise our legal
            rights; to defend against legal claims; or as otherwise required by law. In such cases we reserve the
            right to raise or waive any legal objection or right available to us.
          </li>
          <li>
            When we believe it is appropriate to investigate, prevent, or take action regarding illegal or suspected
            illegal activities; to protect and defend the rights, property, or safety of our company or this
            website, our customers, or others; and in connection with our Terms of Service and other agreements.
          </li>
          <li>
            In connection with a corporate transaction, such as a divestiture, merger, consolidation, or asset sale,
            or in the unlikely event of bankruptcy.
          </li>
        </ul>
        <p>
          Other than as set out above, you will have an opportunity to choose not to have us share such information.
          You may ask for a copy of your data, ask us to correct it, or ask us to delete it where no legal
          obligation requires us to keep it &mdash; write to{' '}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <p>
          We also may share aggregate or anonymous information with third parties, including advertisers and
          investors &mdash; for example, the number of visitors our website receives. This information does not
          contain any personal information and is used to develop content and services we hope you will find of
          interest.
        </p>
      </div>

      <div id="your-choices">
        <h2>Your choices with respect to collection and use of your information</h2>
        <ul>
          <li>
            As discussed above, you can choose not to provide us with any information, although it may be needed to
            book travel or to take advantage of certain features offered on this site.
          </li>
          <li>
            You will be given the opportunity to unsubscribe from commercial emails in any such message that we send
            you. If you are a registered member, you can also modify your choice at any time on the Member Profile
            page. Please note that we reserve the right to send you other communications, including service
            announcements, administrative messages, and surveys relating either to your account or to your
            transactions on this site, without offering you the opportunity to opt out of receiving them.
          </li>
          <li>
            You may have the opportunity on our website to provide a mobile number in order to receive day-of-travel
            flight alerts. You may discontinue these alerts at any time.
          </li>
          <li>
            The Help portion of the toolbar on most browsers will tell you how to prevent your browser from
            accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to
            disable cookies altogether. Please note that if you refuse to accept cookies from this site, you will
            not be able to access portions of our site.
          </li>
        </ul>
      </div>

      <div id="cookies">
        <h2>Cookies and other technologies</h2>
        <p>
          Cookies are small data text files and can be stored on your computer&apos;s hard drive (if your Web
          browser permits). This website uses cookies for the following general purposes:
        </p>
        <ul>
          <li>
            To help us recognize your browser as a previous visitor and save and remember any preferences that may
            have been set while your browser was visiting our site. For example, if you register on our site, we may
            use cookies to remember your registration information, so you do not need to log into our site each
            time you visit. We also may record your password in a cookie, if you checked the box entitled
            &ldquo;Sign me in automatically next time.&rdquo; Please note that member IDs, passwords, and any other
            account-related data included in such cookies are encrypted for security purposes. Unless you register
            with us, these cookies will not contain any personal information.
          </li>
          <li>
            To help us customize the content and advertisements provided to you on this website and on other sites
            across the Internet. For example, when you access a page on our website, a cookie is automatically set
            by us, our service providers, or our partners to recognize your browser as you navigate on the Internet
            and to present you with information and advertising based on your apparent interests.
          </li>
          <li>
            To help measure and research the effectiveness of website features and offerings, advertisements, and
            email communications (by determining which emails you open and act upon).
          </li>
        </ul>
        <p>
          The Help portion of the toolbar on most browsers will tell you how to prevent your browser from accepting
          new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies
          altogether. Please note that if you refuse to accept cookies, you may not be able to access many of the
          travel tools offered on our sites.
        </p>
        <p>
          This site uses invisible reCAPTCHA technology to detect bots. reCAPTCHA works by collecting hardware and
          software information, such as device and application data, and the results of integrity checks, and sends
          that data to a reCAPTCHA service provider for analysis.
        </p>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at{' '}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>

      <div id="tailored-advertising">
        <h2>Display of tailored advertising / your choices</h2>
        <p>
          <strong>Data collected by this website to serve you with relevant advertising.</strong> {site.name} is
          committed to providing you with relevant content and information. To do this, we may, through cookies and
          other technologies, collect information about your travel-related searches, such as whether you are
          looking for airline flights. We use this information, together with other information we have collected
          about you, to serve you with ads, on our website or elsewhere online, that match your apparent interests.
        </p>
        <p>
          Please note that we do not combine the information we collect about your travel-related searches on this
          website with personal information (such as email address) to serve you with ads across other websites. We
          also do not share your personal information with third parties so they can serve you with advertisements.
        </p>
        <p>
          <strong>Data collected by business partners and ad networks to serve you with relevant advertising.</strong>{' '}
          The advertisements you see on this website are served by us or by our service providers. But we also allow
          third parties to collect information about your online activities through cookies and other technologies.
          These third parties include (1) business partners, who collect information when you view or interact with
          one of their advertisements on our sites; and (2) advertising networks, which collect information about
          your interests when you view or interact with one of the advertisements they place on many different
          websites on the Internet. The information gathered by these third parties is used to make predictions
          about your characteristics, interests or preferences and to display advertisements on our sites and
          across the Internet tailored to your apparent interests. We do not permit these third parties to collect
          personal information about you (such as email address) on our site, nor do we share with them any
          personal information about you.
        </p>
        <p>
          Please note that we do not have access to or control over cookies or other technologies these third
          parties may use to collect information about your interests, and the information practices of these third
          parties are not covered by this Privacy Policy.
        </p>
      </div>

      <div id="how-we-protect">
        <h2>How we protect your information</h2>
        <p>
          We want you to feel confident about using this website to make travel arrangements, and we are committed
          to protecting the information we collect. While no website can guarantee security, we have implemented
          appropriate administrative, technical, and physical security procedures to help protect the personal
          information you provide to us. For example, only authorized employees are permitted to access personal
          information, and they may only do so for permitted business functions.
        </p>
      </div>

      <div id="external-links">
        <h2>External links</h2>
        <p>
          If any part of this website links you to other sites, those sites do not operate under this Privacy
          Policy. We recommend you examine the privacy statements posted on those other websites to understand
          their procedures for collecting, using, and disclosing personal information.
        </p>
      </div>

      <div id="contact-us">
        <h2>How you can contact us</h2>
        <p>
          If you have questions about either this Privacy Policy (or your travel planning or purchases), please
          email us at{' '}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{' '}
          or contact us at {site.legalName} &bull; {site.address.join(', ')} &bull;{' '}
          <a className="font-semibold text-navy underline" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>
        <p>This Privacy Policy is effective as of September 6th, 2026.</p>
      </div>
    </LegalPage>
  );
}
