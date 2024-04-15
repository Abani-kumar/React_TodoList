import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { setTask } from '../redux/slices/task';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const dispatch=useDispatch();
  function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 9);
    return `${timestamp}-${randomId}`;
  }
  const [todo,setTodo]=useState("");

  const addTask=(e)=>{
    e.preventDefault();
    if(todo===""){
      toast.error("Please add something without empty field");
      return;
    }
    todo.trim();
    const uniqueId=generateUniqueId();
    dispatch(setTask({title:todo,id:uniqueId}));
    setTodo("");
  }
  return (
    <div className='w-[90%] mx-auto flex gap-4 mt-1'>
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='outline-none bg-slate-200 rounded-full w-[85%] placeholder:pl-4 placeholder:text-slate-500 pl-4' placeholder='Add Task'/>
      <button onClick={addTask} className='w-[40px] h-[40px]  rounded-full bg-slate-100'>Add</button>
    </div>
  )
}

export default AddTask