import React from 'react';

import TodoListHeader from './todoListHeader';
import TodoListBody   from './todoListBody';
import CreateTodoItem from './createTodoItem';
import FindTodoItem   from './findTodoItem';

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-app container">
        <CreateTodoItem />
        <FindTodoItem />
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <table className="table table-hover">
              <TodoListHeader />
              <TodoListBody />
            </table>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}
