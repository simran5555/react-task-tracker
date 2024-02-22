// App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    const updatedData = tasks.filter((task) => task.id !== id);
    setTasks(updatedData);
  };

  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task));
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <TodoForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} onEdit={startEditing} />
    </>
  );
};

export default App;

