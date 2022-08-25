import { createSlice } from "@reduxjs/toolkit";
import { initializeConnect } from "react-redux/es/components/connect";

const initialState = [];

const taskListSlice = createSlice({
    name: "taskList",
    initialState,
    reducers: {
        addTask(state, action){
            let id;
            if(state.length === 0){
                id = 1;
            }else{
                id = state[state.length - 1].id + 1;
            }
            let newTask = {...action.payload, id: id};
            return [...state, newTask];
        },
        removeTask(state, action){
            return [...state].filter((task) => {
                return task.id !== action.payload;
            })
        },
        toggleTaskCompleted(state, action){
            console.log(`I reached here`)
            return state.map((task) => {
                console.log({...task});
                if(task.id === action.payload){
                    return {...task, completed: !task.completed}
                }else{
                    return task
                }
            })
        }
    }
})

export const {addTask, removeTask, toggleTaskCompleted} = taskListSlice.actions;
console.log(taskListSlice.actions)
export default taskListSlice.reducer;