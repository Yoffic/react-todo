import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';

export default class App extends Component {
  
  state = {
    todoData: [
      { label: 'Get some coffee', important: false, id: 1 },
      { label: 'Enjoy the day', important: true, id: 2 },
      { label: 'Crack the code', important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const elemIndex = todoData.findIndex((el) => el.id === id);
      const updatedTodoData = [
        ...todoData.slice(0, elemIndex),
        ...todoData.slice(elemIndex + 1)
      ];

      return {
        todoData: updatedTodoData,
      };
    });
  };

  render() {
    return (
      <div className='todo-app'>
        <AppHeader toDo={3} done={1}/>
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }
          />
      </div>
    );
  }
}
