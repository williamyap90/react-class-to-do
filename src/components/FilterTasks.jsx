import React, { Component } from 'react';

class FilterTasks extends Component {
  isActive = (currentFilter, buttonFilter) => {
    return currentFilter === buttonFilter;
  };

  render() {
    const { updateFilter, filter } = this.props;

    return (
      <div className="filters-btn-container">
        <button disabled={this.isActive(filter, 'SHOW_ALL')} onClick={() => updateFilter('SHOW_ALL')}>
          All
        </button>
        <button disabled={this.isActive(filter, 'SHOW_ACTIVE')} onClick={() => updateFilter('SHOW_ACTIVE')}>
          Active
        </button>
        <button disabled={this.isActive(filter, 'SHOW_COMPLETED')} onClick={() => updateFilter('SHOW_COMPLETED')}>
          Completed
        </button>
      </div>
    );
  }
}

export default FilterTasks;
