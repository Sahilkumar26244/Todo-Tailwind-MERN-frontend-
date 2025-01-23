import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useSelector } from "react-redux";

function Signup() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useNavigate()

  if(isLoggedIn === true){
    history("/")
  }

  const [data,setData] = useState({username:"",email:"",password:""});
  

  const change = (e) =>{
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }

  // console.log(data)

  const submit = async() => {
    try {
      if(data.username === "" || data.email ==="" || data.password === ""){
        alert("All fields are required!")
      }
      else{
        const response = await axios.post("http://localhost:1000/user",data)
        console.log(response)
        setData({username:"",email:"",password:""})
        alert(response.data.message)
        history("/login")
      }
    } catch (error) {
      console.log(error.response.data)
      alert(error.response.data.message)

    }
  }

  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold text-center">Signup</div>
        <input
          name="username"
          type="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          onChange={change}
          value={data.username}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
          onChange={change}
          value={data.email}
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
            <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded" onClick={submit}>Sign-Up</button>
            <Link to="/login" className='text-gray-700 hover:text-gray-300 '>Already have an account? Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
