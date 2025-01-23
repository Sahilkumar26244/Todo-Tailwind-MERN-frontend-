import React, { useEffect, useState } from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportantOutline } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import axios from "axios";
function Sidebar() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const datas = [
    {
      title: "All task",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important task",
      icon: <MdLabelImportantOutline />,
      link: "/importantTasks",
    },
    {
      title: "Completed task",
      icon: <FaCheckDouble />,
      link: "/completedTasks",
    },
    {
      title: "Incompleted task",
      icon: <TbNotebookOff />,
      link: "/incompletedTasks",
    },
  ];

  const [data,setData] = useState()

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear("id");
    localStorage.clear("token");
    history("/login");
  };

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:1000/task/get", {
        headers,
      });
    //   console.log(res.data.data);
      setData(res.data.data)
    };
    fetch();
  }, []);

  
  return (
    <>
      {data && (
        <div>
        <h2 className="text-xl font-semibold">{data.username}</h2>
        <h4 className="mb-1 text-gray-400">{data.email}</h4>
        <hr />
      </div>
      )}
      <div>
        {datas.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className="my-2 flex items-center gap-3 hover:bg-gray-600 p-2 rounded transition-all duration-100 cursor-pointer"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded" onClick={logout}>
          Log Out
        </button>
      </div>
    </>
  );
}

export default Sidebar;
