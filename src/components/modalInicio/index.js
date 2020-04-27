import React, { Component } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { Button } from "react-bootstrap";

import "./styles.css";
export default class index extends Component {
  render() {
      const {cerrar} = this.props
    return (
      <div className="modal-inicio">
        <div className="cerrar-modal">
          <Button onClick={cerrar}>
            <RiCloseLine/>
          </Button>
        </div>
        <div>
          <FaTruck />
          <h1>DEBIDO A LAS RESTRICCIONES</h1>
          <h6>
            Este texto no se entiende nada en la imagen favor digitarlos, muchas
            gracias
          </h6>
          <h4>PARA MAYOR INFORMACION COMUNICATE CON NOSOTROS</h4>
          <Button>LLAMAR</Button>
        </div>
      </div>
    );
  }
}
