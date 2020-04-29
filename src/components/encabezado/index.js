import React, { Component } from "react";
import { Navbar, Modal, Nav, NavDropdown } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import ModalSlider from "../sliderModal";
import FormularioLogin from "../formularioLogin"
import "./styles.css";

export default class index extends Component {
  state = {
    size: 0,
    show: false,
    showLogin:false
  };
  componentDidMount() {
    window.addEventListener("capturar", this.capturar.bind(this));
    this.capturar();
  }

  capturar() {
    this.setState({ size: window.innerWidth });
  }

  render() {
    const handleClose = () => this.setState({ show: false, showLogin:false });

    const handleShow = (e) => {
      this.setState({ show: true, titulo: e.currentTarget.name });
    };

    const loginShow = (e) => {
      this.setState({ showLogin: true});
    };
    return (
      <Navbar collapseOnSelect expand="lg" fixed="top" className="barra">
        {this.state.size < 769 && (
          <Nav.Link href="#link" visible={false}>
            <MdPerson size={30} onClick={loginShow}/>
          </Nav.Link>
        )}
        <Navbar.Brand href="#home" className="textoMarca">
          DISCOIL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto "></Nav>
          <Nav className="mr-auto ">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">NOSOTROS</Nav.Link>
            <NavDropdown title="MARCA PROPIA" id="collasible-nav-dropdown">
              <NavDropdown.Item href="static/doc/pdf.pdf" target="_blank">
                LUBRICOL
              </NavDropdown.Item>
              <NavDropdown.Item href="static/doc/pdf.pdf" target="_blank">
                VISCOIL
              </NavDropdown.Item>
              <NavDropdown.Item href="static/doc/pdf.pdf" target="_blank">
                ROAD RUNS
              </NavDropdown.Item>
              <NavDropdown.Item href="static/doc/pdf.pdf" target="_blank">
                MOTORFULL
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdownn">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={handleShow}
                name="LUBRICANTES"
              >
                LUBRICANTES
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={handleShow}
                name="GRASAS"
              >
                GRASAS
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={handleShow}
                name="FILTROS"
              >
                FILTROS
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={handleShow}
                name="SPA"
              >
                SPA
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={handleShow}
                name="FRENOS"
              >
                FRENOS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">PEDIDOS</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>

            {this.state.size >= 769 && (
              <Nav.Link href="#link">
                <MdPerson size={30} onClick={loginShow}/>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Modal show={this.state.show} onHide={handleClose} centered>
          <ModalSlider cerrar={handleClose} titulo={this.state.titulo} />
        </Modal>
        <Modal show={this.state.showLogin} onHide={handleClose} centered>
          <FormularioLogin/>
        </Modal>
      </Navbar>
    );
  }
}
