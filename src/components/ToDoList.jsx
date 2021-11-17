import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
  render() {
    const { toDo } = this.props;

    return (
      <div>
        <h2>{toDo.length} tasks remaining</h2>
        {toDo.map((item) => {
          return <ToDo key={item.id} toDo={item} />;
        })}
      </div>
    );
  }
}

export default ToDoList;
