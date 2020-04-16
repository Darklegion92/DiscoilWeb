import React, { Component } from "react";
import { Navbar, Form, Nav } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import "./styles.css";

export default class index extends Component {
  render() {
    return (
      <Navbar expand="lg" fixed="top" className="barra">
        <Navbar.Brand href="#home" className="textoMarca">
          DISCOIL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto "></Nav>
          <Form inline className="enlaces">
            <Nav.Link href="#home">CONTACTENOS</Nav.Link>
            <Nav.Link href="#link">PROMOCIONES</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>
            <Nav.Link href="#link">
              <MdPerson size={30} />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
