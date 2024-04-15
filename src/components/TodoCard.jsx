import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoCard = () => {
  const { tasks }=useSelector((state)=>state.task);
  // console.log(tasks)
  return (
    <div className="w-[90%] mx-auto">
      { 
        tasks==="" ?<h1 className="text-center text-3xl text-slate-100 mt-6">you don't have any todo!</h1>:tasks?.map((task,index)=>(
          <Todo key={index} task={task}/>
        ))
      }
    </div>
  );
};

export default TodoCard;