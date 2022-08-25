import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "../TaskList/taskListSlice";
const initialState = {
    id: null,
    title: "",
    description: "",
    completed: false,
}

const addTaskSlice = createSlice({
    name: "addTask",
    initialState,
    reducers: {
        changeTitle(state, action){
            console.log(`tried to change title state`);
            return {...state, title: action.payload}
        },
        changeDescription(state, action){
            return {...state, description: action.payload}
        },
        clearState(state){
            return initialState;
        },
    }

})

export const { changeTitle, changeDescription, clearState } = addTaskSlice.actions;
export default addTaskSlice.reducer