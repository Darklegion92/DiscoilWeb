import React, { Component } from "react";
import { Navbar, Form, Nav, NavDropdown } from "react-bootstrap";
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
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">NOSOTROS</Nav.Link>
            <NavDropdown title="MARCA PROPIA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NANOCLUB</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">LUBRICOL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VISCOIL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ROAD RUNS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MOTORFULL</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LUBRICANTES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GRASAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FILTROS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SPA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FRENOS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">PEDIDOS</Nav.Link>
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
