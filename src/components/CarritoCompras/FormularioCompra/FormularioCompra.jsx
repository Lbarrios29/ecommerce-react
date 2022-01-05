import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import ordersService from '../../../data/ordersService';
import { db } from '../../../Firebase/firebase';
import { Navigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap'

function FormularioCompra() {

    /**
        @todo:  Componente que muestra un formulario de contacto donde el usuario
                completa nombre,email,telefono, direccion como obligatorio previamente
                a comprar.
    **/

    const {cartList, calcularTotal,terminarCompra,setIOrderId} = useCartContext();

    // Devuele la orden a grabar en db Firebase
    const fillOrder = (evt) =>{

        let nombre="";
        let direccion="";
        let telefono="";
        let email="";   

        // Obtiene los valores del formulario por Id del elemento
        for (let index = 0; index < evt.target.length; index++) {
            
            switch (evt.target[index].id) {

                // Nombre
                case '1':
                    nombre = evt.target[index].value;
                    break;
            
                // Dirección    
                case '2':
                    direccion =evt.target[index].value;
                    break;
                
                // Telefono
                case '3':
                    telefono = evt.target[index].value;
                    break;

                // Email
                case '4':
                    email = evt.target[index].value;
                    break;

                default:
                    break;
            }

        }

        // Arma la orden con los items seleccionados, mas los datos del usuario para grabarlo en bd
        const order = { }
        order.date = new Date();
        order.buyer = { nombre, direccion, telefono, email }
        order.total = calcularTotal(cartList)
        order.items = cartList.map(cartItem=>{
            return {id: cartItem.item.id, 
                    nombre: cartItem.item.nombre,
                    precioUnitario:cartItem.item.precio, 
                    precioNeto:cartItem.item.precio * cartItem.cantidad,
                    cantidad: cartItem.cantidad
            }
        })

        return order;

    }

    // Manejador del evento submit del boton Comprar que su responsabilidad
    // es la de crear la orden del usuario en Firebase
    const handleSubmit = async (evt) => {
        
        console.log("handleSubmit");
        evt.preventDefault();

        const order = fillOrder(evt);

        try {
                    
            const ref = await ordersService.createOrder(order,db);
            setIOrderId(ref.id);
            terminarCompra();
                
        }
        catch (error) {
            console.log(error);    
        }
        finally{
            
        }

    }

    return (

        <>
            <div className='separador'></div>
            <Container fluid="sm">
                
                <h1 className='text-center mb-5'>Opciones de Envío</h1> 
                <Form id='IdForm' onSubmit={handleSubmit} className='cartBoxContact'>
                    <Form.Group className='mb-3'>
                        <Form.Label className='h5'>
                           <h5>Nombre Completo</h5> 
                        </Form.Label>
                        <Form.Control id='1' type="text" placeholder="Ingrese Nombre completo" required />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label className='h5'>
                            <h5>Dirección de envío</h5>
                        </Form.Label>
                        <Form.Control id='2' type="text" placeholder="Ingrese su dirección" required />
                    </Form.Group>                    

                    <Form.Group className='mb-3'>
                        <Form.Label className='h5'>
                            <h5>Teléfono</h5>
                        </Form.Label>
                        <Form.Control id='3' type="text" placeholder="Ingrese su número" required />
                    </Form.Group>                    

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>
                            <h5>Dirección de email</h5>
                        </Form.Label>
                        <Form.Control id='4' type="email" placeholder="Ingrese su email" required />
                    </Form.Group>
                    
                    <Button variant="primary" 
                            type="submit" 
                            className='btn btn-dark cartBoxContact--button'>
                        Comprar
                    </Button>

                </Form>
            </Container>
            <div className='separador'></div>  
            {
                cartList.length === 0  && <Navigate replace to="/terminarCompra" /> 
            } 

        </>

    )
}

export default FormularioCompra
