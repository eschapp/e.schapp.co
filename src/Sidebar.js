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
          <li>
              <Icon className="App-icon" />
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#hire">Hire Me</Link></li>
          <li><Link to="/#portfolio">Portfolio</Link></li>
          <li><Link to="/#about">About</Link></li>
        </ul>
        </Router>
      </div>
    );
  }
}

export default Sidebar;    