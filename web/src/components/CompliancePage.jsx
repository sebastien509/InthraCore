import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function CompliancePage() {
  return (
    <Layout>
      <SEO title="AI Compliance & Audit – InthraCORE" />
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">AI Accountability by Design</h1>
        <p className="text-xl mb-12">
          InthraOS builds privacy receipts, local audit logs, and GDPR/EU AI Act alignment into every edge deployment.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Privacy Receipts</h2>
            <p>Verifiable proof of on‑device inference – no data leaves the premises.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">EU AI Act Ready</h2>
            <p>Our edge SLMs fall under minimal risk tier, with full documentation.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Audit Trails</h2>
            <p>Immutable logs stored locally – accessible only by the data owner.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}