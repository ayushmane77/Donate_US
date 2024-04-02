import React from "react";

const ThankYou = () => {
  return (
    <div className="bg-cover bg-center bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-8">Thank You!</h2>
        <p className="text-lg text-gray-300 mb-12">
          We deeply appreciate your support and visit to our website.
        </p>
        <div className="animate-bounce mb-6">
          <svg
            className="w-12 h-12 text-white mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            ></path>
          </svg>
        </div>
        <p className="text-lg text-gray-300">Visit again for more updates!</p>
      </div>
    </div>
  );
};

export default ThankYou;
