import React, { Component } from 'react'
import { FaFacebook,FaInstagram,FaWhatsapp } from "react-icons/fa"
import {AiFillGoogleSquare} from 'react-icons/ai'
import './styles.css'
export default class index extends Component {
    render() {
        const size = 40;
        return (
            <>
            <div className="icons-redes">
                <FaFacebook size ={size}/>
                <FaInstagram size ={size}/>
                <AiFillGoogleSquare size ={size}/>
                <FaWhatsapp size ={size}/>
            </div>
            <h6 className = "textos-pie">
                DIRECCION: XXXXXXXXXXXXXXXXX 
                - TELEFONO XXXXXXX <br/>
                <spam>EMPRESA 100% NORTESANTANDEREANA</spam><br/>
                Copyright SOLTEC-Tecnología y Desarrollo
            </h6>
            </>
        )
    }
}
