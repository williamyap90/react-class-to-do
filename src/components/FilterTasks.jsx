import React, { Component } from 'react';

class FilterTasks extends Component {
  render() {
    return (
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    );
  }
}

export default FilterTasks;
