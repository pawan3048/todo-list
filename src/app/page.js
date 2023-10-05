"use client";

import React, { useState } from "react";
import "@/app/form.css";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  let handleFrom = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);

    console.log(title);
    console.log(desc);
    settitle("");
    setdesc("");
  }
  let deleteHandler = (dlt) => {
    let copyTask = [...mainTask];
    copyTask.splice(dlt, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h1 className="renderTask">No Task Available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <li key={i}>
          <div className="task-wrap">
            <h5>{i}</h5>
            <h5 className="task-title">{task.title}</h5>
            <h5 className="task-desc">{task.desc}</h5>
            <button
              className="task-delete"
              onClick={()=>{deleteHandler(i)}}>Delete</button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div className="bg-black color-white">
        <h1 className="text-pink-50 p-5 text-3xl font-[700]">My Todo List</h1>
      </div>
      <form onSubmit={handleFrom} className="myform">
        <label>Title : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="border-zinc-800 border-4 p-2 mx-5"
          placeholder="Enter Title Here.."
        />
        <label>Description : </label>
        <input
          type="text"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          placeholder="Enter Description Here.."
          className="border-zinc-800 border-4 p-2 mx-5"
        />
        <button onClick={() => {}} className="submitbtn">
          Add Task
        </button>
      </form>
      <hr />
      <ul>{renderTask}</ul>
    </>
  );
};

export default page;
