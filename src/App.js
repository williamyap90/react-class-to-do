import './App.css';
import React, { Component } from 'react';
import ToDo from './components/ToDo';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ToDo />
            </div>
        );
    }
}

export default App;
