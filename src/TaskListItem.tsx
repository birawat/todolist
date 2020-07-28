import React from 'react';

interface Props {
  taskItem: Task;
  toggleTask: ToggleTask;
}

const TaskListItem: React.FC<Props> = ({ taskItem, toggleTask }) => {
  return (
    <li>
      <label
       onClick={() => {
        toggleTask(taskItem);
      }} style={{ textDecoration: taskItem.isComplete ? 'line-through' : undefined }}
      ><span className="text-span">{taskItem.text}</span>
      </label>
    </li>
  );
};

export default TaskListItem;