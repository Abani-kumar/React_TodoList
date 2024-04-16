import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updatedTask } from "../redux/slices/task";
import toast from "react-hot-toast";
import Checkmark from "./Checkmark";

const Todo = ({ task }) => {
  
  const dispatch=useDispatch();
  
  return (
    <div>
      <div className="flex bg-sky-300  rounded-full h-fit py-1 items-center w-full justify-between mb-4">
        <div className="flex gap-4 items-center">
          <Checkmark task={task}/>
          <p className={`${task.status === "completed" ? "line-through" : ""}`}>
            {task?.title}
          </p>
        </div>
        <div>
          <button onClick={()=>dispatch(removeTask(task.id))} className="w-fit h-fit py-1 px-1 rounded-full bg-slate-200 mr-3">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
