import React from "react";
import { Link } from "react-router-dom";



const Action = () => {

  return (
    <div className="bg-gray-900 text-white py-16 px-8 sm:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10">What do you need?</h2>
        <p className="text-xl mb-10">Select an option below:</p>
        <div className="flex justify-center space-x-6">
          <Link to={"./DonationForm"}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-full shadow-md transition duration-300 transform hover:scale-110 focus:outline-none">
            Donate
          </button>
          </Link>
          {/* <Link to={"/getproducts"}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-12 rounded-full shadow-md transition duration-300 transform hover:scale-110 focus:outline-none">
            Claim 
          </button>
          </Link> */}
        </div>
      </div>
    </div>
    
  );
};

export default Action;
