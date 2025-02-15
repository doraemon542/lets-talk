import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [topRatedProfiles, setTopRatedProfiles] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  // Fetch top-rated users
  useEffect(() => {
    const fetchTopRatedUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/top-rated-users');
        const data = await response.json();
        setTopRatedProfiles(Array.isArray(data) ? data : []); // Ensure data is an array
      } catch (err) {
        console.error('Error fetching top-rated users:', err);
      }
    };

    fetchTopRatedUsers();
  }, []);

  // Fetch online users
  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/online-users');
        const data = await response.json();
        setOnlineUsers(Array.isArray(data) ? data : []); // Ensure data is an array
      } catch (err) {
        console.error('Error fetching online users:', err);
      }
    };

    fetchOnlineUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">
          Welcome to <span className="text-blue-600">Let's Talk</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          A safe space to share your thoughts and connect with supportive people. Whether you're feeling lonely, stressed, or just need someone to talk to, we're here for you.
        </p>
      </header>

      {/* Top Rated Profiles Section */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Top Rated Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRatedProfiles.map((profile) => (
            <div
              key={profile._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                {/* Profile Picture or Anonymous Icon */}
                {profile.isAnonymous ? (
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                ) : (
                  <img
                    src={profile.profilePic || 'https://via.placeholder.com/150'}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                )}

                {/* Profile Name */}
                <h3 className="text-xl font-semibold text-blue-900 mt-4">
                  {profile.name}
                </h3>

                {/* Profile Bio */}
                <p className="text-gray-600 mt-2">{profile.bio}</p>

                {/* Chat Button */}
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
                  Start Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Users Section */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Online Users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {onlineUsers.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                {/* Profile Picture or Anonymous Icon */}
                {user.isAnonymous ? (
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                ) : (
                  <img
                    src={user.profilePic || 'https://via.placeholder.com/150'}
                    alt={user.name}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                )}

                {/* Profile Name */}
                <h3 className="text-xl font-semibold text-blue-900 mt-4">
                  {user.name}
                </h3>

                {/* Chat Button */}
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
                  Start Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Ready to Connect?
        </h2>
        <p className="text-gray-700 mb-6">
          Join Let's Talk today and start connecting with people who understand you.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link
            to="/signup"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 text-blue-600 border-2 border-blue-600 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Log In
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-blue-600 text-sm">
        © 2025 Let's Talk. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;