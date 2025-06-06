import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="p-8 max-w-7xl mx-auto space-y-16">
      {/* Hero / Mission Section */}
      <section className="text-center space-y-4">
        <div className="logo-and-text-container">
        
          <Image
            src="/admarketai.png" // Assuming the logo is named logo.png in the public folder
            alt="Ad Market AI"
            width={200}
            height={200}
          />
        <h1 className="text-4xl font-bold text-gray-900">
          Ad Market AI
          
        </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Ad Market AI, we harness the power of artificial intelligence to help companies execute smarter, more engaging marketing campaigns.
          Our mission is to simplify campaign management, maximize user engagement, and improve ROI through cutting-edge automation and analytics.
        </p>
      </section>

      {/* How We Help */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">How We Help</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li>🎯 Optimize campaign strategies with real-time AI insights</li>
          <li>🤖 Automate ad placement for improved reach</li>
          <li>📈 Track performance and make data-driven decisions</li>
          <li>💬 Deliver personalized experiences to every user</li>
          <li>🧠 Predict customer behavior to stay ahead of trends</li>
        </ul>
      </section>

      {/* Marketing Campaigns */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Marketing Campaigns We Power</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold">Cross-Platform Campaigns</h3>
            <p>Launch campaigns across Google, Facebook, LinkedIn, Instagram, and more—with one AI-optimized strategy.</p>
          </div>
          <div>
            <h3 className="font-semibold">Email & CRM Automation</h3>
            <p>Segment your audience and trigger personalized sequences automatically based on behavior and engagement.</p>
          </div>
          <div>
            <h3 className="font-semibold">Retargeting & Lookalike Audiences</h3>
            <p>Reconnect with past visitors and find new customers using AI-modeled targeting techniques.</p>
          </div>
          <div>
            <h3 className="font-semibold">Product Launches</h3>
            <p>Use AI to build pre-launch buzz and ensure your product debut reaches the right audience.</p>
          </div>
          <div>
            <h3 className="font-semibold">Event & Webinar Promotion</h3>
            <p>Maximize attendance with tailored outreach and optimized scheduling based on AI insights.</p>
          </div>
          <div>
            <h3 className="font-semibold">E-Commerce Growth</h3>
            <p>Boost sales with product ads, cart reminders, and AI-generated discount strategies.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          At <strong>Ad Market AI</strong>, we’re marketers at heart. Founded by a team of data scientists and digital strategists, we believe AI is the future of marketing.
          Our mission is to make powerful marketing technology simple, effective, and accessible for businesses of all sizes.
        </p>
      </section>

      {/* Contact Us */}
      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Contact Us for Sales</h2>
        <div className="space-y-2 text-center text-gray-700">
          <p>📧 <strong>Email:</strong> <a href="mailto:sales@admarketai.com" className="text-blue-600">sales@admarketai.com</a></p>
          <p>📱 <strong>Phone:</strong> (312) 445-0879</p>
          <p>🕒 <strong>Hours:</strong> Mon – Fri, 9AM – 6PM (EST)</p>
        </div>
      </section>
    </main>
  );
}
