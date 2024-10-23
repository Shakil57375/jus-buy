import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      
      <p className="mb-4">
        At jusbuy, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase from our store.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect the following types of information when you use our services:
        <ul className="list-disc ml-8">
          <li><strong>Personal Information:</strong> Includes your name, email address, phone number, billing address, and shipping address when you create an account or make a purchase.</li>
          <li><strong>Payment Information:</strong> Payment details like credit/debit card numbers or payment methods like PayPal or bKash.</li>
          <li><strong>Log Data:</strong> Information such as your IP address, browser type, device, and the pages you visit on our site.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience. Cookies allow us to track your behavior on our site and personalize content.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to:
        <ul className="list-disc ml-8">
          <li>Process and fulfill your orders, including sending confirmation emails and shipping updates.</li>
          <li>Improve the functionality and user experience of our website.</li>
          <li>Communicate with you regarding promotional offers, new products, and other updates.</li>
          <li>Ensure your data is secure by preventing fraudulent transactions.</li>
          <li>Analyze user behavior to improve our products and services.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. How We Share Your Information</h2>
      <p className="mb-4">
        We value your privacy and do not sell or share your personal information with third parties for marketing purposes. However, we may share your data with:
        <ul className="list-disc ml-8">
          <li><strong>Service Providers:</strong> We work with third-party services (e.g., payment processors, shipping partners) to complete your transactions and deliver orders.</li>
          <li><strong>Legal Obligations:</strong> We may disclose your information if required by law or to protect the rights of jusbuy and others.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
      <p className="mb-4">
        We take the protection of your personal information seriously. We implement various security measures, including encryption and secure servers, to safeguard your data from unauthorized access, disclosure, or alteration.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
        <ul className="list-disc ml-8">
          <li>Access and request a copy of the personal data we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal data, subject to legal obligations.</li>
          <li>Withdraw consent for data processing at any time, where applicable.</li>
        </ul>
        To exercise any of these rights, please contact us at <a href="mailto:privacy@jusbuy.com" className="text-orange-600 underline">privacy@jusbuy.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar technologies to collect and store information about your preferences and interactions with our website. You can control the use of cookies through your browser settings. However, disabling cookies may limit certain functionalities on our site.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will notify you by updating the date at the top of this page and, if necessary, through additional means such as email notifications.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this privacy policy or how we handle your personal information, please contact us at:
        <br />
        Email: <a href="mailto:privacy@jusbuy.com" className="text-orange-600 underline">privacy@jusbuy.com</a>
        <br />
        Phone: +880-XXX-XXXX
      </p>

      <p className="mt-8 text-gray-600">
        This Privacy Policy was last updated on [Date].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
