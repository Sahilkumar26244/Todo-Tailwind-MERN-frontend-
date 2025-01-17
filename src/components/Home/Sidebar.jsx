import React from 'react'

function Sidebar() {
    const data = [
        {
            title:"All task"
        },
        {
            title:"Important task"
        },
        {
            title:"Completed task"
        },
        {
            title:"Incompleted task"
        }
    ]
  return (
    <div className='flex flex-col'>
        <div>
            <h2 className='text-xl font-semibold'>The Code master</h2>
            <h4 className='mb-1 text-gray-400'>sahil@gmail.com</h4>
            <hr/>
        </div>
        <div>
        {data.map((item,i) => (
            <div className='my-2 '>
                {item.title}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Sidebar