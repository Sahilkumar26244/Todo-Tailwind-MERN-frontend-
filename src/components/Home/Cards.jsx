import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { Bounce, Slide, toast } from "react-toastify";

function Cards({ home, setInput, setData, data, fetchData, setUpdateData }) {

  // console.log(data)
  const [ImportantButton, setImportantButton] = useState("Incomplete");
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleCompleteTask = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:1000/task/updateCompleteTask/${id}`,
        {},
        {
          headers,
        }
      );

      // console.log(res,"complete")
      fetchData();
      {res.data.complete ? toast.success(`🦄 InCompleted!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }) :
      toast.info(`🦄 Completed!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });}
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleImportant = async (id) => {
    console.log(headers);
    try {
      const res = await axios.put(
        `http://localhost:1000/task/updateImportantTask/${id}`,
        {},
        {
          headers,
        }
      );

      // console.log(res,"important")
      fetchData();
      {
        res.data.task === false
          ? toast("Your Task is added to Important List!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            })
          : toast("Your Task is remove from Important List!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:1000/task/delete/${id}`,
        {
          headers,
        }
      );

      console.log(res, "delete");
      fetchData();
      toast.error(`🦄 ${res.data.message}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id, title, desc) => {
    setInput("fixed");
    setUpdateData({ id: id, title: title, desc: desc });
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data &&
        data?.map((items, i) => (
          <div
            key={i}
            className="bg-gray-700 rounded-sm p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                className={`${
                  items.complete == false ? "bg-red-400" : "bg-green-700"
                } p-2 rounded w-3/6`}
                onClick={() => handleCompleteTask(items._id)}
              >
                {items.complete === true ? "Completed" : "In Completed"}
              </button>
              <div className="text-white  p-2 w-3/6 text-xl flex justify-around font-semibold">
                <button onClick={() => handleImportant(items._id)}>
                  {items.important === false ? (
                    <CiHeart />
                  ) : (
                    <FaHeart className="text-red-500" />
                  )}
                </button>
                <button
                  onClick={() =>
                    handleUpdate(items._id, items.title, items.desc)
                  }
                >
                  <FaEdit />
                </button>
                <button onClick={() => deleteTask(items._id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}

      {home === "true" && (
        <div
          onClick={() => setInput("fixed")}
          className="bg-gray-700 rounded-sm p-4 flex flex-col justify-center items-center text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
        >
          <IoAddCircle className="text-5xl" />
          <h2 className="text-2xl">Add Task</h2>
        </div>
      )}
    </div>
  );
}

export default Cards;
