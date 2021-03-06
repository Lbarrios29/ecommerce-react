import React from 'react'
import '../../Galeria/galeria.css'

function ItemGaleria(props) {

    /**
        @todo:  Componente renderiza cada imagen
    **/    

    return (

        <div className="box wow animate__animated animate__fadeInUp" 
             data-wow-delay="0.1s">
            
            <a href={props.urlInstagram} 
               target="_blank" 
               rel="noopener noreferrer">            
            
                <img src={props.srcImagen} 
                     alt={props.alt} 
                     loading="lazy" 
                     className="img-fluid"/>
                
                <div className="overlay"></div>
            
            </a>

        </div>
        
    )
}

export default ItemGaleria
