import React, { useState } from 'react';

interface Props {
  addTask: AddTask;
}

const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input type="text" placeholder="Enter your todo here" value={text} onChange={e => { if (e.target.value) { setText(e.target.value); } }} />
      <button type="submit" onClick={() => {
         if (text !== '') { addTask(text); setText(''); }
         }}>
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;