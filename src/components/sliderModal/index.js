import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WrapperConsumer } from "../../store";
import { RiCloseLine } from "react-icons/ri";
import "./styles.css";

class sliderModal extends Component {
  state = {
    redirect: false,
  };

  renderRedirect(item) {
    if (this.state.redirect) {
      return <Redirect to={"/tienda/" + item} />;
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.context.agrupaciones !== this.props.context.agrupaciones;
  }
  render() {
    const { agrupaciones } = this.props.context;
    const { titulo, cerrar } = this.props;
    return (
      <div className="caruselModal">
        <div className="cerrar-modal">
          <RiCloseLine onClick={cerrar} />
        </div>
        <div className="titulo-sliderModal">{titulo}</div>
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {agrupaciones.map((item) => {
            return (
              <div
                className="img-cat"
                onClick={this.setState({
                  redirect: true,
                })}
              >
                {this.renderRedirect(item.nombreFamilia)}
                <a href="static/doc/pdf.pdf" target="_blank">
                <Image src={item.imgFamilia} roundedCircle thumbnail />
                </a>
                <label htmlFor="basic-url" className="text-cat">
                  {item.nombreFamilia}
                </label>
              </div>
            );
          })}
        </Carousel>
        <div className="boton">
          <Button
            className="Formulario"
            href="tel:+3144322665"
            onClick={cerrar}
          >
            LLAMAR
          </Button>
        </div>
      </div>
    );
  }
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default WrapperConsumer(sliderModal);
