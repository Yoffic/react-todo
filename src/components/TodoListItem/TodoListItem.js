import React from 'react';

import './TodoListItem.css';

const TodoListItem = (props) => {
  const { label, onDeleted, onImportant, onDone, important, done } = props;
  const itemClasses = ['todo-list-item'];
  if (done) {
    itemClasses.push('done');
  }
  if (important) {
    itemClasses.push('important');
  }

  return (
    <span className={itemClasses.join(' ')}>
      <span 
        className="todo-list-item-label"
        onClick={ onDone }>
        { label }
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ onImportant }>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={ onDeleted }>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
