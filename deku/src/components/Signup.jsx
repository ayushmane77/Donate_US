import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  // const [fullName, setFullName] = useState("");

  const [username,setusername]=useState();
  // console.log(username);
  const [mobileNumber, setMobileNumber] = useState("");
  // console.log(mobileNumber);
  // const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  // console.log(email);
  const [password, setPassword] = useState("");
  // console.log(password);
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // console.log({username,password,mobileNumber,email});

  const handleApi=()=>{
    // console.log({username,password,mobileNumber,email});
    const data={username,password,mobileNumber,email};
    const url="http://localhost:4500/register"
    axios.post(url,data)
    .then((res)=>{
      console.log(res);
      if(res.data.message){
        alert(res.data.message);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !username ||
      !mobileNumber ||
      
      !email ||
      !password 
      
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // if (password !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }

    // Additional validation logic here...

    // Clear error if validation passes
    setError("");

    // Submit the form or perform other actions...
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
            // value={fullName}
            value ={username}
            onChange={(e) => setusername(e.target.value)}
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
        {/* <div className="mb-4">
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
        </div> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition duration-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.5 9.5a2 2 0 113.536 1.464l-1.216 1.217A7.98 7.98 0 0020 12c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8c1.62 0 3.108-.484 4.376-1.304l1.217-1.216a2 2 0 111.292 1.292l-1.216 1.217A9.98 9.98 0 0112 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.523 0 10 4.477 10 10 0 1.757-.454 3.403-1.248 4.822l1.217-1.216a2 2 0 011.292.292z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> */}


        {/* {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}  ✅ */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={handleApi}
          >
            Sign Up
          </button>
          
          <Link to={"/"}>
          <button
            className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cancel
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
