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
  border-radius: 20px 0 0 0;
  background: #8da0af;
  margin: 0 0 0 0;
  padding: .5em 1em 1em 1em;
  color: #fe6d39;
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