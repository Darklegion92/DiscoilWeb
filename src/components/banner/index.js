import React, { Component } from 'react'
import { Image } from "react-bootstrap";
import './styles.css'
export default class index extends Component {
    render() {
        return (
            <div>
                <Image src="static/img/banner.jpg" fluid />
                <div className="esp-banner"></div>
            </div>
        )
    }
}
