import React, { Component } from 'react';

import Post from './component/Post'
import PostForm from "./component/PostForm";
// Ui library
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
Container,
Row, Col
} from 'reactstrap';

class App extends Component {
  render() {
    return (

    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand >Redux-Http GET/POST request</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />        
        </Navbar>
          <Container>
            <Row>        
              <Col xs="4">
                <PostForm></PostForm>
              </Col>
              <Col xs="8">
                <Post></Post>
              </Col>
            </Row>
          </Container>
        </div>
     
    );
  }
}

export default App;
