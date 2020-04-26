import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import Encabezado from "./components/encabezado";
import Slider from "./components/slider";
import Textos from "./components/textos";
import Banner from "./components/banner";
import Contacto from "./components/contacto";
import ContactoFormulario from "./components/contacto/formulario";
import Pie from "./components/pie";
import SliderGrupos from "./components/sliderGrupos";
import "./variables.css";

export default class App extends Component {
  state = {
    show: false,
    showInfo:true
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
          <div className="item-texto1">
            <Textos />
          </div>
          <div className="item-texto2">
            <Textos />
          </div>
        </div>
        <div>
          <SliderGrupos />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Contacto />
        </div>
        <div>
          <Pie abrir={handleShow} />
        </div>
        <Modal show={this.state.show} onHide={handleClose}>
          <ContactoFormulario cerrar = {handleClose}/>
        </Modal>
        <Modal show={this.state.showInfo} onHide={handleCloseInfo}>
         <div><br/><br/><br/><br/><br/><br/>Lo que quieras que valla aca envialo</div>
        </Modal>
      </Fragment>
    );
  }
}
