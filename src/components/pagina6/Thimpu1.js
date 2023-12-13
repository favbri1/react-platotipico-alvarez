import React from 'react';
import thimpu3 from '../../assets/img/thimpuimagen.jpg';
import thimpu5 from '../../assets/img/thimpu5.jpg';
export const Thimpu1 = () => {
    return (
        <div>
            <div class="container text-center">
                <h3>Thimpu</h3>
                <div class="row align-items-center">
                    <div class="col">
                    <img src={thimpu3} alt=''></img>
                        
                    </div>
                    <div class="col">
                    <p>El Thimpu es un plato tradicional boliviano, <strong>especialmente popular en la región de los Andes y en la ciudad de Oruro de donde es nativo.</strong> 
                        Es conocido por ser un caldo nutritivo y reconfortante que se sirve comúnmente durante festividades como el carnaval. 
                        </p>
                    </div>
                    <div class="col">
                    <img src={thimpu5} alt=''></img>
                        
                    </div>
                    
                </div>
            </div>
            <br/>
        </div>
    )
}
