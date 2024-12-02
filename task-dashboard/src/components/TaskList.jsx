import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../features/tasks/taskSlice';
import './TaskList.css';

const TaskList = ({ searchQuery }) => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'completed') return task.completed && matchesSearch;
    if (filter === 'pending') return !task.completed && matchesSearch;
    if (filter === 'overdue') return new Date(task.dueDate) < new Date() && !task.completed && matchesSearch;
    return matchesSearch;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <h3>
            {task.title} 
            <span className="material-icons" style={{ color: '#4caf50', marginLeft: '10px' }}>
              {task.completed ? 'check_circle' : 'radio_button_unchecked'}
            </span>
          </h3>
          <p>{task.description}</p>
          <small>Due: {task.dueDate}</small>
          <div className="task-actions">
            <button onClick={() => dispatch(toggleComplete(task.id))}>
              {task.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
