import React from 'react'
import piquemachof1 from '../../assets/img/piquemachof.jpg'
export const Piquemacho2 = () => {
    return (
        <div>
            
            <div class="container text-center">
            <h3>Este es el Pique Macho</h3>
                <div class="row align-items-center">
                    <div class="col">
                    <p><strong>El pique macho es un plato tradicional boliviano que se originó en la ciudad de Cochabamba</strong>, conocida como la capital gastronómica de
                Bolivia. Es una comida abundante y picante que consiste en una mezcla de papas fritas caseras, carne de res, salchichas,
                cebollas, tomates, huevos duros y el ingrediente clave que le da su nombre, rodajas de ají picante boliviano llamado locoto.
                El plato fue creado en 1974 en un restaurante llamado El Prado hoy Miraflores por Honorato Quiñones Andia y Evangelina
                Rojas Vargas</p>
                    </div>
                    <div class="col">
                    <img src={piquemachof1} alt=''></img>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
