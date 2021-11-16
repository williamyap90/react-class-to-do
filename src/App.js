import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import ManageTasks from './components/ManageTasks';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ManageTasks />
        <ToDoList />
      </div>
    );
  }
}

export default App;
