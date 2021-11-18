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

  addTask = (e, addTask) => {
    e.preventDefault();

    const newId = this.state.toDo.reduce((a, b) => (a.id > b.id ? a : b)).id + 1;
    const newTask = { id: newId, task: addTask, complete: false };

    this.setState({ ...this.state, toDo: [...this.state.toDo, newTask] });
  };

  removeTask = (taskId) => {
    const updatedToDos = this.state.toDo.filter((item) => {
      return item.id !== taskId;
    });

    this.setState({ ...this.state, toDo: updatedToDos });
  };

  handleChecked = (taskId, isChecked) => {
    const updateToDo = this.state.toDo.map((item) => {
      if (item.id === taskId) {
        return { ...item, complete: isChecked };
      }
      return item;
    });

    this.setState({ ...this.state, toDo: updateToDo });
  };

  filterTasks = () => {
    console.log('filters triggered');
  };

  render() {
    return (
      <div>
        <Header />
        <ManageTasks toDo={this.state.toDo} addTask={this.addTask} />
        <ToDoList toDo={this.state.toDo} removeTask={this.removeTask} handleChecked={this.handleChecked} />
      </div>
    );
  }
}

export default App;
