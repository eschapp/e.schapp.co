import React, {Component} from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
background: rgba(255, 255, 255, .9)
border-radius: 5px;
padding: 0 5px 5px 5px;
`

class About extends Component {
  render() {
    return (
      <ContentDiv>
        <h1>A little more about me</h1>
      </ContentDiv>
    );
  }
}

export default About;