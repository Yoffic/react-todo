import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    input: '',
  };

  onSearchChange = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
    this.props.onSearchChange(value);
  }

  render() {
    return <input 
      className="form-control search-panel" 
      placeholder="type to search"
      value={ this.state.input }
      onChange={ this.onSearchChange }
    />;
  };
};
