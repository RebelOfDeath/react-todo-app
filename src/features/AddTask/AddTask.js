import React from "react";
import { store } from "../../app/store";
import { useSelector } from "react-redux";
import { changeTitle, changeDescription, clearState } from "./addTaskSlice";
import { addTask } from "../TaskList/taskListSlice";

export const AddTask = () => {
    const handleTitleChange = (e) => {
        let newTitle = e.target.value;
        store.dispatch({
            type: 'addTask/changeTitle',
            payload: newTitle,
        })
    };

    const handleDescriptionChange = (e) => {
        let newDesc = e.target.value;
        store.dispatch({
            type: 'addTask/changeDescription',
            payload: newDesc
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch({
            type: 'taskList/addTask',
            payload: store.getState().addTask
        })
        store.dispatch({
            type: 'addTask/clearState'
        })
    };
    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Title"
                value={useSelector(state => state.addTask.title)}
                onChange={handleTitleChange}
            />
            <input
                type="text"
                placeholder="Description"
                value={useSelector(state => state.addTask.description)}
                onChange={handleDescriptionChange}
            />
            <input type="submit" value="Add Task"/> 
        </form>
    );
};
