import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddTaskPanel from '../AddTaskPanel';
import './App.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Get Some Coffee'),
      this.createTodoItem('Enjoy The Day'),
      this.createTodoItem('Crack The Code'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++,
    };
  }

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

  addItem = (label) => {
    const newItem = this.createTodoItem(label);

    this.setState(({ todoData }) => {
      const updatedTodoData = [...todoData, newItem];
      return {
        todoData: updatedTodoData,
      };
    });
  };

  toggleProperty(items, id, propName) {
    const itemIndex = items.findIndex((el) => el.id === id);
    const oldItem = items[itemIndex];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const updatedItems = [
      ...items.slice(0, itemIndex),
      newItem,
      ...items.slice(itemIndex + 1)
    ];
    
    return updatedItems;
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={todoData} 
          onDeleted={ this.deleteItem }
          onImportant={ this.onToggleImportant }
          onDone = { this.onToggleDone }
          />
        <AddTaskPanel onAdded={ this.addItem }/>
      </div>
    );
  }
}
