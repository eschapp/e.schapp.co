import React, { Component } from 'react';
import logo from './Icon.jpeg';
import './Icon.css';

class Icon extends Component {
  render() {
    return (
      <div className="App-logo">
        <img src={logo} alt="App-logo" />
      </div>
    );
  }
}

export default Icon;
