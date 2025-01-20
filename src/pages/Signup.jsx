import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold text-center">Signup</div>
        <input
          name="username"
          type="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
        />
        <div className="w-full flex justify-between items-center">
            <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">Login</button>
            <Link to="/login" className='text-gray-700 hover:text-gray-300 '>Already have an account? Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
