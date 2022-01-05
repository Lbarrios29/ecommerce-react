import Imagen1 from '../images/galeria/png/1.png'
import Imagen2 from '../images/galeria/png/2.png'
import Imagen3 from '../images/galeria/png/3.png'
import Imagen4 from '../images/galeria/png/4.png'
import Imagen5 from '../images/galeria/png/5.png'
import Imagen6 from '../images/galeria/png/6.png'
import Imagen7 from '../images/galeria/png/7.png'
import Imagen8 from '../images/galeria/png/8.png'
import Imagen9 from '../images/galeria/png/9.png'
import Imagen10 from '../images/galeria/png/10.png'
import Imagen11 from '../images/galeria/png/11.png'
import Imagen12 from '../images/galeria/png/12.png'
import Imagen13 from '../images/galeria/png/13.png'
import Imagen14 from '../images/galeria/png/14.png'
import Imagen15 from '../images/galeria/png/15.png'
import Imagen16 from '../images/galeria/png/16.png'
import Imagen17 from '../images/galeria/png/17.png'
import Imagen18 from '../images/galeria/png/18.png'

const galeria = [
                {
                    id:"1000",
                    urlInstagram:"https://www.instagram.com/p/CQXdPIarHEc/",
                    srcImagen:Imagen1,
                    alt:"Maquillaje egipcio"
                },
                {
                    id:"1001",
                    urlInstagram:"https://www.instagram.com/p/B40epgRF5-3/",
                    srcImagen:Imagen2,
                    alt:"Maquillaje parpados"
                },
                {
                    id:"1002",
                    urlInstagram:"https://www.instagram.com/p/B47f7ObFCdg/",
                    srcImagen:Imagen3,
                    alt:"Maquillaje turquesa"
                },
                {
                    id:"1003",
                    urlInstagram:"https://www.instagram.com/p/B9annskFoi8/",
                    srcImagen:Imagen4,
                    alt:"Maquillaje gala"
                },
                {
                    id:"1004",
                    urlInstagram:"https://www.instagram.com/p/B40gaQEFOfn/",
                    srcImagen:Imagen5,
                    alt:"Maquillaje delineado"
                },
                {
                    id:"1005",
                    urlInstagram:"https://www.instagram.com/p/CB9Nx9VjKZR/",
                    srcImagen:Imagen6,
                    alt:"Maquillaje sport"
                },
                {
                    id:"1006",
                    urlInstagram:"https://www.instagram.com/p/B40esZ7FDWJ/",
                    srcImagen:Imagen7,
                    alt:"Maquillaje casamiento"
                },
                {
                    id:"1007",
                    urlInstagram:"https://www.instagram.com/p/CJOPgTAlwfY/",
                    srcImagen:Imagen8,
                    alt:"Maquillaje evento"
                },
                {
                    id:"1008",
                    urlInstagram:"https://www.instagram.com/p/B40gcI7FUNY/",
                    srcImagen:Imagen9,
                    alt:"Maquillaje verde"
                },   
                {
                    id:"1009",
                    urlInstagram:"https://www.instagram.com/p/B40g-sMlAtv/",
                    srcImagen:Imagen10,
                    alt:"Maquillaje blue"
                },
                {
                    id:"1010",
                    urlInstagram:"https://www.instagram.com/p/B9KjgXynf5F/",
                    srcImagen:Imagen11,
                    alt:"Maquillaje black"
                },
                {
                    id:"1011",
                    urlInstagram:"https://www.instagram.com/p/B40g8eKlpoI/",
                    srcImagen:Imagen12,
                    alt:"Maquillaje epoca"
                },
                {
                    id:"1012",
                    urlInstagram:"https://www.instagram.com/p/CPpuva1rUYA/",
                    srcImagen:Imagen13,
                    alt:"Maquillaje casual"
                },
                {
                    id:"1013",
                    urlInstagram:"https://www.instagram.com/p/B40g7zPlWl4/",
                    srcImagen:Imagen14,
                    alt:"Maquillaje artístico"
                },
                {
                    id:"1014",
                    urlInstagram:"https://www.instagram.com/p/B40gVPlljVp/",
                    srcImagen:Imagen15,
                    alt:"Maquillaje hindu"
                },
                {
                    id:"1015",
                    urlInstagram:"ttps://www.instagram.com/p/CPtrLSSr0TO/",
                    srcImagen:Imagen16,
                    alt:"Maquillaje casual"
                },
                {
                    id:"1016",
                    urlInstagram:"https://www.instagram.com/p/CHV1S9nl7L_/",
                    srcImagen:Imagen17,
                    alt:"Maquillaje hindu"
                },
                {
                    id:"1017",
                    urlInstagram:"https://www.instagram.com/p/B40gTl7lxFi/",
                    srcImagen:Imagen18,
                    alt:"Maquillaje delineado"
                }                                                                                                                              
            ];

export const getGaleria = new Promise((aceptado, rechazada)=>{
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(galeria)        
    }, 2000);
    //rechazada('400 not found')
})