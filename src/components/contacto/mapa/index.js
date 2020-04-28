import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { WrapperConsumer } from "../../../store";

const styles = {
  wrapper: {
    height: 400,
    width: "100%",
    margin: "0 auto",
    display: "flex",
  },
  map: {
    flex: 1,
  },
};
class Mapa extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.context.punteros !== nextProps.context.punteros;
  }

  state = {
    size: 0,
  };
  componentDidMount() {
    window.addEventListener("capturar", this.capturar.bind(this));
    this.capturar();
  }

  capturar() {
    this.setState({ size: window.innerWidth });

    if (this.state.size < 600) {
      styles.wrapper = {
        height: 200,
        width: "100%",
        margin: "0 auto",
        display: "flex",
      };
    }
  }

  myIcon = L.icon({
    iconUrl: "loc.png",
    iconSize: [30, 30],
    iconAnchor: [10, 10],
    popupAnchor: [-1, -10],
    shadowUrl: "my-icon-shadow.png",
    shadowSize: [0, 0],
    shadowAnchor: [10, 10],
  });

  render() {
    const position = [7.899122, -72.5079506];
    return (
      <div style={styles.wrapper}>
        <Map
          center={[7.899122, -72.5079506]}
          zoom={15}
          style={styles.map}
          id="mapID"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              DISCOIL
              <br />
              CUCUTA- NORTE DE SANTANDER
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
export default WrapperConsumer(Mapa);
