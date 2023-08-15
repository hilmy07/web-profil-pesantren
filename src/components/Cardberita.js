import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Cardberita = (props) => {
  return (
    <Card id='berita' className="mb-4" style={{ Width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardberita