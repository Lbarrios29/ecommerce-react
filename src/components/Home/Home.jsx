import React from 'react'
import './home.css'
import background from '../../images/index/img1.png'
import background2 from '../../images/index/indexPestania.png'
import background3 from '../../images/index/img3.png'
import background4 from '../../images/index/indexUltimo.png'

function Home() {

    /**
        @todo:  Componente Home que muestra la esencia de este sitio
                con las tematicas y propuestas que provee
    **/

    return (
        <>
            <div class="separador"></div>
            <main>
                    <section className="m-3 p-4">
                        <h1 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
                            Maquillaje
                        </h1>
                        <div className="text-start wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                            <p>
                                ¡Tu mirada lo dice todo! Y las posibilidades son infinitas. Estilos recatados para el día o
                                dramáticos para la noche. Líneas sutiles y definidas, tonos ahumados en tendencia, looks de
                                cejas personalizados, tonos clásicos o un estallido de color vibrante. Nuestras sombras de ojos
                                y
                                prebases para la sombra, los delineadores de ojos y lápices de cejas, y la increíble colección
                                de
                                mascaras han sido diseñados para transformar tu look en un abrir y cerrar de ojos.
                            </p>
                            <p>
                                Los estilos impecables son posibles gracias al mejor maquillaje de rostro que ofrecemos.
                                Tonos de rubores perfectos, bases sutiles, correctores, prebases y maquillaje para contornear el
                                rostro para ayudarte a crear el look perfecto, no importa qué lado de ti quieras destacar.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div>
                            <img src={background} className="altoParallax img-fluid w-100" alt="text"/>
                        </div>
                    </section>

                    <section className="m-3 p-4">
                        <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
                            Pestañas
                        </h2>
                        <div className="text-start wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                            <p>
                                Los ojos son el rasgo facial más prominente que podemos mostrar ante el mundo, y ahora se han
                                convertido en el centro de atención desde que cubrimos la nariz y la boca con mascarillas para
                                evitar la propagación de la COVID-19. La pandemia sin duda es responsable de por lo menos parte
                                del
                                creciente interés en la belleza de los ojos, que incluye procedimientos para aumentar el volumen
                                de
                                las pestañas en el salón de belleza y en el hogar.
                            </p>
                            <p>
                                Con la gran variedad de extensiones que hay para elegir —de diferente longitud, grosor, material
                                y
                                tipo de ondulación, podemos transformar tus ojos. “Por ejemplo, en las
                                mujeres de 50 años o más, las pestañas naturales comienzan a perder volumen y los párpados
                                exteriores pueden comenzar a descender levemente”. “Mediante el uso de pestañas
                                de diversas longitudes, podemos crear volumen donde no existe y realmente levantar los ojos”.
                            </p>
                        </div>
                    </section>

                        <img src={background2} className="altoParallax img-fluid w-100" alt="text"/>
                    <section className="m-3 p-4">
                        <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
                            Maquillaje Artístico
                        </h2>
                        <div className="text-start wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                            <p>
                                Normalmente, se trabaja con unos bocetos previos y se trata de adaptar el dibujo al cuerpo y al
                                rostro. Las técnicas de aerógrafo en esta clase de dibujos, son esenciales para que el trabajo
                                sea
                                aún más perfecto.
                                El maquillaje de fantasía o profesional se diferencia al maquillaje convencional en que en este
                                último, se intenta disimular o dar un toque o un aspecto natural, sin embargo, en el de fantasía
                                o
                                artístico se busca todo lo contrario, se busca realzar y trabajar el surrealismo lo máximo
                                posible,
                                figuras de animales, monstruos, unicornios, dioses…y un sinfín de figuras más propias del cine y
                                del
                                teatro son tratadas con esta clase de maquillaje.
                            </p>
                            <p> Con esta clase de maquillaje, no nos referimos
                                solo a aplicar color con pincel, sino también a
                                extensiones de pelo, de piel, de telas originales y extravagantes que hagan aparentar lo que no
                                se
                                es a diferencia muy notoria del maquillaje natural y convencional.
                            </p>
                        </div>
                    </section>

                        <img src={background3} className="altoParallax img-fluid w-100" alt="text"/>
                    <section className="m-3 p-4">
                        <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
                            Productos de alta calidad
                        </h2>
                        <p className="text-start wow animate__animated animate__fadeInUp " data-wow-delay="0.1s">
                            Contamos con líneaa de productos profesionales del mercado nacional e internacional. Tenemos a
                            disposición
                            más de 400 productos, los mejores desarrollos en productos HD y Ultra HD, y una novedosa línea 100%
                            certificada cruelty free + sin parabenos que respeta el cuidado de la piel.
                            Marcas de maquillaje profesional a la vanguardia de las últimas tendencias de belleza,
                            nuestra misión es ofrecer productos auténticos, con materiales genuinos de alto rendimiento que
                            cumplan ampliamente el requerimiento de la tecnología 4KCOMPLEX y, los sueños artísticos más
                            exigentes.
                        </p>
                    </section>

                        <img src={background4} className="altoParallax img-fluid w-100" alt="text"/>
            </main>

        </>
    )
}

export default Home
