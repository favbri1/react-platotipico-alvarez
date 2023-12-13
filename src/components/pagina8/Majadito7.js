import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Majadito1 from '../../assets/img/majadito1.jpg'
export const Majadito7 = () => {
  return (
    <center>
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Majadito1} />
    <Card.Body>
      <Card.Title>Majadito</Card.Title>
      <Card.Text>
      El Majadito es un plato típico de la gastronomía de Bolivia, principalmente preparado en los departamentos del Beni y Santa Cruz
      En Bolivia, “majao” significa golpeado o majado, lo cual se hace con las carnes antes de hacer el majao en un tacú o mortero de madera
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Majadito Tostado</ListGroup.Item>
      <ListGroup.Item>Majadito Batido</ListGroup.Item>
      <ListGroup.Item>Ingrediente principal: Charque</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  <br/>
  <br/>
  </center>

  )
}
