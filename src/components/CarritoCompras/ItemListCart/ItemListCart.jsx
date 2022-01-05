import React from 'react'
import Cart from '../Cart/Cart'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

function ItemListCart(props) {
    
    /**
        @todo:  Componente pasa cada item al componente Cart ademas de tener los 
                botones Iniciar y Vaciar carrito
    **/

    const {vaciarCarrito,calcularTotal} = useCartContext()    
    let total = 0

    function onClearCart() {
        vaciarCarrito()
    }

    // Calcula el total
    total = parseFloat(calcularTotal(props.items)).toFixed(2) 

    return (
        
        <>
            <div className='separador'></div>
            {    
                // Llama a Itemproducto para renderizar cada imagen y le pasa parametros   
                props.items.map(item => <Cart key={item.id}
                                              item={item}
                                              cantidad={item.cantidad}/>
                )   
            }

            {/* Contenedor */}
            <div className="container container-sm container-md container-lg mt-2">

                {/* Total */}
                <div className="row text-muted align-items-center">                            
                    <div className="col col-lg-6 ">
                    </div>
                    <div className="col fw-bold fs-4">
                        Total
                    </div>
                    <div className="col fw-bold fs-4">
                        $ {total}
                    </div>
                    <hr className="mt-4 solid"></hr>
                </div>

                {/* Inicio - Botones Vaciar Carrito y Terminar compra */}
                <div className="d-flex gap-2 justify-content-end pt-2">
                            
                    <button type="button" 
                            onClick={onClearCart} 
                            className="btn btn-dark">
                        Vaciar carrito
                    </button>
                        
                    <Link to='/formularioCompra'>
                        <button type="button" 
                                className="btn btn-dark">
                            Iniciar compra
                                    
                        </button>
                    </Link>

                </div>
                {/* Fin - Botones Vaciar Carrito y Terminar compra */}

            </div> {/* Contenedor */}

            <div className="separador"></div>

        </>
    )
}

export default ItemListCart
