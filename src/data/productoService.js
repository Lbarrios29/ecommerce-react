import { doc, getDoc, query, collection, where, getDocs } from 'firebase/firestore';

// Clase de Servicio que obtiene los productos
class productoService {

    static async getProductById(id,db) {
    
        console.log("Method getProductById")
        const productoSnap = await getDoc( doc( db, 'productos', `${id}`) )

        return { id:productoSnap.id, ...productoSnap.data() }

    }    

    static async getProductByCatalog(field, operator,condition, db){

        // Create a query against the collection.
        const buildQuery = query(collection(db, 'productos'), where(`${field}`, `${operator}`, `${condition}`));

        // Obtiene los documentos filtrados
        const productoSnapshot = await getDocs( buildQuery );
        
        // Obtiene los documentos en un array
        const productoList = productoSnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }));

        return productoList;

    }

    static async getProducts(db){

        // Obtiene la coleccion a tratar
        const productosCollection = collection(db, 'productos');

        // Obtiene los documentos de la coleccion sin filtro(todo)
        const productoSnapshot = await getDocs( productosCollection );

        // Obtiene los documentos en un array
        const productoList = productoSnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }));

        return productoList;

    }

} // class productoService

export default productoService