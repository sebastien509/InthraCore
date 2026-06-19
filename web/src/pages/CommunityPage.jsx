import Layout from '../components/Layout';

export default function CommunityPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Join the Movement</h1>
        <p className="text-xl mb-8">Working groups, global ambassadors, and open governance – be part of the change.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="email" placeholder="Your email" className="w-full p-3 border rounded" />
          <select className="w-full p-3 border rounded">
            <option>I want to contribute to...</option>
            <option>Privacy research</option>
            <option>Education & outreach</option>
            <option>Edge AI engineering</option>
          </select>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded w-full">Become an Ally</button>
        </form>
      </div>
    </Layout>
  );
}