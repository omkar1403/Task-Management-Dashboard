import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
import TaskSummary from './components/TaskSummary';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Provider store={store}>
      <div className="dashboard">
        <header>
          <h1>Task Management Dashboard</h1>
        </header>
        <main>
          <TaskSummary />
          <SearchBar onSearch={setSearchQuery} />
          <TaskForm />
          <Filters />
          <TaskList searchQuery={searchQuery} />
        </main>
      </div>
    </Provider>
  );
};

export default App;
