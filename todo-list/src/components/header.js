import React from 'react';
import logo from '../images/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header row">
        <div className="block-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <p>React toDo App</p>
      </div>
    );
  }
}
