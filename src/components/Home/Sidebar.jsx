import React from 'react';
import { CgNotes } from "react-icons/cg";
import { MdLabelImportantOutline } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";


function Sidebar() {
    const data = [
        {
            title:"All task",
            icon:<CgNotes/>
        },
        {
            title:"Important task",
            icon:<MdLabelImportantOutline/>
        },
        {
            title:"Completed task",
            icon:<FaCheckDouble/>
        },
        {
            title:"Incompleted task",
            icon:<TbNotebookOff/>
        }
    ]
  return (
    <>
        <div>
            <h2 className='text-xl font-semibold'>The Code master</h2>
            <h4 className='mb-1 text-gray-400'>sahil@gmail.com</h4>
            <hr/>
        </div>
        <div>
        {data.map((item,i) => (
            <div className='my-2 flex items-center gap-3 hover:bg-gray-600 p-2 rounded transition-all duration-100'>
                {item.icon}{item.title}
            </div>
        ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2 rounded'>Log Out</button>
        </div>
    </>
  )
}

export default Sidebar