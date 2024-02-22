
import React from 'react';
import Todo from './Todo';

const TodoList = ({ tasks, onDelete, onEdit }) => {
  return (
    <>
      {tasks.map((task) => (
        <Todo task={task} key={task.id} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
};

export default TodoList;
