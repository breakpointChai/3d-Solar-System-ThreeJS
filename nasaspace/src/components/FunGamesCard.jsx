import React from 'react';

const FunGamesCard = () => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Fun Games</h2>
      <div className="games-container">
        {/* Add space-themed mini-games and score tracking here */}
        <p>Games content goes here.</p>
      </div>
    </div>
  );
};

export default FunGamesCard;