import React, {Component} from 'react';
import Router from 'react-router/BrowserRouter'
import Link from 'react-router/Link'
import Icon from './Icon'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
        <ul>
        
          <Icon className="App-icon" />
          
          <Link to="/">Home</Link><br />
          <Link to="/#hire">Hire Me</Link><br />
          <Link to="/#portfolio">Portfolio</Link><br />
          <Link to="/#about">About</Link><br />
        </ul>
        </Router>
      </div>
    );
  }
}

export default Sidebar;    