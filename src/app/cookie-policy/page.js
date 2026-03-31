import PageHeader from "@/components/pageHeader/PageHeader";

export const metadata = {
  title: "Cookie Policy | JoyHand Energy",
  description: "Understand how JoyHand uses cookies to improve your browsing experience and analyse site traffic.",
};

export default function CookiePolicyPage() {
  return (
    <main className="legal-page">
      <PageHeader
        title="Cookie Policy"
        subtitle="Last updated: March 2025"
        pageImage="/images/pageHeadImg/legal.jpg"
      />
      <div className="container legal__container">
        <div className="legal__content">
          <section className="legal__section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the website recognise your device and remember your preferences.
            </p>
          </section>

          <section className="legal__section">
            <h2>2. How We Use Cookies</h2>
            <p>
              JoyHand uses cookies to:
            </p>
            <ul>
              <li>Ensure the website functions properly (essential cookies)</li>
              <li>Analyse site traffic and user behaviour (analytics cookies)</li>
              <li>Remember your preferences (functional cookies)</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>3. Types of Cookies We Use</h2>
            <ul>
              <li><strong>Essential cookies:</strong> Required for navigation and core features (e.g., form submissions).</li>
              <li><strong>Analytics cookies:</strong> We use Google Analytics to understand how visitors interact with our site.</li>
              <li><strong>Functional cookies:</strong> Remember your choices (e.g., language preference).</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>4. Third‑Party Cookies</h2>
            <p>
              Some cookies are set by third‑party services we use, such as Google Analytics. These third parties may collect information about your online activity over time and across different websites.
            </p>
          </section>

          <section className="legal__section">
            <h2>5. Managing Cookies</h2>
            <p>
              You can control and/or delete cookies through your browser settings. However, disabling essential cookies may affect the functionality of our website. To learn more, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
            </p>
          </section>

          <section className="legal__section">
            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy occasionally. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section className="legal__section">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at <a href="mailto:privacy@joyhand.com">privacy@joyhand.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}