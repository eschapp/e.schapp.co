import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import './GlobalStyles'
import Sidebar from './Sidebar'
import Content from './Content'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 1, // rem
    outerMargin: 0, // rem
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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <WrapperGrid fluid>
          <Row>
            <Col lg={12}><Headline>Eric Schapp</Headline></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} lg={2}>
              <Sidebar /> 
            </Col>
            <Col xs={12} sm={6} md={8} lg={10}>
              <Content />
            </Col>
          </Row>
          <Row>
            <Col><h2>_____ </h2></Col>
          </Row>
        </WrapperGrid>
      </ThemeProvider>
    );
  }
}

export default App;
