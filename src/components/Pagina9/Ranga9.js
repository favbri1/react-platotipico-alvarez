import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Ranga7 from '../../assets/img/Rangaimagen.jpg'
import Fritanga2 from '../../assets/img/fritanga2.jpg'
import pandearroz from '../../assets/img/pandearroz.jpg'
export const Ranga9 = () => {
  return (
    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src={Fritanga2} rounded width='50%' height='auto' />
        <h5>Fritanga</h5>
        <p className='deaa'>La Fritanga es un plato muy popular en Bolivia, especialmente en la región oriental del país. <strong>Considerada un plato tipico de Chuquisaca y Potosi</strong> Se trata de un guiso picante que 
          se prepara con carne de cerdo frita en una olla de aluminio y se puede acompañar con otros platos típicos de la comida cruceña</p>
      </Col>
      <Col xs={6} md={4}>
        <Image src={Ranga7} roundedCircle width='50%' height='auto'/>
        <center><h5>Ranga</h5>
        <p className='deaa'>La Ranga Ranga es un plato tradicional boliviano que ha trascendido muchas regiones del país, como <strong>Tarija, Chuquisaca, La Paz y 
          Cochabamba.</strong> Este delicioso plato está hecho con librillo o panza de vaca, y se acompaña con ingredientes como papas, cebolla, tomate, 
          ají amarillo o rojo, comino, ajo, pimienta entera, aceite y, opcionalmente, arvejas y perejil picado</p>
        </center>
      </Col>
      <Col xs={6} md={4}>
        <Image src={pandearroz} thumbnail width='50%' height='auto' />
        <h5>Pan De Arroz</h5>
        <p className='deaa'>El pan de arroz es una deliciosa alternativa al pan tradicional, especialmente para aquellos que siguen una dieta sin gluten
          y <strong>es nativo de Santa Cruz Beni y Pando</strong></p>
      </Col>
    </Row>
  </Container>
  )
}
