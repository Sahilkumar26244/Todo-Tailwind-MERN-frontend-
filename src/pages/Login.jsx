import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold text-center">Login</div>
        <input
          name="username"
          type="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
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
            <Link to="/signup" className='text-gray-700 hover:text-gray-300 '>Not having an account? SignUp here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login