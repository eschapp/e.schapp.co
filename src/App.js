import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import RR4SidebarExample from './RR4SidebarExample';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Here is the RR4 Sidebar example */}
        <div className="App-header">
          <h1>Eric Schapp</h1>
        </div>
        <div>
          <RR4SidebarExample />
        </div>
      </div>
    );
  }
}

export default App;
