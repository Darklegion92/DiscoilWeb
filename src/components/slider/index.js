import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { WrapperConsumer, ActionsTypes } from "../../store";
import "./styles.css";

class slider extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.context.imageSlider !== this.props.context.imageSlider ||
      nextProps.context.activeItemIndex !== this.props.context.activeItemIndex
    );
  }

  render() {
    const { valorFiltro, imageSlider } = this.props.context;
    return (
      <ImageGallery
        items={imageSlider}
        lazyLoad={true}
        showThumbnails={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={true}
        slideDuration={1000}
      />
    );
  }
}
export default WrapperConsumer(slider);
