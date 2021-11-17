import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const { toDo, removeTask, handleChecked } = this.props;

    return (
      <div className="todo-item">
        <div className="todo-todo-container">
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={toDo.complete}
            onChange={(e) => {
              handleChecked(toDo.id, e.target.checked);
            }}
          />
          <span className={toDo.complete ? 'strikethrough' : ''}>{toDo.task}</span>
        </div>

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
