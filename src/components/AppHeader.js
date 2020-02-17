import React from 'react';

import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="d-flex app-header">
      <h1 className="main-title">Todo List</h1>
      <p className="text-secondary">
        <span className="text-info">{toDo}</span> more to do, <span className="text-danger">{done}</span> done
      </p>
    </div>
  );
};

export default AppHeader;
