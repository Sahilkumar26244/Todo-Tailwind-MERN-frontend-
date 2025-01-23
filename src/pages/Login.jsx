import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {


  const [data,setData] = useState({username:"",password:""});
  const history = useNavigate()

  const change = (e) =>{
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }

  console.log(data)

  const submit = async() => {
    try {
      if(data.username === "" || data.password === ""){
        alert("All fields are required!")
      }
      else{
        const response = await axios.post("http://localhost:1000/user/login",data)
        console.log(response)
        setData({username:"",password:""})
        alert(response.data.message)
        history("/")
      }
    } catch (error) {
      console.log(error.response.data)
      alert(error.response.data.message)

    }
  }


  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold text-center">Login</div>
        <input
          name="username"
          type="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          onChange={change}
          value={data.username}
        />


        <input
          name="password"
          type="password"
          placeholder="Password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
          onChange={change}
          value={data.password}
        />
        <div className="w-full flex justify-between items-center">
            <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded" onClick={submit}>Login</button>
            <Link to="/signup" className='text-gray-700 hover:text-gray-300 '>Not having an account? SignUp here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login