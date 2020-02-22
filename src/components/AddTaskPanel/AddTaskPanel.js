import React, { Component } from 'react';

import './AddTaskPanel.css';

export default class AddTaskPanel extends Component {
  render() {
    const { onAdded } = this.props;

    return (
      <div className="mt-3 add-task-panel">
        <button className="btn btn-outline-info" onClick={ () => onAdded('Hello') }>Add Task</button>
      </div>
    );
  }
};
