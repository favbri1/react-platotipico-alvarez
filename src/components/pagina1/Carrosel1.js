import React from 'react'
import { Carousel } from 'react-bootstrap';
import imagen1 from '../../assets/img/bolivia1.png'
import imagen2 from '../../assets/img/bolivia2.jpg'
import imagen3 from '../../assets/img/platotipico1.jpg'
export const Carrosel1 = () => {
  return (


        <Carousel className='carrusel2'>
          <Carousel.Item>
          <img src={imagen1} alt="logo"/>
            <Carousel.Caption>
              <h3>Bandera de Bolivia</h3>
              <p>Pais con una gran diversidad de sabores</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={imagen2} alt="logo"/>
            <Carousel.Caption>
            
              <h3>Mapa de Bolivia</h3>
              <p>Cada departamentp cuenta con variedad de platos muy diferentes entre si</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={imagen3} alt="logo"/>
            <Carousel.Caption>
            
              <h3>Platos de bolivia</h3>
              <p>
                En esta pagina encontraras platos de los 9 departamentos :o
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
         );

         
         
}
