import React, { Component } from 'react';

class AddNewTask extends Component {
  render() {
    return (
      <div>
        <form className="new-task">
          <input type="text" />
          <button type="submit" value="add">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewTask;
