import React from 'react'
import ItemGaleria from '../ItemGaleria/ItemGaleria'
import { Col } from 'react-bootstrap'

function ItemListGaleria(props) {

    /**
        @todo:  Componente que pasa la coleccion de imagenes al componente ItemGaleria
    **/

    return (

        // Llama a ItemGaleria para renderizar cada imagen y le pasa parametros   
        props.galeria.map(galeriaItem => <Col lg={4}>
                                            <ItemGaleria key={galeriaItem.id}
                                                         urlInstagram={galeriaItem.urlInstagram} 
                                                         srcImagen={galeriaItem.srcImagen}
                                                         alt={galeriaItem.alt}
                                            />
                                         </Col>)
    )
    
}

export default ItemListGaleria
