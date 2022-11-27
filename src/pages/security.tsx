import { FC } from 'react';

import SEO from 'components/common/Seo';
import Layout from 'components/layout';

const Security: FC = () => (
  <Layout isColorTheme>
    <SEO title='Security Policy' />
    <div className='security-container agreements'>
      <h1 className='responsive-title-1'>Security Policy</h1>
      <div className='terms'>
        <div className='terms-content'>
          <h3>Chocolate Kiwi Limited & Security</h3>
          <p>
            Chocolate Kiwi Limited understands that the confidentiality, integrity, and availability
            of our customers&apos; information are vital to their business operations and our own
            success. We use a multi-layered approach to protect that key information, by constantly
            monitoring and improving our application, systems, and processes to meet the growing
            demands and challenges of security.
          </p>

          <p>
            To report security issues or possible abuse, please contact one of our support engineers
            or send a report to john@chocolatekiwi.com
          </p>

          <h3>Policies</h3>
          <p>
            Chocolate Kiwi Limited has privacy and security-conscious policies that apply to all of
            our information handling practices.
          </p>

          <h4>Contractual Privacy Protection for Customers</h4>
          <p>
            Chocolate Kiwi Limited&apos;s contracts include confidentiality provisions that prohibit
            us from disclosing customer confidential information, including Customers Content and
            Personal Data, except under certain narrowly defined circumstances, and when required by
            law. Customer Content refers to the definition in section 3.2 of our Terms and Service
            Agreement. Personal Data refers to section 4 of our Privacy Policy. Customer Data
            includes both Customer Content and Personal Data.
          </p>
          <p>
            Chocolate Kiwi Limited agrees not to access customer&apos;s accounts, regarding Customer
            Content, except to maintain the service, prevent or respond to technical or service
            problems, to respond to requests that customer makes, or where required by law.
          </p>
          <p>
            Chocolate Kiwi Limited agrees not to access customer’s accounts, regarding Personal
            Data, except to respond to requests that customer makes, to aid us in serving the
            customer better, or where required by law. For a more detailed overview of how we use
            customer’s Personal Data please refer to section 5.1. of our Privacy Policy.
          </p>

          <h4>Code of Conduct, Confidentiality Agreements, and Information Security Policies</h4>
          <p>
            Every Chocolate Kiwi Limited employee and contractor must follow Chocolate Kiwi
            Limited&apos;s code of conduct, sign confidentiality agreements, and follow Chocolate
            Kiwi Limited&apos;s information security policies.
          </p>

          <h4>Privacy Statement</h4>
          <p>
            For information collected on Chocolate Kiwi Limited&apos;s website, Chocolate Kiwi
            Limited provides assurances around the types of information collected, how that
            information may be used, and how that information may be shared.
          </p>

          <p>
            Chocolate Kiwi Limited offers individuals the opportunity to manage their receipt of
            marketing and other non-transactional communications. Chocolate Kiwi Limited offers
            individuals the opportunity to update or change the information they provide.
          </p>

          <h4>Practices</h4>
          <p>
            Chocolate Kiwi Limited&apos;s comprehensive privacy and security program includes
            communicating with personnel and customers about current issues and best practices.
          </p>

          <h4>Internal Training and Communications for Chocolate Kiwi Limited Personnel</h4>
          <p>
            Chocolate Kiwi Limited regularly communicates with our personnel about our obligation to
            safeguard confidential information, including customer data and personal information.
            Chocolate Kiwi Limited provides training around confidentiality, privacy, and
            information security for all new employees during its new hire orientation.
          </p>

          <h4>Customer End User Awareness</h4>
          <p>
            Chocolate Kiwi Limited strongly encourages all of our customers and users to adopt
            industry-standard solutions to secure and protect their authentication credentials,
            networks, servers, and computers from security attacks. We communicate with our
            customers about current issues and trends through our website. We email end users about
            specific security issues when warranted.
          </p>

          <h4>People</h4>
          <p>
            Chocolate Kiwi Limited has multiple organisations, teams, and individuals responsible
            for security and security-related matters. The Chocolate Kiwi Limited security team
            includes members from multiple teams and is responsible for Chocolate Kiwi
            Limited&apos;s security program and personnel, including information, product, and
            corporate security, enterprise risk management, and technology audit & compliance.
            Additionally, all Chocolate Kiwi Limited personnel are required to follow Chocolate Kiwi
            Limited&apos;s confidentiality, privacy, and information security policies
          </p>

          <h4>Technology</h4>
          <p>
            Chocolate Kiwi Limited maintains a comprehensive array of technical measures to protect
            the Chocolate Kiwi Limited service and offers a robust set of customer-controlled
            settings to further heighten privacy and security protection.
          </p>

          <h4>Default Privacy and Security Features</h4>
          <p>Application features that protect customer data:</p>
          <ul>
            <li>
              Connection to the Chocolate Kiwi Limited service is via secure socket layer/transport
              layer security (SSL/TLS), ensuring that our customers have a secure connection to
              their data. Individual user sessions are uniquely identified and re-verified with each
              transaction.
            </li>
            <li>Customers passwords are not accessible by Chocolate Kiwi Limited personnel.</li>
            <li>
              Application logs record the originating user, timestamps, and originating IP address
              for every request completed.
            </li>
            <li>
              Logical separation of customer data: Server and software configurations are designed
              to provide secure logical separations of customer data that permit each customer to
              view only its related information.
            </li>
            <li>
              Network security measures:
              <ul>
                <li>Multiple layers of external and internal firewalls</li>
                <li>Operations engineers access servers using a VPN</li>
                <li>Intrusion & abuse detection sensors</li>
                <li>Security event management system</li>
                <li>Regular external vulnerability scanning</li>
              </ul>
            </li>
          </ul>

          <h3>Redundancy, Scalability, and Multi-Region</h3>
          <p>
            The Chocolate Kiwi Limited service is highly scalable and redundant, and distributed
            over multiple world-wide regions. It allows for fluctuation in demand and expansion of
            users while greatly reducing the threat of long-term outages. Load-balanced networks,
            pools of application servers, and clustered databases are features of our design.
          </p>

          <h3>Secure data centres</h3>
          <p>
            Our service is hosted on Amazon AWS with further security compliance defined on their
            dedicated security page. https://aws.amazon.com/security/
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Security;
