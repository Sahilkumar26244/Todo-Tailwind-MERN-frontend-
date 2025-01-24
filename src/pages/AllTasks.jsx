import React, { useEffect, useState } from 'react'
import Cards from '../components/Home/Cards';
import { IoAddCircle } from "react-icons/io5";
import InputData from '../components/Home/InputData';
import axios from 'axios';

function AllTasks() {

    const [InputDiv,setInput] = useState("hidden")
    const [data,setData] = useState([])
    const [updateData,setUpdateData] = useState({id:"",title:"",desc:""}) 
    console.log(updateData.title,"updatedData")

    const headers = {
      id: localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const fetchData = async() => {
      const res = await axios.get("http://localhost:1000/task/get", {
        headers,
      });
      console.log(res);
      setData(res.data.data)
    }

    useEffect(() => {
      fetchData()
    }, [])

    // console.log(data.tasks)
  return (
    <>
    <div>
        <div className='w-full flex justify-end px-4 py-2'>
            <button onClick={() => setInput("fixed")}>
                <IoAddCircle className='text-5xl text-gray-400 hover:text-gray-100 translation-all duration-300' />
            </button>
        </div>
        {data && <Cards home={"true"} setInput={setInput} setData={setData} data={data.tasks} fetchData={fetchData} setUpdateData={setUpdateData} />}
    </div>
    <InputData InputDiv={InputDiv} setInput={setInput} fetchData={fetchData} updateData={updateData} setUpdateData={setUpdateData} />
    </>
  )
}

export default AllTasks