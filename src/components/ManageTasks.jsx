import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import FilterTasks from './FilterTasks';

class ManageTasks extends Component {
  render() {
    return (
      <div>
        <h2>What needs to be done?</h2>
        <AddNewTask />
        <FilterTasks />
      </div>
    );
  }
}

export default ManageTasks;
