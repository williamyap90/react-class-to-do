import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import ManageTasks from './components/ManageTasks';
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ManageTasks toDo={this.props.toDo} addTask={this.props.addTask} updateFilter={this.props.updateFilter} />
        <ToDoList toDo={this.props.toDo} removeTask={this.props.removeTask} handleChecked={this.props.handleChecked} editTask={this.props.editTask} filter={this.props.filter} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDo: state.toDo,
    filter: state.filter,
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
    updateFilter: (selectedFilter) => {
      dispatch({ type: 'UPDATE_FILTER', filter: selectedFilter });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
