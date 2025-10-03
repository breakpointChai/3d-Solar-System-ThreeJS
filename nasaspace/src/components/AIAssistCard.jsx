import React from 'react';

const AIAssistCard = () => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">AI Assist</h2>
      <div className="chatbot-container">
        {/* Add chatbot UI connected to placeholder AI API here */}
        <p>Chatbot content goes here.</p>
      </div>
    </div>
  );
};

export default AIAssistCard;