import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">NASA Hackathon</h1>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Explore</button>
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Zoom In</button>
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Zoom Out</button>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;