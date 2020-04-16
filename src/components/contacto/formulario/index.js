import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class index extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Dirección Correo*</Form.Label>
          <Form.Control type="email" placeholder="tucorreo@tudominio.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Nombre de Contacto*</Form.Label>
         <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje*</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );
  }
}
