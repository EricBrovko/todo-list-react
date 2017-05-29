import React, { Component } from 'react';

import './styles/App.css';
import Header from './components/header';
import TodoList from './components/todoList/todoList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TodoList />
      </div>
    );
  }
}
