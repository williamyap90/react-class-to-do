import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import List from './components/List';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreateTask />
                <List />
            </div>
        );
    }
}

export default App;
