import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const { toDo } = this.props;
    return (
      <div className="todo-item">
        <div>{toDo.task}</div>
        <div className="todo-btn-container">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default ToDo;
