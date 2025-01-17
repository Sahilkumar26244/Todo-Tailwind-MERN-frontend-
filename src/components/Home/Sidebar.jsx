import React from 'react';
import { CgNotes } from "react-icons/cg";
import { MdLabelImportantOutline } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';


function Sidebar() {
    const data = [
        {
            title:"All task",
            icon:<CgNotes/>,
            link:"/"
        },
        {
            title:"Important task",
            icon:<MdLabelImportantOutline/>,
            link:"/importantTasks"
        },
        {
            title:"Completed task",
            icon:<FaCheckDouble/>,
            link:"/completedTasks"
        },
        {
            title:"Incompleted task",
            icon:<TbNotebookOff/>,
            link:"/incompletedTasks"
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
            <Link to={item.link} key={i} className='my-2 flex items-center gap-3 hover:bg-gray-600 p-2 rounded transition-all duration-100 cursor-pointer'>
                {item.icon}{item.title}
            </Link>
        ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2 rounded'>Log Out</button>
        </div>
    </>
  )
}

export default Sidebar