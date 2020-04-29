import React, { Component } from "react";
import { Navbar, Form, Nav, NavDropdown } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import "./styles.css";

export default class index extends Component {
  state = {
    size: 0,
  };
  componentDidMount() {
    window.addEventListener("capturar", this.capturar.bind(this));
    this.capturar();
  }

  capturar() {
    this.setState({ size: window.innerWidth });
  }

  render() {
    return (
      <Navbar expand="lg" fixed="top" className="barra">
        {this.state.size < 769 && (
          <Nav.Link href="#link" visible={false}>
            <MdPerson size={30} />
          </Nav.Link>
        )}
        <Navbar.Brand href="#home" className="textoMarca">
          DISCOIL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto "></Nav>

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
          {this.state.size >= 769 && (
            <Nav.Link href="#link">
              <MdPerson size={30} />
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
