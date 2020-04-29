import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import Encabezado from "./components/encabezado";
import Slider from "./components/slider";
import Textos from "./components/textos";
import Contacto from "./components/contacto";
import ModalInicio from "./components/modalInicio";
import ContactoFormulario from "./components/contacto/formulario";
import Pie from "./components/pie";
import SliderGrupos from "./components/sliderGrupos";
import "./variables.css";

export default class App extends Component {
  state = {
    show: false,
    showInfo: true,
  };

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    const handleCloseInfo = () => this.setState({ showInfo: false });
    return (
      <Fragment className="inicial">
        <Encabezado />
        <div className="inicial-slider">
          <Slider />
        </div>
        <div className="inicial-textos">
          <Textos />
          <Textos />
        </div>
        <div>
          <SliderGrupos titulo="MARCA PROPIA" />
          <SliderGrupos titulo="MULTIMARCAS" />
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <Contacto />
        </div>
        <div>
          <Pie abrir={handleShow} />
        </div>
        <Modal show={this.state.show} onHide={handleClose} centered>
          <ContactoFormulario cerrar={handleClose} />
        </Modal>
        <Modal show={this.state.showInfo} onHide={handleCloseInfo} centered>
          <ModalInicio cerrar={handleCloseInfo} />
        </Modal>
      </Fragment>
    );
  }
}
