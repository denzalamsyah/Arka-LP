import React from "react";

function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Amazing Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools to help you build, grow, and manage your digital
            presence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-rocket text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Fast Performance
            </h3>
            <p className="text-gray-600">
              Optimized for speed to ensure smooth experiences for your users.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-mobile-alt text-purple-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Looks great on any device, from desktop to mobile.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-shield-alt text-green-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Secure Platform
            </h3>
            <p className="text-gray-600">
              Enterprise-grade security to protect your data.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-yellow-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Track performance and user behavior with real-time analytics.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-cogs text-red-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Customization
            </h3>
            <p className="text-gray-600">
              Tailor the platform to your specific needs and branding.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-headset text-indigo-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Dedicated team ready to help whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
