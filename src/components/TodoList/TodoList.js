import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css'

const TodoList = (props) => {
  const { todos, onDeleted, onImportant, onDone } = props;
  const elements = todos.map(({ id, ...itemProps }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          { ...itemProps }
          onDeleted={ () => onDeleted(id) } 
          onImportant={ () => onImportant(id) }
          onDone={ () => onDone(id) }
          />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;