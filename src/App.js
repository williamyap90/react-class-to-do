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

  render() {
    return (
      <div>
        <Header />
        <ManageTasks />
        <ToDoList toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
