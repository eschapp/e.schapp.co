import React, {Component} from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import routes from './RouteConfig'

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <h1>Hire Me</h1>
        <h1>Portfolio</h1>
        <h1>About</h1>
      </div>
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