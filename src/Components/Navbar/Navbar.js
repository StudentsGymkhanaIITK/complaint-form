import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          ref={this.wrapperRef}
          bg="primary"
          className="width"
          variant="dark"
        >
          <Navbar.Brand href="/">Complaint Form</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
