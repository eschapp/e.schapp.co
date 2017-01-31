import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './Icon.jpeg';

const IconImg = styled.img`
  width: 80%;
`
class Icon extends Component {
  render() {
    return (
      <div className="App-logo">
        <IconImg src={logo} alt="App-logo" />
      </div>
    );
  }
}

export default Icon;
