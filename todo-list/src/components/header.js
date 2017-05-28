import React from 'react';
import logo from '../images/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <p>React toDo App</p>
        </div>
      </div>
    );
  }
}
