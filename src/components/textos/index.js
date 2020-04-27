import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import'./styles.css'
export default class index extends Component {
    render() {
        return (
            <div className="tarjeta">
    <Card
      bg="light"
      text="dark"
      style={{ width: '100%', height:'300px' }}
    >
      <Card.Body>
        <Card.Title className = "text-center"> Lorem Ipsum</Card.Title>
        <Card.Text  className = "text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor velit, pellentesque ut eros sit amet, luctus eleifend erat. Quisque ornare enim sit amet elit tincidunt, vitae hendrerit enim tempus. Aenean malesuada ipsum at facilisis pharetra. Pellentesque sed commodo augue. Fusce posuere facilisis dignissim. Suspendisse lacinia consectetur urna consectetur tincidunt. Quisque at libero lobortis, rhoncus magna sit amet, finibus enim. Cras sit amet facilisis nulla. Phasellus maximus erat turpis, sed hendrerit sapien laoreet sed. Curabitur commodo, ligula eu faucibus varius, tortor tellus eleifend metus, lacinia scelerisque est massa eu dui. Suspendisse ullamcorper dictum nisl. 
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  </div>
        )
    }
}
