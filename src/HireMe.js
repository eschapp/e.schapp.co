import React, {Component} from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
background: #4f5052;
border-radius: 5px;
padding: 0 5px 5px 5px;
`
class HireMe extends Component {
  render() {
    return (
      <ContentDiv>
        <h1>Hire Me</h1>
          <h2>Full-Time Employment</h2>
            <p>I am currently seeking full time employment in Minneapolis. I am currently working as a remote employee and am lookin for a change in venue.</p>
          <h2>Contract Work</h2> 
            <p>In my current position I generally reserve 12 to 14 hours for contract work. Right now I have a long term engagement that accounts for 6 of those hours, so at the momemnt I am taking small projects that work within that constraint.</p>
            <p>Contract work gives me the chance to work with ContentDiverse groups of people and technologies which is something that I truely cherish. If you are in need of some front end help feel free to contact me.</p>
      </ContentDiv>
    );
  }
}

export default HireMe;<h1>For Hire</h1>