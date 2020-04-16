import React, { Component } from 'react'
import { Card } from "react-bootstrap";
export default class index extends Component {
    render() {
        return (
            <>
    <Card
      bg="light"
      text="dark"
      style={{ width: '100%', height:'230px' }}
    >
      <Card.Body>
        <Card.Title className = "text-center"> Card Title </Card.Title>
        <Card.Text  className = "text-justify">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  </>
        )
    }
}
