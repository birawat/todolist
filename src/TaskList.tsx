import React from 'react';
import TaskListItem  from './TaskListItem';

interface Props {
  tasks: Task[];
  toggleTask: ToggleTask;
}

const TaskList: React.FC<Props> = ({ tasks, toggleTask }) => {
   const totalIncomplete = tasks ? tasks.filter(item => item.isComplete === false) : [];
   const totalTask = tasks.length;
  return (
    <div>
      {<div>Total todos remaining: { totalIncomplete.length } out of { totalTask }.</div>  }
      <ul>
        {
        
        tasks.length > 0 ? tasks.map(item => (
          <TaskListItem key={item.text} taskItem={item} toggleTask={toggleTask} />
        )) : ''}
      </ul>
    </div>
    
  );
};

export default TaskList;