import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header Section */}
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-6xl font-bold text-blue-900 mb-4 transform hover:scale-105 transition-transform">
          Welcome to <span className="text-blue-600">Let's Talk</span>
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          A safe space to share your thoughts and connect with supportive people. Whether you're looking for advice, a listening ear, or just a place to vent, we're here for you.
        </p>
      </header>

      {/* Call-to-Action Buttons */}
      <div className="flex space-x-6 mt-8 animate-fade-in-up">
      <Link
  to="/signup"
  className="px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95"
>
  Get Started
</Link>
        <Link
          to="/learn-more"
          className="px-8 py-4 text-blue-600 border-2 border-blue-600 rounded-2xl shadow-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
        >
          Learn More
        </Link>
      </div>

      {/* Features Section */}
      <section className="mt-20 text-center max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Why Choose Let's Talk?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Safe & Anonymous</h3>
            <p className="text-gray-700">
              Share your thoughts anonymously or openly. Your privacy is our priority.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Supportive Community</h3>
            <p className="text-gray-700">
              Connect with kind and understanding people who genuinely care.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Always Available</h3>
            <p className="text-gray-700">
              Access support anytime, anywhere. We're here 24/7 for you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-44 text-blue-1200 text-sm animate-fade-in">
        © 2025 Let's Talk. All rights reserved.
      </footer>
    </div>
  );
};

export default WelcomePage;