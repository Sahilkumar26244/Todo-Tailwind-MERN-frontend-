import React, { useEffect, useState } from 'react'
import Cards from '../components/Home/Cards'
import axios from 'axios';

function IncompletedTasks() {

  const [data,setData] = useState()

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchData = async() => {
    const res = await axios.get("http://localhost:1000/task/getAllIncompTasks", {
      headers,
    });
    // console.log(res);
    setData(res.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)
  return (
    <div>
        <Cards home={"false"} data={data} fetchData={fetchData} />
    </div>
  )
}

export default IncompletedTasks