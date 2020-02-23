import React, { Component } from 'react';

import './AddTaskPanel.css';

export default class AddTaskPanel extends Component {
  state = {
    input: ''
  };

  onInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.input);
    this.setState({
      input: ''
    });
  };

  render() {
    return (
      <form 
        className="mt-3 add-task-panel d-flex" 
        onSubmit={ this.onSubmit }>
        <input 
          type="text"
          className="form-control mr-2 add-task-input"
          onChange={ this.onInputChange }
          placeholder="Type task here"
          value={ this.state.input } />
        <button className="btn btn-outline-info">Add Task</button>
      </form>
    );
  }
};
