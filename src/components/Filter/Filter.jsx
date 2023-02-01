import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="container">
        <h3>Find contacts by name</h3>
        <input
          type="text"
          placeholder=" Filter"
          onChange={this.props.changeFilter}
          value={this.props.filter}
        />
      </div>
    );
  }
}
