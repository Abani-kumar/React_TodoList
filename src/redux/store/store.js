import { combineReducers } from "@reduxjs/toolkit";
import { taskSlice } from "../slices/task";

const rootreducer = combineReducers({
  task: taskSlice.reducer,
});

export default rootreducer;
