import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';


const App = () => {

  const todoData = [
    { label: 'Get some coffee', important: false, id: 1 },
    { label: 'Enjoy the day', important: true, id: 2 },
    { label: 'Crack the code', important: false, id: 3 },
  ];

  return (
    <div className='todo-app'>
      <AppHeader toDo={3} done={1}/>
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
