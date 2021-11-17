import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import ManageTasks from './components/ManageTasks';
import ToDoList from './components/ToDoList';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: data,
    };
  }

  updateList = (e, newTask) => {
    e.preventDefault();

    const currentToDos = this.state.toDo.map((item) => {
      return (item = { ...item });
    });
    const newId = currentToDos.reduce((a, b) => (a.id > b.id ? a : b)).id + 1;
    currentToDos.push({ id: newId, task: newTask, complete: false });

    this.setState({ toDo: currentToDos }, () => {});
  };

  removeTask = (taskId) => {
    const updatedToDos = this.state.toDo.filter((item) => {
      return item.id !== taskId;
    });

    this.setState({ toDo: updatedToDos });
  };

  render() {
    return (
      <div>
        <Header />
        <ManageTasks toDo={this.state.toDo} updateList={this.updateList} />
        <ToDoList toDo={this.state.toDo} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
