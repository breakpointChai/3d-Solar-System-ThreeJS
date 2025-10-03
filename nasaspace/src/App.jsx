import React from 'react';
import Header from './components/Header';
import SimulationCard from './components/SimulationCard';
import LearningCard from './components/LearningCard';
import FunGamesCard from './components/FunGamesCard';
import AIAssistCard from './components/AIAssistCard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />
      <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <SimulationCard />
        <LearningCard />
        <FunGamesCard />
        <AIAssistCard />
      </main>
    </div>
  );
};

export default App;
