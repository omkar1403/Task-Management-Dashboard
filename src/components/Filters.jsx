import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';
import './Filters.css';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
      <button onClick={() => dispatch(setFilter('overdue'))}>Overdue</button>
    </div>
  );
};

export default Filters;
