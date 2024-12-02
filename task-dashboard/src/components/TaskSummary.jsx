import React from 'react';
import { useSelector } from 'react-redux';
import './TaskSummary.css';

const TaskSummary = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const overdueTasks = tasks.filter(
    (task) => new Date(task.dueDate) < new Date() && !task.completed
  ).length;

  return (
    <div className="task-summary">
      <h3>Task Summary</h3>
      <div className="stats">
        <div>Total Tasks: <strong>{totalTasks}</strong></div>
        <div>Completed: <strong>{completedTasks}</strong></div>
        <div>Pending: <strong>{pendingTasks}</strong></div>
        <div>Overdue: <strong>{overdueTasks}</strong></div>
      </div>
    </div>
  );
};

export default TaskSummary;
