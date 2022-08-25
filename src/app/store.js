import { configureStore } from '@reduxjs/toolkit';
import addTaskSlice from '../features/AddTask/addTaskSlice';
import taskFilterSlice from '../features/TaskFilter/taskFilterSlice';
import taskListSlice from '../features/TaskList/taskListSlice';
/*
  basic strucuture store object

  store = {
    todos: [
      {
       id: int,
       title: string,
       description: string,
       completed: bool,
      }
    ],
    filter_completed= bool ,
  }

*/

export const store = configureStore({
  reducer:{
    addTask: addTaskSlice,
    taskFilter: taskFilterSlice,
    taskList: taskListSlice
  }
});

console.log(store);

