import React from 'react';

import TodoListHeader from './todoListHeader';
import TodoListBody from   './todoListBody';
import CreateTodoItem from './createTodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <CreateTodoItem />
        <div>
          <table>
            <TodoListHeader />
            <TodoListBody />
          </table>
        </div>
      </div>
    );
  }
}

export default TodoList;
