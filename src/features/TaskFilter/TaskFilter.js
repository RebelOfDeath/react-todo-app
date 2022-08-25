import React from "react";
import { store } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";

export const TaskFilter = () => {
    const dispatch = useDispatch();

    const handleFilterToggle = (e) => {
        dispatch({type: 'taskFilter/toggleFilter'});
    }

    const filterState = useSelector(state => state.taskFilter);

    return (
        <button onClick={handleFilterToggle} className="filter-button">
            {filterState? "Show All Tasks": "Show Uncompleted Tasks"}
        </button>
    )
}