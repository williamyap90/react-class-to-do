import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import FilterTasks from './FilterTasks';

class ManageTasks extends Component {
  render() {
    return (
      <div>
        <AddNewTask props={this.props} />
        <FilterTasks />
      </div>
    );
  }
}

export default ManageTasks;
