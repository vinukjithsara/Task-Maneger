import LegalLayout from "../components/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout pill="Privacy" title="Privacy Policy" updated="August 2, 2026">
    <section>
      <h2>Information We Collect</h2>
      <p>
        When you create a WorkTrack account, we collect your name, email
        address, and password. When you use the app, we store the tasks you
        create — including titles, descriptions, deadlines, and status — so
        we can display them back to you.
      </p>
    </section>

    <section>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To create and secure your account, and let you sign in.</li>
        <li>To show you your own tasks and dashboard.</li>
        <li>To send reminder emails about upcoming or overdue task deadlines.</li>
        <li>To power the built-in AI assistant, which reads your task list to answer your questions.</li>
      </ul>
    </section>

    <section>
      <h2>Data Storage & Security</h2>
      <p>
        Your data is stored in our database and is only accessible to you
        through your account. We take reasonable measures to protect your
        information, but no method of electronic storage is 100% secure.
      </p>
    </section>

    <section>
      <h2>Sharing of Information</h2>
      <p>
        We do not sell your personal information. Your data is not shared
        with third parties except where required to operate the service
        (for example, sending you reminder emails) or where required by law.
      </p>
    </section>

    <section>
      <h2>Your Rights</h2>
      <p>
        You can update your account details and profile picture at any time
        from your Profile page. To request deletion of your account and
        associated data, contact us using the details below.
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

export default PrivacyPolicy;
