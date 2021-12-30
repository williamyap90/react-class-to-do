import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import FilterTasks from './FilterTasks';

class ManageTasks extends Component {
  render() {
    return (
      <div>
        <AddNewTask toDo={this.props.toDo} addTask={this.props.addTask} />
        <FilterTasks updateFilter={this.props.updateFilter} />
      </div>
    );
  }
}

export default ManageTasks;
