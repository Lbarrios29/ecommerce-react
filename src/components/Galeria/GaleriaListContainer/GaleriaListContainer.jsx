import React from 'react'
import { useState, useEffect } from 'react'
import { getGaleria } from '../../../utils/getGaleria'
import ItemListGaleria from '../ItemListGaleria/ItemListGaleria'
import Loader from '../../../components/Loader/Loader'
import { Container, Row } from 'react-bootstrap'
import '../../galeria/galeria.css'

function GaleriaListContainer() {

    /**
        @todo:  Componente Context que muestra galeria de imagenes
    **/

    const [galeria, setGaleria] = useState([])
    const [loading, setLoading] = useState(true)

    // Obtiene las imagenes
    useEffect(() => {

        getGaleria    
            .then(data => {   
                    setGaleria(data)   
            })
            .catch(err => console.log(err))    
            .finally(()=> setLoading(false))

    },[])

    return (

        <>
            <div class="separador"></div>
            <main>
                <section>

                    <h1 className="text-center pb-4 wow animate__animated animate__fadeInUp">
                        Algunos Trabajos
                    </h1>

                    <Container>
                        <Row className="gy-3">
                            
                            { 
                                loading ?   <Loader/>
                                        :   <ItemListGaleria galeria={galeria}/>
                            }
                            
                        </Row>
                    </Container>            

                </section>
            </main>

            <div className="separador"></div> 
        </>               

    )
}

export default GaleriaListContainer
