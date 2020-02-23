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
    term: '',
    filter: 'all',
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

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, text) {
    if (text.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.toLowerCase().includes(text.toLowerCase()));
  };

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className='todo-app'>
        <AppHeader toDo={ todoCount } 
                   done={ doneCount }/>
        <div className='top-panel d-flex'>
          <SearchPanel onSearchChange={ this.onSearchChange }/>
          <ItemStatusFilter filter={ filter }
                            onFilterChange={ this.onFilterChange }
            />
        </div>
        <TodoList todos={ visibleItems } 
                  onDeleted={ this.deleteItem }
                  onImportant={ this.onToggleImportant }
                  onDone = { this.onToggleDone }
          />
        <AddTaskPanel onAdded={ this.addItem }/>
      </div>
    );
  }
}
