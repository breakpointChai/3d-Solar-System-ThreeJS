import React from 'react';

const LearningCard = () => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Learning</h2>
      <div className="accordion">
        {/* Add Q&A, space facts, images/animations, and NASA links here */}
        <p>Learning content goes here.</p>
      </div>
    </div>
  );
};

export default LearningCard;