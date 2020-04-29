import React, { Component } from "react";
import "./styles.css";
import Formulario from "./formulario";
import Mapa from "./mapa";
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
    const { enviar } = this.props;
    return (
      <div className="contacto-general">
        {this.state.size > 768 && (
          <div className="mapa">
            <Mapa />
          </div>
        )}
        <div className="formulario">
          <Formulario cerrar={enviar} />
        </div>
      </div>
    );
  }
}
