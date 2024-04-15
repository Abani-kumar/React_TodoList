import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
   tasks:localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : "",
};

export const taskSlice = createSlice({
    name: "task",
    initialState: initialstate,
    reducers: {
      setTask: (state, action) => {
        const updatedTask = [{id:action.payload.id,title:action.payload.title,status:"pending"},...state.tasks ];
        state.tasks=updatedTask;
        localStorage.setItem("tasks", JSON.stringify(updatedTask));
      },
      updatedTask:(state,action) =>{
        const updatedTask=state.tasks.filter((task)=>task.id===action.payload)[0].status="completed";
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      },
      removeTask:(state,action)=>{
        const updatedTask=state.tasks.filter((task)=>task.id!==action.payload);
        state.tasks=updatedTask;
        localStorage.setItem("tasks", JSON.stringify(updatedTask));
      }
    },
  });
  
  export const { setTask,updatedTask,removeTask } = taskSlice.actions;
  export default taskSlice.reducer;
  