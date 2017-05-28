import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/App.css';
import Header from './components/header';
import TodoList from './components/todoList/todoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default connect(
  store => ({
    store
  }),
  dispatch => ({})
)(App);
