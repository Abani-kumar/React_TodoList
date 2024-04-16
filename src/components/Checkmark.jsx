import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedTask } from "../redux/slices/task";
import toast from "react-hot-toast";

const Checkmark = ({ task }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(
    task?.status === "completed" ? true : false
  );
  const handleIsChecked = () => {
    if(task?.status === "completed"){
        toast.error("Task already completed");
        return;
    }
    setIsChecked(true);
    dispatch(updatedTask(task?.id));
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleIsChecked}
        className="ml-3 h-4 w-4 rounded-full border-gray-400 focus:border-raisin focus:ring-2  text-white outline-none"
      />
    </div>
  );
};

export default Checkmark;
