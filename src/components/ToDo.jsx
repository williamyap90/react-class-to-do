import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const { toDo, removeTask } = this.props;

    return (
      <div className="todo-item">
        <div>{toDo.task}</div>
        <div className="todo-btn-container">
          <button onClick={() => console.log('edit clicked')}>Edit</button>
          <button onClick={() => removeTask(toDo.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

// filters functionality
// edit functionality

export default ToDo;
