import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../app/store";

export const TaskList = () => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        let taskKey = Number(e.target.classList[0]);
        console.log(taskKey);
        dispatch({
            type: "taskList/removeTask",
            payload: taskKey,
        });
    };

    const handleTaskCheck = (e) => {
        dispatch({
            type: "taskList/toggleTaskCompleted",
            payload: Number(e.target.classList[0]),
        });
    };

    let tasks = useSelector((state) => state.taskList);
    let applyFilter = useSelector((state) => state.taskFilter);
    if (applyFilter) {
        tasks = tasks.filter((task) => {
            return task.completed === false;
        });
    }

    return (
        <div className="taskList">
            {[...tasks].map((task) => {
                return (
                    <div key={task.id} className={`taskCard${task.completed ? " completed" : ''}`}>
                        <input
                            type="checkbox"
                            className={task.id}
                            onChange={handleTaskCheck}
                            checked={task.completed ? 'checked' : ''}
                        />
                        <p key={`task${task.id}-title`} className="taskTitle">{task.title}</p>
                        <p key={`task${task.id}-desc`} className="taskDesc">{task.description}</p>
                        <button
                            key={task.id}
                            className={`${task.id}`}
                            onClick={handleDelete}
                        >
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
