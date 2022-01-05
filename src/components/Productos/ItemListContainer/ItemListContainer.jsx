import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Display404 from '../../404/Display404'
import productoService from '../../../data/productoService'
import { db } from '../../../Firebase/firebase'
import Loader from '../../Loader/Loader'

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //toma el parametro de la url y lo guarda en una variable categoriaId.
    const { categoriaId } = useParams(); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {

        try {

            const items = await productoService.getProductByCatalog('categoria','==',categoriaId,db)
            setProductos(items)
        
        }
        catch (error) {
            console.log(error)    
        }
        finally{
            setLoading(false)
        }

    }, [categoriaId])

    return (
        <>       
            { 
                loading ? <Loader/> 
                        : productos.length > 0 ? <ItemList productos={productos} />
                                               : <Display404/>     
            }
        </>    

    )
}

export default ItemListContainer
