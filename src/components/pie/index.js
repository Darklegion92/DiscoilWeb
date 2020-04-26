import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Form, Button, Navbar, Nav, FormControl } from "react-bootstrap";
import "./styles.css";
export default class index extends Component {
  render() {
    const { abrir } = this.props;
    return (
      <Navbar fixed="bottom">
        <Navbar.Text>
          JUAN GUILLERMO PATERNIA
          <br />
          DIRECCION XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX - TELEFONO XXXXXXX
          <br />
          EMPRESA 100% NORTESANTANDEREANA
        </Navbar.Text>
        <Nav>
          <a href="#login">
            <FaFacebook size="40" />
          </a>
          <a href="#login">
            <FaInstagram size="40" />
          </a>
          <a href="#login">
            <FaWhatsapp size="40" />
          </a>
        </Nav>
        <Nav>
          <Button onClick={abrir}>CONTACTANOS</Button>
          <Button
            target="_blank"
            onClick="parent.location='https://www.google.com/maps/d/viewer?mid=1lkh--vDBnVTN19D3Lh2bxXZlQTg&ie=UTF8&t=m&source=embed&oe=UTF8&msa=0&ll=7.898795023149208%2C-72.50805827107706&z=20'"
          >
            VER MAPA
          </Button>
        </Nav>
      </Navbar>
    );
  }
}
