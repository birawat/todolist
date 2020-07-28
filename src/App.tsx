import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTasksForm  from './AddTasksForm';

const INITIAL_STATE: Task[] = JSON.parse(window.localStorage.getItem('todo') || '[]');

export default function App() {
  const [taskItem, setTasks] = useState(INITIAL_STATE);

  const toggleTask: ToggleTask = (todone: Task) => {
    const newTask = taskItem.map(task => {
      if (task === todone) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    
    setTasks(newTask);
  };
  
  const addTask: AddTask= (text: string) => {
    const newTask = { text, isComplete: false };
    setTasks([...taskItem, newTask]);
  };

  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(taskItem)); 
  }, [taskItem])

  return (
    <>
      <TaskList tasks={taskItem} toggleTask={toggleTask} />
      <AddTasksForm addTask={addTask} />
    </>
  );
}