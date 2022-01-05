import React from 'react'
import Makeup from '../../images/servicios/makeup.png'
import Cejas from "../../images/servicios/cejas.png"
import Pestana from '../../images/servicios/pestana.png'
import Unas from "../../images/servicios/unas.png"
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './servicios.css'

function Servicios() {
    
    /**
        @todo:  Componente que muestra los servicios que brinda la empresa
    **/

    return (

        <>
            <div class="separador"></div>

            <main>

                <h1 className="text-center pb-3 wow animate__animated animate__fadeInUp">
                    Nuestros Servicios
                </h1>

                <Container fluid="sm" className='py-3'>

                    {/* <!-- Servicio Makeup --> */}
                    <div className="flexServicios">
                        <div className="boxServicios">
                            <h2 className="wow animate__animated animate__fadeInUp">
                                Makeup
                            </h2>
                            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                Maquillaje y peinado para novias, quinceañeras, eventos especiales y más con las ultimas
                                tendencias mundiales.Preparación y uso correcto de productos previos y posteriores al
                                maquillaje
                                Técnicas para optimizar el uso de los pigmentos en el maquillaje para lograr un acabado
                                súper
                                glow.
                                Esfumado de ojos e integración de colores para un esfumado ideal sin cortes, correcta
                                aplicación
                                de pestanas enteras y correccion de ojos con el uso de las mismas.
                                Puntos de luz y sombras del maquillaje , como trabajarlos rápidamente. Maquillaje de
                                tendencia
                                instagram, técnicas actuales en tendencia ( maquillajes variables ).
                                <div className='mt-2'>
                                    <Link to="/display404" className="text-decoration-none p-2 rounded linkServicios text-decoration-none wow animate__animated
                                            animate__fadeInUp" data-wow-delay="0.2">
                                        Ver mas...
                                    </Link>
                                </div>
                            </p>
                        </div>

                        <div className="boxServicios">
                            <Link to="/display404" className='text-decoration-none'>
                                <a href="servicioMakeup.html">
                                    <img src={Makeup} alt="Maquillaje" loading="lazy"
                                        className="img-fluid rounded wow animate__animated animate__zoomIn"/>
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- Servicio Cejas --> */}
                    <div className="flexCejas">
                        <div className="boxServicios">
                            <Link to="/display404" className='text-decoration-none'>
                                <img src={Cejas} alt="Tratamiento de Cejas" loading="lazy"
                                    className="img-fluid rounded wow animate__animated animate__zoomIn"/>
                            </Link>
                        </div>

                        <div className="boxServicios">
                            <h2 className="wow animate__animated animate__fadeInUp">
                                Cejas
                            </h2>
                            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                Las cejas son tendencia, y son el marco de la cara. Existen diferentes tipos de cejas y
                                estilos
                                para elegir; por ello es muy importante tener en cuenta la fisionomía del rostro a la
                                hora
                                de
                                perfilar o elegir el diseño ideal con pomada y así resaltar los rasgos del cliente. Con
                                pinzas,
                                tijera y perfilador eléctrico y/o navaja higienizadas retiramos los pelitos dando la
                                forma
                                adecuada, eliminamos vellos para resaltar tu mirada y terminamos pasando una loción
                                sobre la
                                zona para calmar la rojez e inflamación en algunos casos.
                                <div className='mt-2'>
                                    <Link to="/display404" className="p-2 rounded linkServicios text-decoration-none wow animate__animated
                                        animate__fadeInUp" data-wow-delay="0.2s">
                                        Ver mas...
                                    </Link>
                                </div>
                            </p>
                        </div>
                    </div>

                    {/* <!-- Servicio Pestañas --> */}
                    <div className="flexServicios">
                        <div className="boxServicios">
                            <h2 className="wow animate__animated animate__fadeInUp">
                                Pestañas
                            </h2>
                            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                Son extensiones de pestaña pelo a pelo, que se adhieren individualmente sobre cada una
                                de
                                las
                                pestañas naturales cercanas a la raíz. Los productos utilizados no dañan las pestañas
                                naturales.
                                Las extensiones varían de color, grosor y largo. El diseño se realiza dependiendo de la
                                forma de
                                cada ojo. Por lo tanto, cada trabajo es personalizado y distinto. Son ligeras,
                                resistentes
                                al
                                agua y al calor. No es un tratamiento invasivo.
                                <div className='mt-2'>
                                    <Link to="/display404" className="text-decoration-none p-2 rounded linkServicios text-decoration-none wow animate__animated
                                            animate__fadeInUp" data-wow-delay="0.2s">
                                            Ver mas...
                                    </Link>
                                </div>
                            </p>
                        </div>

                        <div className="boxServicios">
                            <Link to="/display404" className='text-decoration-none'>
                                    <img src={Pestana} alt="Tratamiento de Pestañas" loading="lazy"
                                        className="img-fluid rounded wow animate__animated animate__zoomIn"/>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- Servicio Uñas --> */}
                    <div className="flexUnas">
                        <div className="boxServicios">
                            <Link to="/display404" className='text-decoration-none'>
                                    <img src={Unas} alt="Tratamiento de Uñas" loading="lazy"
                                        className="img-fluid rounded wow animate__animated animate__zoomIn"/>
                            </Link>
                        </div>

                        <div className="boxServicios">
                            <h2 className="wow animate__animated animate__fadeInUp">
                                Uñas
                            </h2>
                            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                Nuestros servicios pueden ser en Gel buscamos siempre las últimas técnicas y tendencias
                                en
                                Uñas.
                                Podes encontrar Uñas Esculpidas donde se realizará el diseño y largo deseado o Kapping
                                siguiendo
                                la estructura de la uña además de semipermanente y mucho más.
                                <div className='mt-2'>
                                    <Link to="/display404" className="text-decoration-none p-2 rounded linkServicios text-decoration-none wow animate__animated
                                        animate__fadeInUp" data-wow-delay="0.2s">
                                        Ver mas...
                                    </Link>
                                </div>
                            </p>
                        </div>
                    </div>

                </Container>

            </main>
        </>
    
    )

}

export default Servicios
