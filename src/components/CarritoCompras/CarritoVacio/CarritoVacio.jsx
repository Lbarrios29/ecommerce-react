import React from 'react'
import { Container } from 'react-bootstrap'

function CarritoVacio() {

    /**
        @todo:  Componente que visualiza mostranso un texto 
                cuando el carrito de compras esta vacio
    **/

    return (

        <>
            <div className='separador'></div>
            <Container fluid className='p-1'>    
                <div className="h1 text-center">
                    Tu carrito está vacío
                </div>
            </Container>
            <div className='separador'></div>
        </>

    )
}

export default CarritoVacio

