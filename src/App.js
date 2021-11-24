import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import ManageTasks from './components/ManageTasks';
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';

class App extends Component {
  filterTasks = () => {
    console.log('filters triggered');
  };

  render() {
    return (
      <div>
        <Header />
        <ManageTasks toDo={this.props.toDo} addTask={this.props.addTask} />
        <ToDoList toDo={this.props.toDo} removeTask={this.props.removeTask} handleChecked={this.props.handleChecked} editTask={this.props.editTask} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDo: state.toDo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newId, newTask) => {
      dispatch({ type: 'ADD_TASK', id: newId, body: newTask });
    },
    removeTask: (id) => {
      dispatch({ type: 'DELETE_TASK', id: id });
    },
    handleChecked: (id, isChecked) => {
      dispatch({ type: 'TOGGLE_CHECKED', id: id, isChecked: isChecked });
    },
    editTask: (id, newTaskBody) => {
      dispatch({ type: 'EDIT_TASK', id: id, body: newTaskBody });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
