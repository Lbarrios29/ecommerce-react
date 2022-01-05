import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import { Container } from 'react-bootstrap'


function TerminarCompra() {

    /**
        @todo:  Componente que muestra mensaje de exito y la orden generada
                obtenida de Firebase al finalizar la compra
    **/

    const {orderId} = useCartContext();

    return (
    
        <>
            <Container fluid="sm">
                <div className='separador'></div>
                <div className='p-5 text-center'>
                    <h3>
                        Felicidades su compra se realizo satisfactoriamente!
                    </h3>
                    <h5>
                        Su Orden generada para el seguimiento es: {orderId}
                    </h5>
                </div>
                <div className='separador'></div>
            </Container>
        </>
    
    )

}

export default TerminarCompra
