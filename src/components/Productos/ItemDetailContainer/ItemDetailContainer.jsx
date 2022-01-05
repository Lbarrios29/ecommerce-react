/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productoService from '../../../data/productoService';
import { db } from '../../../Firebase/firebase';
import Loader from '../../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const [itemSeleccionado, setItemSeleccionado]= useState({}); 
    const [loading, setLoading] = useState(true);

    //toma el parametro de la url y lo guarda en una variable id.
    const { id } = useParams(); 

    // Obtiene el producto seleccionado del catalogo
    useEffect(async () => {

        try {

            const item = await productoService.getProductById(id,db)
            setItemSeleccionado(item)
        
        }
        catch (error) {
            console.log(error)    
        }
        finally{
            setLoading(false)
        }

    },[id])

    return (

        <>
            <div class="separador"></div>
        
            <div className="container container-sm container-md container-lg">

                {
                    loading ? <Loader/>
                            : <ItemDetail item={itemSeleccionado}/>
                }

            </div>

            <div class="separador"></div>
        </>
    )
}

export default ItemDetailContainer
