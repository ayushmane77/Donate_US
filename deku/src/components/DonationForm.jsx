import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Donate = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [donationCategory, setDonationCategory] = useState("");
  // const [image, setImage] = useState();
  const [error, setError] = useState("");

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log(e.target.files[0]);
  //   setImage(file);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!fullName.trim()) {
      setError("Full Name is required.");
      return;
    }
    if (!mobileNumber.trim()) {
      setError("Mobile Number is required.");
      return;
    }
    if (!/^\d{10}$/.test(mobileNumber.trim())) {
      setError("Mobile Number must be 10 digits.");
      return;
    }
    if (!address.trim()) {
      setError("Address is required.");
      return;
    }
    if (!pincode.trim()) {
      setError("Pincode is required.");
      return;
    }
    if (!/^\d{6}$/.test(pincode.trim())) {
      setError("Pincode must be 6 digits.");
      return;
    }
    if (!donationCategory) {
      setError("Donation Category is required.");
      return;
    }
    
    setError("");
  
    // Reset input fields
    // setFullName("");
    // setMobileNumber("");
    // setAddress("");
    // setPincode("");
    // setDonationCategory("");
    // setImage();
  
    // Alert and other actions...
    alert("Donation  successful!");
  };
  
const handleApi = () => {
  // Basic validation
  if (!fullName.trim() || !mobileNumber.trim() || !address.trim() || !pincode.trim() || !donationCategory.trim()) {
    setError("All fields are required.");
    return;
  }
  if (!/^\d{10}$/.test(mobileNumber.trim())) {
    setError("Mobile Number must be 10 digits.");
    return;
  }
  if (!/^\d{6}$/.test(pincode.trim())) {
    setError("Pincode must be 6 digits.");
    return;
  }

  setError("");
  
   window.location.href = "/";



  // Construct form data
  // const formData = new FormData();
  // formData.append('fullName', fullName);
  // formData.append('mobileNumber', mobileNumber);
  // formData.append('address', address);
  // formData.append('pincode', pincode);
  // formData.append('donationCategory', donationCategory);

  // Send data to backend
  const data = {fullName, mobileNumber, address, pincode, donationCategory}
  const url = "http://localhost:4500/createProducts";
  axios.post(url, data)
    .then((res) => {
      console.log(res); // Log the response from the backend
      alert("Donation successful!"); // Alert user about successful donation
    })
    .catch((err) => {
      console.error(); // Log any errors
      alert("Failed to donate. Please try again."); // Alert user about failure
    });
};





  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileNumber"
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pincode"
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="donationCategory"
          >
            Donation Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="donationCategory"
            value={donationCategory}
            onChange={(e) => setDonationCategory(e.target.value)}
          >
            <option value="">Select Donation Category</option>
            <option value="food">Food</option>
            <option value="cloths">Cloths</option>
            <option value="toys">Toys</option>
            <option value="utensils">Utensils</option>
            <option value="books">Books</option>
            <option value="books">Funds
            
            </option>
          </select>
        </div>
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div> */}
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={handleApi}
          >
            Donate
          </button>
          <Link to="/Products">
          <button
            className="bg-gray-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Donate;
