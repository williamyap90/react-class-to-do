import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const { toDo } = this.props;
    return (
      <div>
        <div>{toDo.task}</div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default ToDo;
