import React from "react";

const Services = () => {
  return (
  
    <div className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
            <img
              src="https://source.unsplash.com/400x300/?food"
              alt="Food"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Food</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
            <img
              src="https://source.unsplash.com/400x300/?cloths"
              alt="Cloths"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Cloths</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
            <img
              src="https://source.unsplash.com/400x300/?toys"
              alt="Toys"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Toys</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
            <img
              src="https://source.unsplash.com/400x300/?utensils"
              alt="Utensils"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Utensils</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
            <img
              src="https://source.unsplash.com/400x300/?books"
              alt="Books"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Books</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
            <img
              src="https://source.unsplash.com/400x300/?funds"
              alt="Funds"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Funds</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
