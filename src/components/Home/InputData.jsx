import axios from "axios";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function InputData({ InputDiv, setInput, fetchData }) {
  const [data, setData] = useState({ title: "", desc: "" });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  console.log(data);

  const submitData = async() => {
    if(data.title === "" || data.desc === ""){
        alert("All fields are required!")
    }
    else{
        const res = await axios.post("http://localhost:1000/task",data,{
            headers
        })

        console.log(res)
        fetchData()
        setData({title:"",desc:""})
        setInput("hidden")
    }
  }

  return (
    <div>
      <div
        className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}
      ></div>
      <div
        className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button onClick={() => setInput("hidden")} className="text-2xl">
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
            value={data.title}
            onChange={change}
          />
          <textarea
            type="text"
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Description.."
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
            value={data.desc}
            onChange={change}
          />
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold" onClick={submitData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputData;
