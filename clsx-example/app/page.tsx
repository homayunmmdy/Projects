"use client"
import clsx from 'clsx';
import { useState } from 'react';

enum Status {
  Online = 'Online',
  Offline = 'Offline',
}

const App = () => {
  const [status, setStatus] = useState<Status>(Status.Offline);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            'w-16 h-16 rounded-full border-4',
            {
              'bg-green-500': status === Status.Online,
              'bg-gray-300': status === Status.Offline,
            },
          )}
        >
        </div>

        <div className="mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setStatus(Status.Online)}
          >
            Set Online
          </button>
          <button
            className="px-4 py-2 ml-4 bg-gray-300 text-gray-700 rounded-lg"
            onClick={() => setStatus(Status.Offline)}
          >
            Set Offline
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;