import React from "react";

export default function InthraCorePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative bg-indigo-900 text-white py-24 px-6 text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/placeholder-hero-bg.jpg" 
            alt="Diverse group of people collaborating" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Together, We Shape the Future.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            InthraCore is a movement for people, by people.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Where creators, builders, educators, and defenders of human dignity come together to define the ethics of our digital world.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-lg">
              Join the Movement
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all text-lg">
              Become an Ally
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <StatItem number="10M+" label="Data points protected" />
          <StatItem number="200+" label="Global contributors" />
          <StatItem number="15+" label="Countries represented" />
          <StatItem number="100%" label="Open governance" />
        </div>
      </section>

      {/* Why InthraCore */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Why InthraCore Exists
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          We believe in a world where technology serves humanity—not the other way around. InthraCore exists to unite people across disciplines, geographies, and generations to create tools, systems, and narratives rooted in justice, autonomy, and dignity.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <FeatureCard 
            emoji="🔐" 
            title="Device-Centric Privacy" 
            text="Your data should stay on your device. No cloud surveillance, no middlemen." 
            color="indigo"
          />
          <FeatureCard 
            emoji="🌍" 
            title="Global Inclusion" 
            text="Ethical AI must reflect all communities, especially those too often excluded from the conversation." 
            color="teal"
          />
          <FeatureCard 
            emoji="🧠" 
            title="Autonomy First" 
            text="Intelligence is power—but it must never come at the cost of personal freedom." 
            color="amber"
          />
          <FeatureCard 
            emoji="🏛️" 
            title="Human-Centered Design" 
            text="Technology built for real lives, not just efficiency or profit." 
            color="purple"
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Watch how InthraCore empowers local communities, protects identities, and reshapes the narrative of what's possible when people lead tech—not platforms.
          </p>
          <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-xl overflow-hidden mb-6">
            <img 
              src="/placeholder-video-thumbnail.jpg" 
              alt="Community members using InthraCore technology" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-all text-lg">
            Watch Our Manifesto
          </button>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Pillars of Action</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <Pillar 
            title="Privacy & Sovereignty" 
            desc="We build systems that honor consent, keep data local, and give power back to individuals." 
            icon="🔐"
            color="indigo"
          />
          <Pillar 
            title="Equity & Inclusion" 
            desc="We prioritize the voices, languages, and realities of all people—not just those in tech hubs." 
            icon="🌍"
            color="teal"
          />
          <Pillar 
            title="Education & Awareness" 
            desc="We demystify complex systems and offer tools that let everyone participate in the digital world." 
            icon="📚"
            color="amber"
          />
          <Pillar 
            title="Accountability by Design" 
            desc="Our systems are auditable, open, and built with ethics at the core—not as an afterthought." 
            icon="🧭"
            color="purple"
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Impact Stories</h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-700">
            These stories are not about code—they're about people.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudy 
              title="Decentralized Healthcare" 
              description="Supporting clinics to protect patient data while improving diagnostics in underserved regions."
              image="/placeholder-case1.jpg"
            />
            <CaseStudy 
              title="Community Networks" 
              description="Helping grassroots organizers build local AI tools in their own language and context."
              image="/placeholder-case2.jpg"
            />
            <CaseStudy 
              title="Education Revolution" 
              description="Powering offline-first, privacy-respecting tools in schools across three continents."
              image="/placeholder-case3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Built by Builders, Guided by Voices</h2>
        <p className="mb-10 text-xl text-gray-700 max-w-2xl mx-auto">
          We are engineers, storytellers, creators, advisors, and everyday people united by purpose.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <LeaderCard 
            name="Sebastien Fenelon" 
            role="Founder, InthraOS" 
            bio="I've built for privacy for over a decade—but this is bigger than software. This is a stand."
            image="/placeholder-leader1.jpg"
          />
          <LeaderCard 
            name="Telisa Daughtry" 
            role="Advisor, Ethics & Innovation" 
            bio="InthraCore doesn't just ask the right questions—it brings the right people into the room."
            image="/placeholder-leader2.jpg"
          />
          <LeaderCard 
            name="Dr. Amira Patel" 
            role="Advisor, Global Inclusion" 
            bio="Technology that serves everyone must be shaped by everyone."
            image="/placeholder-leader3.jpg"
          />
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-gray-500 mb-8 text-lg">TRUSTED BY PRIVACY-FIRST ORGANIZATIONS</h3>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Organizations who stand with us know that protecting privacy is protecting freedom.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <img src="/placeholder-partner1.png" alt="Partner logo" className="h-12 opacity-80 hover:opacity-100 transition-all" />
            <img src="/placeholder-partner2.png" alt="Partner logo" className="h-10 opacity-80 hover:opacity-100 transition-all" />
            <img src="/placeholder-partner3.png" alt="Partner logo" className="h-14 opacity-80 hover:opacity-100 transition-all" />
            <img src="/placeholder-partner4.png" alt="Partner logo" className="h-16 opacity-80 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This is Not Just a Platform — It's a Position
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            We are building more than systems. We're building culture.
            The future of AI will be shaped by those who dare to claim it. Where do you stand?
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              Join the Newsletter
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all">
              Apply as Advisor
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all">
              Download Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8 text-center">Learn More</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard 
              title="The Privacy-First AI Manifesto" 
              description="A guide to building systems rooted in dignity."
              type="PDF Guide"
              image="/placeholder-resource1.jpg"
            />
            <ResourceCard 
              title="Community Toolkit" 
              description="Resources for activists, educators, and engineers."
              type="Resources Package"
              image="/placeholder-resource2.jpg"
            />
            <ResourceCard 
              title="Upcoming Events" 
              description="Webinars, meetups, and global town halls."
              type="Events Calendar"
              image="/placeholder-resource3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-indigo-900 text-indigo-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">InthraCore</h4>
            <p className="text-sm">
              Building AI systems that respect human dignity and privacy.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Movement</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-all">Join Us</a></li>
              <li><a href="#" className="hover:text-white transition-all">Manifesto</a></li>
              <li><a href="#" className="hover:text-white transition-all">Events</a></li>
              <li><a href="#" className="hover:text-white transition-all">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-all">Toolkits</a></li>
              <li><a href="#" className="hover:text-white transition-all">Research</a></li>
              <li><a href="#" className="hover:text-white transition-all">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-all">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#"><img src="/placeholder-twitter.svg" alt="Twitter" className="h-6 opacity-80 hover:opacity-100 transition-all" /></a>
              <a href="#"><img src="/placeholder-linkedin.svg" alt="LinkedIn" className="h-6 opacity-80 hover:opacity-100 transition-all" /></a>
              <a href="#"><img src="/placeholder-github.svg" alt="GitHub" className="h-6 opacity-80 hover:opacity-100 transition-all" /></a>
            </div>
            <p className="text-sm">contact@inthracore.org</p>
          </div>
        </div>
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-sm">
          © 2025 InthraCore Movement. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// Reusable components
function FeatureCard({ emoji, title, text, color }) {
  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-800',
    teal: 'bg-teal-100 text-teal-800',
    amber: 'bg-amber-100 text-amber-800',
    purple: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className={`flex items-start gap-6 p-6 rounded-xl ${colorClasses[color]} hover:shadow-md transition-all`}>
      <div className="text-4xl p-2 rounded-lg">{emoji}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

function Pillar({ title, desc, icon, color }) {
  const colorClasses = {
    indigo: 'border-indigo-200 hover:border-indigo-300',
    teal: 'border-teal-200 hover:border-teal-300',
    amber: 'border-amber-200 hover:border-amber-300',
    purple: 'border-purple-200 hover:border-purple-300'
  };

  return (
    <div className={`border-2 p-8 rounded-xl bg-white hover:shadow-md transition-all ${colorClasses[color]}`}>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}

function LeaderCard({ name, role, bio, image }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition-all h-full">
      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-indigo-600 mb-3">{role}</p>
      <p className="text-gray-600 italic">"{bio}"</p>
    </div>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold mb-2 text-indigo-900">{number}</p>
      <p className="text-indigo-700">{label}</p>
    </div>
  );
}

function CaseStudy({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div className="h-48 bg-gray-300">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <a href="#" className="text-indigo-600 font-medium text-sm hover:underline inline-flex items-center">
          Read story <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}

function ResourceCard({ title, description, type, image }) {
  return (
    <div className="border border-gray-200 rounded-lg hover:shadow-md transition-all overflow-hidden bg-white">
      <div className="h-40 bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{type}</span>
        <h3 className="font-semibold text-lg mt-1 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="text-sm font-medium text-indigo-600 hover:underline inline-flex items-center">
          Access Resource <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
}