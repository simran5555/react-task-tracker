
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';

const TodoForm = ({ addTask, editTask, editingTask }) => {
  const [taskData, setTaskData] = useState({ title: '', date: '', assignee: '' });

  useEffect(() => {
    if (editingTask) {
      setTaskData({ title: editingTask.title, date: editingTask.date, assignee:editingTask.assignee});
    } else {
      setTaskData({ title: '', date: '' ,  assignee: ''});
    }
  }, [editingTask]);

  const onClick = (e) => {
    e.preventDefault();
    if (!taskData.title) {
      alert('Please add a task title');
      return false;
    }

    if (editingTask) {
      editTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }

    // Clear fields after adding/editing
    setTaskData({ title: '', date: '' });
  };

  const handleChange = (name, value) => {
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <Input type="text" name="Title" inputValue={taskData.title} handleChange={(value) => handleChange('title', value)} />
        <Input type="date" name="Date" inputValue={taskData.date} handleChange={(value) => handleChange('date', value)} />
        <label htmlFor="">Assignee</label>
        <select name="assignee" value={taskData.assignee} onChange={(e) => handleChange('assignee', e.target.value)}>
          <option value="select">select</option>
          <option value="shrey">shrey</option>
          <option value="shreya">shreya</option>
          <option value="shruti">shruti</option>
        </select>
        <br />
        <Button onClick={onClick} label={editingTask ? 'Update' : 'Add'} />
      </form>
    </div>
  );
};

export default TodoForm;



