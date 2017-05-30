import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, FormControl, Form } from 'react-bootstrap';

class createTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {
        msg: '',
        isShow: false
      }
    };
  }

  createTask(event) {
    event.preventDefault();
    const error = this.validateTask(this.taskInput.value);

    if (error.isShow) {
      return this.setState({ error });
    }

    this.setState({ error: { msg: '', isShow: false } });
    this.props.onAddTask(this.taskInput.value);
    this.taskInput.value = '';
    // this.props.onAddTask(this.refs.createTask.value);
    // this.refs.createTask.value = '';

    // ref={(input) => { this.taskInput = input }} // this.taskInput.value
    // ref="createTask" // this.refs.createTask
  }

  validateTask(inputValue) {
    if (!inputValue) {
      return { isShow: true, msg: 'Please enter the task' };
    }

    let searchItem = this.props.store.todo.findIndex((item) => {
      return item.task === inputValue;
    });

    if(searchItem !== -1) {
      return { isShow: true, msg: 'Task already exists' };
    }

    return { isShow: false };
  }

  renderError() {
    if (this.state.error.isShow) {
      return (
        <p className="help-block msg-error">{ this.state.error.msg }</p>
      );
    }
  }

  render() {
    return (
      <Form onSubmit={this.createTask.bind(this)} className="row create-form">
        <div className="col-sm-1"></div>
        <div className="col-sm-9">
          <FormControl type="text"
                 className="form-control"
                 placeholder="What do I need to do?"
                 inputRef={(input) => { this.taskInput = input }} />
          {this.renderError()}
        </div>
        <div className="col-sm-2">
          <Button type="submit" bsStyle="primary">Create</Button>
        </div>
      </Form>
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
