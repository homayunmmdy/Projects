import React, { useState } from 'react';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-lg">Code Start</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10  items-center justify-center space-x-4">
                <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Add any additional buttons or items here */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default App;
