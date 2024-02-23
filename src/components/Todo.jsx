
import React from 'react';
import Button from './Button';

const Todo = ({ task, onDelete, onEdit }) => {

  return (
    <div>
        <>
          <h3>
            {task.title} - {task.date} - {task.assignee}
            <Button label="Edit" onClick={()=>onEdit(task)} />
            <Button label="X" onClick={() => onDelete(task.id)} />
          </h3>
        </>
    </div>
  );
};

export default Todo;

