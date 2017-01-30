import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import './GlobalStyles'
import SidebarExample from './RR4SidebarExample'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

const WrapperGrid = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
  `
const Headline = styled.h1`
  font-size: 2.5rem;
  white-space: nowrap;
  @media only screen and (min-width: 48rem) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`
const ContentP = styled.p`
  font-size: 18px;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <WrapperGrid fluid>
          <Row>
            <Col lg={12}><Headline>Eric Schapp</Headline></Col>
          </Row>
          <Row>
            <Col lg={4}>
              <h2>This Will be the Sidebar</h2>
            {/*  <SidebarExample /> */}
            </Col>
            <Col sm={4} md={6} lg={8}>
              <h2>This will the the Content</h2>
              <h4>Still a work in progress.</h4>
              <ContentP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui corrupti libero sit consequuntur accusantium, ullam doloribus porro, excepturi voluptas officia voluptatibus illum quae nulla officiis! Possimus accusamus, in ratione sequi.</ContentP>
              <ContentP>Pariatur quos quod accusantium suscipit voluptatibus vel, perspiciatis ullam ea cumque minima velit. Nulla autem sapiente, reiciendis assumenda quas, nobis, labore ipsam fuga maxime voluptatibus corrupti. Reiciendis maiores a suscipit.</ContentP>
              <ContentP>Aliquam quidem reprehenderit omnis nam quisquam, tenetur possimus nemo repellat natus! Quam, voluptatibus esse reprehenderit est, iusto provident. Explicabo quo quos inventore ratione a nisi blanditiis perspiciatis impedit, veniam, placeat.</ContentP>
              <ContentP>Nemo fugiat assumenda unde dignissimos iure quibusdam eveniet id aspernatur doloremque quis neque aliquid, maiores dicta similique modi, esse nulla illo ab, reprehenderit non autem ullam expedita. Corporis doloribus, dicta?</ContentP>
            </Col>
          </Row>
          <Row>
            <Col><h2>This Will be a footer</h2></Col>
          </Row>
        </WrapperGrid>
      </ThemeProvider>
    );
  }
}

export default App;

// Original
// import React, { Component } from 'react';
// import Navbar, Jumbotron, Button } from 'react-bootstrap';
// import RR4SidebarExample from './RR4SidebarExample';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* Here is the RR4 Sidebar example */}
//         <div className="App-header">
//           <h1>Eric Schapp</h1>
//         </div>
//         <div>
//           <RR4SidebarExample />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
