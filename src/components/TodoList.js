import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  // const items = ['Get some coffee', 'Enjoy the day'];
  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;