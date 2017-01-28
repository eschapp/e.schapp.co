import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import RR4SidebarExample from './RR4SidebarExample';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Here is the RR4 Sidebar example */}
        <div>
          <RR4SidebarExample />
        </div>


        {/* Bootstrap Stuff Ignore for the time being */}
        {/* <Navbar  fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
                <a href="/">Test</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>

        <Jumbotron>
          <Grid>
            <h1>E.SCHAPP.CO</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron> */}
      </div>
    );
  }
}

export default App;
