import PageHeader from "@/components/pageHeader/PageHeader";

export const metadata = {
  title: "Terms of Service | JoyHand Energy",
  description: "Read the terms and conditions governing the use of JoyHand’s website and manufacturing services.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: March 2025"
        pageImage="/images/pageHeadImg/legal.jpg"
      />
      <div className="container legal__container">
        <div className="legal__content">
          <section className="legal__section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the JoyHand website (joyhand.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.
            </p>
          </section>

          <section className="legal__section">
            <h2>2. Services Provided</h2>
            <p>
              JoyHand offers information about our manufacturing capabilities, OEM/ODM services, product specifications, and contact forms. Any quote or proposal provided through our site is an invitation to offer; no binding contract is formed until a separate written agreement is signed.
            </p>
          </section>

          <section className="legal__section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this site – including text, graphics, logos, images, and software – is the property of JoyHand or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="legal__section">
            <h2>4. User Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use the site for any unlawful purpose</li>
              <li>Interfere with the site’s operation or security</li>
              <li>Submit false or misleading information</li>
              <li>Upload malicious code or attempt to gain unauthorized access</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, JoyHand shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site or our services. Our total liability shall not exceed the amount you paid to us, if any.
            </p>
          </section>

          <section className="legal__section">
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              The site and all information are provided “as is” without warranties of any kind. We do not warrant that the site will be uninterrupted, error‑free, or free of viruses.
            </p>
          </section>

          <section className="legal__section">
            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Alabama, USA, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="legal__section">
            <h2>8. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Continued use of the site after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="legal__section">
            <h2>9. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at <a href="mailto:legal@joyhand.com">legal@joyhand.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}