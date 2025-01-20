import React, { useState } from 'react'
import Cards from '../components/Home/Cards';
import { IoAddCircle } from "react-icons/io5";
import InputData from '../components/Home/InputData';

function AllTasks() {

    const [InputDiv,setInput] = useState("hidden")
  return (
    <>
    <div>
        <div className='w-full flex justify-end px-4 py-2'>
            <button onClick={() => setInput("fixed")}>
                <IoAddCircle className='text-5xl text-gray-400 hover:text-gray-100 translation-all duration-300' />
            </button>
        </div>
        <Cards home={"true"} InputDiv={InputDiv} setInput={setInput} />
    </div>
    <InputData InputDiv={InputDiv} setInput={setInput} />
    </>
  )
}

export default AllTasks