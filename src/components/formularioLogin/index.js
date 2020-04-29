import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import './styles.css'
export default class index extends Component {
  render() {
    return (
      <div className="formulario-login">
        <Form>
          <Form.Label>INGRESAR</Form.Label>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Usuario" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    );
  }
}
