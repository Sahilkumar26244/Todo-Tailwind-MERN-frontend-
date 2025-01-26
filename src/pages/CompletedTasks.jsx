import React, { useEffect, useState } from 'react'
import Cards from '../components/Home/Cards'
import axios from 'axios';

function CompletedTasks() {


  const [data,setData] = useState()

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchData = async() => {
    const res = await axios.get("http://localhost:1000/task/getAllCompTasks", {
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

export default CompletedTasks