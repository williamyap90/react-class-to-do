import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import ManageTasks from './components/ManageTasks';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ManageTasks />
        <List />
      </div>
    );
  }
}

export default App;
