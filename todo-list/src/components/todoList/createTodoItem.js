import React, { Component } from 'react';
import { connect } from 'react-redux';

class createTodoItem extends Component {
  createTask(event) {
    event.preventDefault();
    this.props.onAddTask(this.refs.createTask.value);
    this.refs.createTask.value = '';
    // ref={(input) => { this.taskInput = input }} // this.taskInput.value
    // ref="createTask" // this.refs.createTask
  }

  render() {
    return (
      <form onSubmit={this.createTask.bind(this)}>
        <input type="text"
               placeholder="What do I need to do?"
               ref="createTask" />
        <button>Create</button>
      </form>
    );
  }
}

export default connect(
  store => ({
    store
  }),
  dispatch => ({
    onAddTask: (taskName) => {
      const task = {
        task: taskName,
        isCompleted: false
      };
      dispatch({ type: 'ADD_TASK', task })
    }
  })
)(createTodoItem);
