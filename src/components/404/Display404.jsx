import React from 'react'
import './404.css'

function Display404() {

    /**
        @todo:  Componente 404 en caso de no estar operativo algun link
                muestra este componente
    **/
   
    return (

        <>
            <div className="parallaxStars">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div class="title">
                    <p class="display-1 fw-bold">404</p>
                    <p class="display-4">Página en Construcción</p>
                    <p class="display-6">Estamos trabajando...</p>
                </div>    
            </div>
        </>
    )
}

export default Display404
