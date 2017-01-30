import React from 'react'

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

export default routes;