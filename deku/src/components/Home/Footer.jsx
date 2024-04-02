import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Your Website. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 3c-1.05.49-2.14.86-3.29 1.13a4.002 4.002 0 0 0-7.42 2.74c-2.57-.13-4.85-1.45-6.42-3.42a4.008 4.008 0 0 0 1.25 5.93A4.002 4.002 0 0 1 4 13c0 2.21 1.79 4 4 4-1.05.49-2.14.86-3.29 1.13a4.002 4.002 0 0 0 7.42-2.74c2.57.13 4.85 1.45 6.42 3.42a4.008 4.008 0 0 0 1.25-5.93A7.98 7.98 0 0 1 21 3z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13h-9c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zm-4.5-8.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm4.52-1.25c0 .69-.56 1.25-1.25 1.25-.69 0-1.25-.56-1.25-1.25 0-.69.56-1.25 1.25-1.25.69 0 1.25.56 1.25 1.25zm-3.77 1.25c0 1.01-.82 1.83-1.83 1.83s-1.83-.82-1.83-1.83.82-1.83 1.83-1.83 1.83.82 1.83 1.83z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
