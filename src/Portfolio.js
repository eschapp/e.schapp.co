import React, {Component} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import BlankImg from './blank.png'

const PortfolioGrid = styled(Grid)`
  display: flex;
  margin: 0 auto;
`

const PortfolioRow = styled(Row)`
  justify-content: center;
` 

const PortfolioIMG = styled.img`
  display: flex;
  width: 10em;
  padding: .5em;
`

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Recent Projects</h1>
        <PortfolioGrid>
          <PortfolioRow>
            <Col><PortfolioIMG src={BlankImg} /></Col>
            <Col><PortfolioIMG src={BlankImg} /></Col>
            <Col><PortfolioIMG src={BlankImg} /></Col>
            <Col><PortfolioIMG src={BlankImg} /></Col>
            <Col><PortfolioIMG src={BlankImg} /></Col>
            <Col><PortfolioIMG src={BlankImg} /></Col>
          </PortfolioRow>
        </PortfolioGrid>
      </div>
    );
  }
}

export default Portfolio;