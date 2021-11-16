import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const { toDo } = this.props;
    return (
      <div>
        <div>{toDo.task}</div>
      </div>
    );
  }
}

export default ToDo;
