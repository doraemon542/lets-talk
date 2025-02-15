import React, { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! How are you feeling today?', sender: 'other', timestamp: '10:00 AM' },
    { id: 2, text: 'I’m feeling a bit lonely. Just needed someone to talk to.', sender: 'user', timestamp: '10:01 AM' },
    { id: 3, text: 'I understand. It’s okay to feel that way. I’m here to listen.', sender: 'other', timestamp: '10:02 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      {/* Chat Header */}
      <div className="bg-white rounded-t-2xl shadow-md p-4 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-blue-900">Anonymous User</h3>
          <p className="text-sm text-gray-600">Online</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded-b-2xl shadow-md">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs text-right mt-1 opacity-70">
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="mt-4 bg-white rounded-2xl shadow-md p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbox;