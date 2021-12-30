import React, { Component } from 'react';

class FilterTasks extends Component {
  render() {
    const { updateFilter } = this.props;
    return (
      <div className="filters-btn-container">
        <button onClick={() => updateFilter('SHOW_ALL')}>All</button>
        <button onClick={() => updateFilter('SHOW_ACTIVE')}>Active</button>
        <button onClick={() => updateFilter('SHOW_COMPLETED')}>Completed</button>
      </div>
    );
  }
}

export default FilterTasks;
