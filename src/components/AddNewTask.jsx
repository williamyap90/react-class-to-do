import React, { Component } from 'react';

class AddNewTask extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: '' };
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newId = this.props.toDo.reduce((a, b) => (a.id > b.id ? a : b)).id + 1;

    this.props.addTask(newId, this.state.newTask);
    this.setState({ newTask: '' });
  };

  render() {
    return (
      <form className="new-task" onSubmit={this.handleSubmit}>
        <h2>
          <label htmlFor="new-todo-input">What needs to be done?</label>
        </h2>
        <input
          type="text"
          name="text"
          autoComplete="off"
          value={this.state.newTask}
          onChange={(e) => {
            this.handleInputChange(e);
          }}
        />
        <button type="submit" className="btn btn__primary" value="add">
          Add
        </button>
      </form>
    );
  }
}

export default AddNewTask;
