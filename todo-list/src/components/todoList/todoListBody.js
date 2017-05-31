import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from './todoListItem';

class TodoListBody extends React.Component {
  renderItems() {
    // const findValue = _.get(this.props, 'state.findTodos');
    // const todos = _.get(this.props, 'state.todo');
    // const findTodos = todos.filter(todo =>
    //   todo.task.includes(findValue)
    // );

    // return _.map(findTodos, (task, index) =>
    //   <TodoListItem key={index} {...task} />);

    return _.map(this.props.state, (task, index) =>
      <TodoListItem key={index} {...task} />);
      // <TodoListItem key={index} task={todo.task} isCompleted={todo.isCompleted} />);
  }

  render() {
    return (
      <tbody>
        {this.renderItems()}
      </tbody>
    );
  }
}

export default connect(
  store => ({
    state: store.todo.filter(item => {
      return item.task.toLowerCase().includes(store.findTodos);
    })
  }),
  dispatch => ({})
)(TodoListBody);
