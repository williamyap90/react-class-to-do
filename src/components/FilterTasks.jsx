import React, { Component } from 'react';

class FilterTasks extends Component {
  render() {
    return (
      <div>
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
    );
  }
}

export default FilterTasks;
