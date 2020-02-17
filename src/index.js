import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import './index.css';


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

ReactDOM.render(<App />, document.getElementById('root'));
