import LegalLayout from "../components/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout pill="Cookies" title="Cookie Policy" updated="August 2, 2026">
    <section>
      <h2>What This Page Covers</h2>
      <p>
        WorkTrack does not currently use tracking or advertising cookies. To
        keep you signed in, we use your browser's local storage instead of
        cookies, which keeps a small amount of account information (like
        your user ID and display name) on your own device between visits.
      </p>
    </section>

    <section>
      <h2>Local Storage vs. Cookies</h2>
      <p>
        Unlike cookies, local storage is not automatically sent to our
        servers with every request — it's only read by the app in your
        browser to know that you're signed in. You can clear it at any time
        by logging out or clearing your browser's site data.
      </p>
    </section>

    <section>
      <h2>Third-Party Cookies</h2>
      <p>
        We don't embed third-party advertising or analytics cookies on
        WorkTrack. If this changes in the future, we'll update this page.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at hello@worktrack.com.
      </p>
    </section>
  </LegalLayout>
);

export default CookiePolicy;
