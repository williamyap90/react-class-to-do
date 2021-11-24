import React, { Component } from 'react';

class ToDo extends Component {
  state = {
    newTaskBody: '',
    editing: false,
  };

  handleEditing = (id, action) => {
    console.log(action);
    this.setState((state) => {
      return {
        ...state,
        editing: !state.editing,
      };
    });
  };

  render() {
    const { toDo, removeTask, handleChecked, editTask } = this.props;

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
          {this.state.editing ? <span>editing task...</span> : <span className={toDo.complete ? 'strikethrough' : ''}>{toDo.task}</span>}
        </div>

        <div className="todo-btn-container">
          {this.state.editing ? (
            <button onClick={() => this.handleEditing(toDo.id, 'save')}>Save</button>
          ) : (
            <button onClick={() => this.handleEditing(toDo.id, 'edit')}>Edit</button>
          )}
          {this.state.editing ? <button onClick={() => this.handleEditing(toDo.id, 'cancel')}>Cancel</button> : <button onClick={() => removeTask(toDo.id)}>Delete</button>}
        </div>
      </div>
    );
  }
}

// filters functionality
// edit functionality

export default ToDo;
