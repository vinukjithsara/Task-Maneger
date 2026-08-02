import LegalLayout from "../components/LegalLayout";

const LegalNotice = () => (
  <LegalLayout pill="Legal" title="Legal Notice" updated="August 2, 2026">
    <section>
      <h2>Operator</h2>
      <p>
        WorkTrack is operated as a productivity and task management service.
        For any legal correspondence, please use the contact details below.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        Email: hello@worktrack.com
        <br />
        Phone: +94 77 123 4567
        <br />
        Address: 123 Productivity Lane, Colombo 07, Sri Lanka
      </p>
    </section>

    <section>
      <h2>Purpose of This Site</h2>
      <p>
        WorkTrack provides tools to help individuals and teams plan, track,
        and complete tasks. The information and features on this site are
        provided for general productivity use.
      </p>
    </section>

    <section>
      <h2>Disclaimer</h2>
      <p>
        WorkTrack is provided "as is" without warranties of any kind, express
        or implied. We do not guarantee uninterrupted or error-free
        operation of the service, and we are not liable for any loss of
        data or damages arising from the use of this site.
      </p>
    </section>

    <section>
      <h2>Intellectual Property</h2>
      <p>
        The WorkTrack name, logo, and site content are the property of
        WorkTrack unless otherwise stated. You may not reproduce or
        redistribute this content without permission.
      </p>
    </section>
  </LegalLayout>
);

export default LegalNotice;
