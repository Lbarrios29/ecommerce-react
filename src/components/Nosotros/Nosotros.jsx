import React from 'react'
import Founder from '../../images/nosotros/imgFounder.png'
import Emp1 from '../../images/nosotros/emp1.png'
import Emp2 from '../../images/nosotros/emp2.png'
import Emp3 from '../../images/nosotros/emp3.png'

function Nosotros() {

    /**
        @todo:  Componente que describe brevemente la empresa
    **/

    return (

        <>
            <div class="separador"></div>
            <main>
                <section>

                    <h1 className="text-center pt-3 wow animate__animated animate__fadeInUp">
                        Staff Profesional
                    </h1>

                    <div className="container">
                        <div className="row">

                            {/* <!-- imagen Fundadora --> */}
                            <div id="colFounder"
                                className="col-md-5 col-sm-5 col-xs-12 m-lg-4 m-3 wow animate__animated animate__fadeInUp">
                                <img src={Founder} alt="imagen Fundadora" id="imgFounder"
                                    className="img-fluid"/>
                            </div>

                            {/* <!-- Reseña fundadora --> */}
                            <div id="colResenaFounder"
                                className="col-md-5 col-sm-5 col-xs-12 m-lg-4 m-3 wow animate__animated animate__fadeInUp"
                                data-wow-delay="0.1s">

                                <article className="p-4">
                                    <h2 className="text-left text-uppercase fw-bold fs-4">
                                        Elizabeth
                                    </h2>
                                    <p>
                                        Elizabeth trabaja sobre los aspectos humanos además de estéticos, generando su estilo
                                        propio donde realza elementos de la personalidad, con marcadas influencias de diferentes
                                        culturas del mundo y donde cada cliente disfruta, sino que vive una experiencia única.
                                    </p>
                                    <p id="parrafo2Founder">
                                        Elizabeth se capacita constantemente con maquilladores reconocidos a nivel nacional e
                                        internacional, y viaja por el mundo innovandose todo el tiempo, nunca dejando de
                                        perfeccionarse, porque cree que en la pluralidad de influencias se encuentra la
                                        identidad.
                                    </p>
                                    <p id="parrafo3Founder">
                                        Es reconocida a nivel nacional e internacional , siendo especialista en el área de
                                        Visagismo y Novias, haciendo foco en el maquillaje correctivo y social pero nunca
                                        dejando de mostrar las ultimas tendencias de maquilaje instagram.
                                    </p>
                                </article>

                            </div>

                        </div> 
                        {/* <!-- row --> */}
                    </div> 
                    {/* <!-- container --> */}
                </section>

                {/* <!-- Texto Empleados --> */}
                <section className="mt-5">
                    <div className="container wow animate__animated animate__fadeInUp">
                        <article>
                            <h2 className="text-uppercase text-center fw-bold fs-4">
                                Elizabeth's Team
                            </h2>
                            <p className="text-center p-1">
                                Nuestros empleados están altamente capacitados para brindarles el mejor trabajo para su
                                satisfacción personal.
                            </p>
                        </article>
                    </div>
                </section>

                <div className="container">
                    <div className="row text-center">

                        {/* <!-- Empleado1 --> */}
                        <div className=" col-md-4 col-sm-12 empleado wow animate__animated animate__fadeInUp">
                            <img src={Emp1} alt="Empleada Maquilladora"
                                className="border border-secondary border-4 img-fluid imgEmpleado"/>
                            <h3 className="fw-bold mt-1 pb-0 ">
                                Virginia Gonzalez
                            </h3>
                            <p className="h6 text-muted fs-5">Maquilladora</p>
                        </div>

                        {/* <!-- Empleado2 --> */}
                        <div className="col-md-4 col-sm-12 empleado wow animate__animated animate__fadeInUp">
                            <img src={Emp2} alt="Empleada Uñas"
                                className="border border-secondary border-4 img-fluid imgEmpleado"/>
                            <h3 className="fw-bold mt-1 pb-0">
                                Agustina Rodas
                            </h3>
                            <p className="h6 text-muted fs-5">Esteticista</p>
                        </div>

                        {/* <!-- Empleado3 --> */}
                        <div className="col-md-4 col-sm-12 empleado wow animate__animated animate__fadeInUp">
                            <img src={Emp3} alt="Empleada Pestañas"
                                className="border border-secondary border-4 img-fluid imgEmpleado"/>
                            <h3 className="fw-bold mt-1 pb-0">
                                Mariel Ferrer
                            </h3>
                            <p className="h6 text-muted fs-5 pt-0">Esteticista</p>
                        </div>

                    </div> 
                    {/* <!-- row --> */}
                </div> 
                {/* <!-- container --> */}

            </main>

            <div className="separador"></div>
        </>

    )
}

export default Nosotros
