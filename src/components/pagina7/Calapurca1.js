import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Calapurca from '../../assets/img/calapurcaimagen.jpg'
export const Calapurca1 = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" >
        <Accordion.Header >¿Que es la Calapurca?</Accordion.Header>
        <Accordion.Body className='acordion3'>
          La Calapurca es un plato tradicional de la región andina,<strong> especialmente popular en Bolivia especificamente proviene de Potosi</strong> y
          su nombre proviene del aimara “qala phurka”, que significa "guiso preparado con piedras ardientes". Este plato es conocido por su forma
          única de cocción, donde se utilizan piedras calientes para mantener la sopa caliente antes de servirla.
          La Calapurca generalmente consiste en una sopa que puede ser picante y cuyos ingredientes fundamentales son mote de maíz, papas,
          carne de llama o alpaca desmenuzada, aunque también puede llevar pollo o cordero, zanahoria, rocotos y otras verduras. En algunas recetas,
          se incluyen ingredientes como huesos cornudos, tutos de pollo, zanahoria, cebolla, morrón, ajo y diversos condimentos.
          Es un plato contundente y muy reponedor, ideal para disfrutar en climas fríos y se sirve tradicionalmente en un plato hondo y circular
          para apreciar su sabor salado, sustancioso y profundo. La Calapurca es parte de la cultura andina y se consume tanto cotidianamente como
          en fiestas tradicionales.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Y como se ve La Calapurca?</Accordion.Header>
        <Accordion.Body>
          <center><img src={Calapurca} alt="" width='40%' height='auto' /></center>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
