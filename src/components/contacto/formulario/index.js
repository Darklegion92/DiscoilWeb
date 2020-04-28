import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import "./styles.css";
export default class index extends Component {
  render() {
    const { cerrar } = this.props;
    return (
      <Form className="formulario-1">
        <Form.Row>
          <Form.Label>CONTACTANOS</Form.Label>
        </Form.Row>
        <Form.Control type="text" placeholder="NOMBRE" />
        <Form.Control type="text" placeholder="TELEFONO" />
        <Form.Control type="email" placeholder="CORREO" />
        <Button className="Formulario" onClick={cerrar}>
          ENVIAR
        </Button>
        <Form.Label>
          COMUNICATE CON NOSOTROS <FiPhoneCall size="40" href="##" />
        </Form.Label>
      </Form>
    );
  }
}
