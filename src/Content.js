import React, {Component} from 'react'
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

export default Content;