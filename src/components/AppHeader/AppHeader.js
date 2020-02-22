import React from 'react';

import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="d-flex app-header">
      <h1 className="main-title">Todo List</h1>
      <p className="text-secondary">
        <span class="badge badge-secondary">{toDo}</span> more to do, <span className="badge badge-success">{done}</span> done
      </p>
    </div>
  );
};

export default AppHeader;
