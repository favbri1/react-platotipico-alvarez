import React from 'react'
import ReactPlayer from 'react-player'
export const Pacufrito = () => {
  return (
    <div>
    <div className='videoyou'>
        <h3>El Pacu Frito</h3>
        <ReactPlayer url='https://youtu.be/YDBlfmcVC6k' width='20%' height='100%'/>
        
    </div>
    <div className='textopacu'>
    <p><strong>El Pacu Frito es un delicioso plato boliviano proveniente de Beni</strong>, que se prepara con filetes de pacu, un pez muy apreciado en la gastronomía del país.Una receta básica para preparar el Pacu Frito seria:
<br/>
<strong>Ingredientes:</strong>
<ul>
<li>1 kg de filete de Pacu</li>
<li>10 limones</li>
<li>2 ajos machacados</li>
<li>Aceite para freír</li>
<li>Sal al gusto</li>
<li>Pan rallado para empanizar</li>
</ul>
<strong>Preparación:</strong>
<br/>
Cortar en filetes el Pacu y en un recipiente marinar con el jugo de los limones, ajo y sal por unos 30 minutos o más.
Revuelque los filetes en el pan rallado.
Fría los filetes en aceite abundante y muy caliente, hasta que estén dorados por ambos lados.
Puede acompañar el Pacu Frito con yuca, plátano frito, arroz o ensalada de palmito para una comida completa. ¡Espero que disfrutes de este plato tradicional boliviano!</p>
</div>
    </div>
  )
}
