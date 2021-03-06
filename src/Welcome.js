import React, {Component} from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
background: #4f5052;
border-radius: 5px;
padding: 0 5px 5px 5px;
`


class Welcome extends Component {
  render() {
    return (
      <ContentDiv>
        <h1>Welcome!</h1>
        <p>Hello, I'm Eric Schapp a Front-End Engineer living in Minneapolis, Minnesota. I graduated from the Iron Yard code school having focused on HTML, CSS, Javascript, React, and React-Native. Prior to joining the Iron Yard also dabbled in some Ruby on Rails, PHP, and WordPress. I believe it is an exciting time to be in the Javascript ecosystem.</p>
        <p>I pride myself on at least being familiar with frameworks I don't use everyday. Recently, I've been building some basic demo applications in Vue.js and Angular 2. I've also been reacquaninting myself with the WordPress ecosystem using the skills I develoved at the Iron Yard.</p>
      </ContentDiv>
    );
  }
}

export default Welcome;