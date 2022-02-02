import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
  getVisibleToDos = (toDos, filter) => {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return toDos.filter((task) => !task.complete);
      case 'SHOW_COMPLETED':
        return toDos.filter((task) => task.complete);
      default:
        // SHOW_ALL
        return toDos;
    }
  };

  render() {
    const { toDo, removeTask, handleChecked, editTask, filter } = this.props;

    const visibleToDos = this.getVisibleToDos(toDo, filter);

    const outstandingTasks = visibleToDos.filter((item) => item.complete !== true);

    return (
      <div>
        {outstandingTasks.length ? <h2>{outstandingTasks.length} tasks remaining</h2> : <h2>You have no tasks outstanding</h2>}

        {visibleToDos.map((item) => {
          return <ToDo key={item.id} toDo={item} removeTask={removeTask} handleChecked={handleChecked} editTask={editTask} />;
        })}
      </div>
    );
  }
}

export default ToDoList;
