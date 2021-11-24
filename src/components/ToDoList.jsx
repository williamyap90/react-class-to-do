import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
  render() {
    const { toDo, removeTask, handleChecked } = this.props;

    const outstandingTasks = toDo.filter((item) => item.complete !== true);

    return (
      <div>
        {outstandingTasks.length ? <h2>{outstandingTasks.length} tasks remaining</h2> : <h2>You have no tasks outstanding</h2>}

        {toDo.map((item) => {
          return <ToDo key={item.id} toDo={item} removeTask={removeTask} handleChecked={handleChecked} />;
        })}
      </div>
    );
  }
}

export default ToDoList;
