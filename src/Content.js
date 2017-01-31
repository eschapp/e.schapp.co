import React, {Component} from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import routes from './RouteConfig'
import styled from 'styled-components'

import Welcome from './Welcome'
import HireMe from './HireMe'
import Portfolio from './Portfolio'
import About from './About'

const ContentDiv = styled.div`
  border-radius: 50px 0 0 0;
  background-color: white;
  margin: 0 0 0 0;
  padding: .5em 1em 0 1em;
`

class Content extends Component {
  render() {
    return (
      <ContentDiv>
        <Welcome />
        <HireMe />
        <Portfolio />
        <About />
      </ContentDiv>
    );
  }
}



// TODO: Router Content for hashed urls
// class Content extends Component {
//   render() {
//     return (
//       <div>
//         <Router history={history}>
//           <div className="App-container">
//             {routes.map((route, index) => (
//               // rendering `Match`s with different
//               // components but the same pattern as before
//             <Match
//               key={index}
//               pattern={route.pattern}
//               component={route.main}
//               exactly={route.exactly}
//             />
//             ))}
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

export default Content;