import PageHeader from "@/components/pageHeader/PageHeader";

export const metadata = {
  title: "Privacy Policy | JoyHand Energy",
  description: "Learn how JoyHand collects, uses, and protects your personal information when you use our website and manufacturing services.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: March 2025"
        pageImage="/images/pageHeadImg/legal.jpg"
      />
      <div className="container legal__container">
        <div className="legal__content">
          <section className="legal__section">
            <h2>1. Information We Collect</h2>
            <p>
              When you request a quote, contact us, or use our services, we may collect:
            </p>
            <ul>
              <li>Name, email address, phone number, company name</li>
              <li>Order volume, product specifications, project details</li>
              <li>Technical requirements for OEM/ODM manufacturing</li>
              <li>IP address, browser type, and usage data (via cookies)</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul>
              <li>Process and respond to your quote requests</li>
              <li>Provide manufacturing proposals and engineering support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>3. Sharing Your Information</h2>
            <p>
              JoyHand does not sell your personal data. We may share it with:
            </p>
            <ul>
              <li>Our subsidiaries and affiliates (USA, China, Australia, Nigeria)</li>
              <li>Service providers who assist our operations (e.g., email delivery, analytics)</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>4. Data Security</h2>
            <p>
              We implement industry‑standard measures to protect your data, including encryption, access controls, and secure servers. However, no transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="legal__section">
            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul>
              <li>Access, correct, or delete your personal data</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:privacy@joyhand.com">privacy@joyhand.com</a>.</p>
          </section>

          <section className="legal__section">
            <h2>6. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience. For more details, see our <a href="/cookie-policy">Cookie Policy</a>.
            </p>
          </section>

          <section className="legal__section">
            <h2>7. Children’s Privacy</h2>
            <p>
              Our website is not intended for children under 16, and we do not knowingly collect their data.
            </p>
          </section>

          <section className="legal__section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. The “Last updated” date indicates the latest revision.
            </p>
          </section>

          <section className="legal__section">
            <h2>9. Contact Us</h2>
            <p>
              JoyHand Energy<br />
              Attn: Data Protection Officer<br />
              Email: <a href="mailto:privacy@joyhand.com">privacy@joyhand.com</a><br />
              Address: 2530 E South Blvd, Montgomery, AL 36116, USA
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}