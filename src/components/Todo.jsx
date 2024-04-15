import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updatedTask } from "../redux/slices/task";
import toast from "react-hot-toast";

const Todo = ({ task }) => {
  const [isChecked, setIsChecked] = useState(
    task?.status === "completed" ? true : false
  );
  const [checkboxDisabled,setCheckboxDisabled]=useState(task?.status === "completed" ? true : false);
  const dispatch=useDispatch();
  const handleIsChecked=(e)=>{
    e.preventDefault();
    if(task?.status === "completed"){
        toast.error("Task already completed");
        return;
    }
    setIsChecked(true);
    setCheckboxDisabled(true);
    dispatch(updatedTask(task?.id))
  }
  return (
    <div>
      <div className="flex bg-sky-300  rounded-full h-fit py-1 items-center w-full justify-between mb-4">
        <div className="flex gap-4 items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleIsChecked}
            disabled={checkboxDisabled}
            className="ml-3 h-4 w-4 rounded-full border-gray-400 focus:border-raisin focus:ring-2  text-white outline-none"
          />
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
