import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from './todoListItem';

class TodoListBody extends React.Component {
  renderItems() {
    return _.map(this.props.store, (todo, index) =>
      <TodoListItem key={index} {...todo} />);
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
    store
  }),
  dispatch => ({})
)(TodoListBody);
