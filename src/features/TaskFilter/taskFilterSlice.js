import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const taskFilterSlice = createSlice({
    name: "taskFilter",
    initialState: initialState,
    reducers: {
        toggleFilter(state) {
            return !state;
        }
    }
})

export const { toggleFilter } = taskFilterSlice.actions;
console.log(taskFilterSlice.actions)
export default taskFilterSlice.reducer;