import React from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'

function Loader() {

    /**
        @todo:  Componente Loader que se ejecuta ante cualquier peticion que tarde
                algunos segundos
    **/

    return (
        <> 
            <div className='separador'></div>
            <Container fluid='sm'>
                <div className='fw-bold m-3 p-3'>
                    <Button variant="dark" disabled>
                        <Spinner as="span"
                                animation="grow"
                                size="md"
                                role="status"
                                aria-hidden="true"/>
                        Cargando...
                    </Button>
                </div>
            </Container>
            <div className='separador'></div>
        </>
    )
}

export default Loader
