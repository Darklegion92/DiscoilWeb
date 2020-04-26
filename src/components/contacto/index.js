import React, { Component } from "react";
import "./styles.css";
import Formulario from "./formulario";
import Mapa from "./mapa";
export default class index extends Component {
  render() {
    const {enviar}= this.props
    return (
      <div className="contacto-general">
        <div className="mapa">
          <Mapa />
        </div>
        <div className="formulario">
          <Formulario cerrar={enviar}/>
        </div>
      </div>
    );
  }
}
