import { createContext, useState, useContext } from "react";

// Se crea el contexto
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

	const [cartList, setCartList] = useState([]);
	const [idDelete, setIdDelete] = useState(1);
	const [itemsCounter, setItemsCounter] = useState(0);
	const [orderId, setIOrderId] = useState(0);

	const agregarProducto = (item) => {

		console.log("agregarProducto");
		let index = isInCart(item.item.id);

		// Si no existe el item lo agrega
		if (index < 0) {

			setCartList([...cartList, item]);
			setItemsCounter(itemsCounter + item.cantidad);
		
		}
		// Si existe suma la cantidad en el counter e item
		else{
		
			setItemsCounter(itemsCounter + item.cantidad);
			let auxCarrito = cartList;
			auxCarrito[index].cantidad += item.cantidad;
			setCartList(auxCarrito); 
		
		}

	};

	const isInCart = (id) => {

		let auxCarrito = cartList;
		const index = auxCarrito.findIndex((lista) => lista.item.id === id);

		return index;
	};

	const vaciarCarrito = () => {
		setCartList([]);
		setItemsCounter(0)
	};

	const eliminarItem = (id) => {

		console.log("eliminarItem");
		let auxCarrito = cartList;
		let index = isInCart(id);

		if (index >= 0) {

			if ( itemsCounter > cartList[index].cantidad ) {
				setItemsCounter(itemsCounter - cartList[index].cantidad)
			} 
			
			auxCarrito.splice(index, 1);
			setIdDelete(id);
		
		}

		setCartList(auxCarrito);

	};

	const terminarCompra = () => {

		setCartList([]);
		setItemsCounter(0)

	}

	function calcularTotal(items) {

        let total = 0
        for (let index = 0; index < items.length; index++) {        
            total += items[index].item.precio * parseInt(items[index].cantidad); 
        }
        return total

    }

	return (

		<CartContext.Provider value={{  cartList,
                                        agregarProducto,
                                        setCartList,
                                        vaciarCarrito,
                                        eliminarItem,
                                        idDelete,
                                        setIdDelete,
										itemsCounter,
										setItemsCounter,
										terminarCompra,
										orderId,
										setIOrderId,
										calcularTotal }}>
			{children}
		</CartContext.Provider>

	);

}

export default CartContextProvider