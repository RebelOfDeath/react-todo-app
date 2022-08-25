import React from 'react';
import { AddTask } from './features/AddTask/AddTask';
import { TaskList } from './features/TaskList/TaskList';
import { TaskFilter } from './features/TaskFilter/TaskFilter';
import './App.css';

function App() {
  return (
    <div className="App">
      <TaskFilter className="taskFilter"/>
      <AddTask className="AddTask"/>
      <TaskList className="TaskList"/>
    </div>
  );
}

export default App;
