import React from 'react'
import Platopaceno from '../../assets/img/platopaceno.jpg'
export const Platopaceño = () => {
  return (
    <div class="container text-center">
    <h3>Este es el Plato Paceño</h3>
        <div class="row align-items-center">
            <div class="col">
            <img src={Platopaceno} alt='' className='imgplp'></img>

            </div>
            <div class="col">
            <p><strong>El Plato Paceño es un platillo tradicional muy representativo de La Paz</strong>, Bolivia. Se compone principalmente de choclo (maíz)
            , habas, papas cocidas con cáscara y queso frito1. Es común acompañarlo con llajua, una salsa picante típica boliviana.
            La historia del Plato Paceño se remonta al cerco de La Paz en 1781, liderado por Túpac Katari y Bartolina Sisa. Durante este período,
            los alimentos escaseaban y los pobladores necesitaban una comida que pudiera prepararse con ingredientes locales disponibles. 
            Con el tiempo, se añadió carne al plato, aunque esta adición no es aceptada por todos.
            Hoy en día, el Plato Paceño se disfruta especialmente durante festividades como el 16 de Julio y el 20 de Octubre, así como en la 
            festividad de Alasita cada 24 de Enero. Es un plato que celebra la rica cultura culinaria y las tradiciones de La Paz, y es un 
            ejemplo de la diversidad de ingredientes que ofrece la región andina.</p>
            </div>
        </div>
    </div>
  )
}
