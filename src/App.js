import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import ManageTasks from './components/ManageTasks';
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';

class App extends Component {
  removeTask = (taskId) => {
    const updatedToDos = this.props.toDo.filter((item) => {
      return item.id !== taskId;
    });

    this.setState({ ...this.props, toDo: updatedToDos });
  };

  handleChecked = (taskId, isChecked) => {
    const updateToDo = this.props.toDo.map((item) => {
      if (item.id === taskId) {
        return { ...item, complete: isChecked };
      }
      return item;
    });

    this.setState({ ...this.props, toDo: updateToDo });
  };

  filterTasks = () => {
    console.log('filters triggered');
  };

  render() {
    return (
      <div>
        <Header />
        <ManageTasks toDo={this.props.toDo} addTask={this.props.addTask} />
        <ToDoList toDo={this.props.toDo} removeTask={this.removeTask} handleChecked={this.handleChecked} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
