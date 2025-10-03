import React from 'react';

const SimulationCard = () => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Simulation</h2>
      <div className="simulation-container">
        {/* Embed your existing Solar System Simulation here */}
        <p>Solar System Simulation goes here.</p>
      </div>
    </div>
  );
};

export default SimulationCard;