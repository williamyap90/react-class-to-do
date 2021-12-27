import React, { Component } from 'react';

class ToDo extends Component {
  state = {
    newTaskBody: '',
    editing: false,
  };

  toggleEditing = () => {
    this.setState((state) => {
      return {
        ...state,
        editing: !state.editing,
      };
    });
  };

  handleInputChange = (e) => {
    this.setState((state) => {
      return {
        ...state,
        newTaskBody: e.target.value,
      };
    });
  };

  handleCancel = () => {
    this.setState((state) => {
      return {
        ...state,
        newTaskBody: '',
        editing: false,
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
          {this.state.editing ? (
            <input className="edit-box" autoFocus type="text" id="edit" placeholder={toDo.task} onChange={(e) => this.handleInputChange(e)} />
          ) : (
            <span className={toDo.complete ? 'strikethrough' : ''}>{toDo.task}</span>
          )}
        </div>

        <div className="todo-btn-container">
          {this.state.editing ? (
            <>
              <button
                type="submit"
                form="edit-form"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={(e) => {
                  e.preventDefault();
                  editTask(toDo.id, this.state.newTaskBody);
                  handleChecked(toDo.id, false);
                  this.toggleEditing();
                }}>
                Save
              </button>
              <button
                onClick={() => {
                  this.handleCancel();
                }}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={() => this.toggleEditing()}>Edit</button>
              <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => removeTask(toDo.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

// filters functionality
export default ToDo;
