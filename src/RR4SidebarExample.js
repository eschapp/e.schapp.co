import React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Icon from './Icon'
import './RR4SidebarExample.css'

// Each "route" has two components, one for the sidebar
// and one for the main area, we'll render them
// simultaneously when the pattern matches
const routes = [
  { pattern: '/',
    exactly: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Main</h2>
  },
  { pattern: '/hire',
    sidebar: () => <div>Hire</div>,
    main: () => <h2>Hire Me</h2>
  },
  { pattern: '/portfolio',
    sidebar: () => <div>Portfolio</div>,
    main: () => <h2>Portfolio</h2>
  },
  { pattern: '/about',
    sidebar: () => <div>About</div>,
    main: () => <h2>About Me</h2>
  }
]

const SidebarExample = ({ history }) => (
<div>
  <Router history={history}>
    <div className="App-container">

      <div className="App-sidebar">
        <ul>
          <li>
            <Icon className="App-icon" />
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hire">Hire Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      <div className="App-content">
        {routes.map((route, index) => (
          // rendering `Match`s with different
          // components but the same pattern as before
          <Match
            key={index}
            pattern={route.pattern}
            component={route.main}
            exactly={route.exactly}
          />
        ))}
      </div>

    </div>
  </Router>
</div>
)

export default SidebarExample
