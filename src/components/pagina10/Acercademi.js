import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import fabrifoto from '../../assets/img/fabri2.jpg';
import fabrifoto2 from '../../assets/img/fabri4.jpg'
export const Acercademi = () => {
  return (
    <div className="d-flex justify-content-around">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fabrifoto} />
      <Card.Body>
        <Card.Title>Fabricio Alvarez</Card.Title>
        <Card.Text>
         Programador recien empezando de 2do semestre
         <br/>
         ci: 10907587 Ru: 1845076 Par:D
         <br/>
         Phd: Marisol Tellez 
         <br/>
         celular: 61200819
         <br/>
         Gmail: falvarezl@fcpn.edu.bo
        </Card.Text>
        <Button variant="primary" href="#footer7">mas Informacion</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fabrifoto2} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  </div>
  )
}
