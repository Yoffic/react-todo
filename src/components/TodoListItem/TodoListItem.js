import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
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
          onClick={ this.onLabelClick }>
          { label }
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ this.onMarkImportant }>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
