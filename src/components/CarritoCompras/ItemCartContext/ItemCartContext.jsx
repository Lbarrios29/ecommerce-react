import React from 'react'
import { useCartContext } from "../../../context/CartContext"
import CarritoVacio from '../CarritoVacio/CarritoVacio'
import ItemListCart from '../ItemListCart/ItemListCart'

function ItemCartContext() {

    /**
        @todo:  Contexto cuya responsabilidad es pasar los items a otro componente
    **/

    const {cartList} = useCartContext()

    return (
        <>
            {
                cartList.length > 0 ? <ItemListCart items={cartList}/>
                                    : <CarritoVacio/>
            }
        </>
    )
}

export default ItemCartContext
