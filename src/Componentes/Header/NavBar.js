import React, {Component,} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBoostrap from "react-bootstrap";
import CarritoNav from'./CarritoNav'

class NavBar extends Component {
  render(){
  return (
    <div className="NavBar">
      <header><ReactBoostrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  <ReactBoostrap.Navbar.Brand href="#home">Mi E-commerce</ReactBoostrap.Navbar.Brand>
  <ReactBoostrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBoostrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBoostrap.Nav className="mr-auto">
      <ReactBoostrap.Nav.Link href="#features">Features</ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link href="#pricing">Pricing</ReactBoostrap.Nav.Link>
      <ReactBoostrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBoostrap.NavDropdown.Item href="#action/3.1">Action</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item href="#action/3.2">Another action</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item href="#action/3.3">Something</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Divider />
        <ReactBoostrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBoostrap.NavDropdown.Item>
      </ReactBoostrap.NavDropdown>
    </ReactBoostrap.Nav>
    <ReactBoostrap.Nav>
      <ReactBoostrap.Nav.Link href="#deets"><CarritoNav /></ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBoostrap.Nav.Link>
    </ReactBoostrap.Nav>
  </ReactBoostrap.Navbar.Collapse>
</ReactBoostrap.Navbar>
      </header>
    </div>
  );
}
}

export default NavBar;
