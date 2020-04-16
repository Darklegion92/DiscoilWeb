import React, { Component, Fragment } from "react";
import Encabezado from "./components/encabezado";
import Slider from "./components/slider";
import Textos from "./components/textos";
import Banner from "./components/banner";
import Contacto from "./components/contacto";
import SliderGrupos from "./components/sliderGrupos";
import "./variables.css";
export default class App extends Component {
  render() {
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
          <div  className="item-texto2">
            <Textos />
          </div>
        </div>
        <div>
          <SliderGrupos/>
        </div>
        <div>
          <Banner/>
        </div>
        <div>
          <Contacto/>
        </div>
      </Fragment>
    );
  }
}
