import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] text-[#111111]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-5 py-20 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_12px_24px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
          <div className="space-y-6 text-[#4B5563] leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>
              Trustie Reviews ("we", "our", or "us") provides a Shopify application to help merchants collect, manage, and analyze product reviews. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the Trustie Reviews App (the "App") in connection with your Shopify-supported store.
            </p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">1. Personal Information the App Collects</h2>
            <p>When you install the App, we are automatically able to access certain types of information from your Shopify account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Merchant Information:</strong> We collect your name, email address, store URL, and locale to authenticate you, provide support, and communicate with you about your account.</li>
              <li><strong>Customer Information:</strong> To fulfill the App's core functionality (sending review request emails and managing reviews), we collect your customers' names, email addresses, and order details (such as purchased products and order IDs).</li>
              <li><strong>Device & Usage Information:</strong> When you use the App, we collect information about your device, web browser, IP address, and how you interact with the App's interface.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">2. How Do We Use Your Personal Information?</h2>
            <p>We use the personal information we collect from you and your customers in order to provide the Service and to operate the App. Additionally, we use this personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communicate with you and provide customer support.</li>
              <li>Send automated review request emails to your customers on your behalf.</li>
              <li>Generate AI-powered insights and summaries based on collected product reviews.</li>
              <li>Screen our App for potential risk or fraud.</li>
              <li>Provide you with information or advertising relating to our products or services (with your consent).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">3. Sharing Your Personal Information</h2>
            <p>We share your personal information with third parties to help us provide and operate the App, as described above. For example:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Shopify:</strong> We share information back to Shopify to sync reviews and store settings. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" className="text-[#0089FF] hover:underline" target="_blank" rel="noopener noreferrer">https://www.shopify.com/legal/privacy</a>.</li>
              <li><strong>Infrastructure & Analytics:</strong> We use secure third-party databases and hosting providers to store data securely.</li>
              <li><strong>AI Providers:</strong> We utilize third-party AI models (e.g., Google Gemini) strictly to generate review summaries and suggested replies. No personal data is used to train these models.</li>
              <li><strong>Compliance with Laws:</strong> We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">4. Data Retention and Deletion (GDPR/CCPA)</h2>
            <p>We retain your personal information and your customers' information for as long as you use the App. We fully support Shopify's mandatory privacy webhooks (GDPR/CCPA compliance):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Customers/Data_Request:</strong> If a customer requests to view their data, we will provide a payload of their data to Shopify within the required timeframe.</li>
              <li><strong>Customers/Redact:</strong> If a customer requests deletion of their data, we will permanently delete or anonymize their personal information from our databases.</li>
              <li><strong>Shop/Redact:</strong> If you uninstall the App and request store data deletion, or 48 hours after you uninstall the app, we will purge all store and customer data associated with your account from our systems, except where required by law.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">5. Your Rights</h2>
            <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
            <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you use the App through your Shopify store), or otherwise to pursue our legitimate business interests listed above. Please note that your information may be transferred outside of Europe, including to Canada and the United States.</p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">6. Changes</h2>
            <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">7. Contact Us</h2>
            <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:support@trustie.store" className="text-[#0089FF] hover:underline">support@trustie.store</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
