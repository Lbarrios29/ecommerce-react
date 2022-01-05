import { doc, getDoc, query, collection, where, getDocs, addDoc } from 'firebase/firestore';

// Service class for Purchase Orders
class ordersService {

    static async createOrder(order,db) {
    
        console.log("Method createOrder");
        const result = await addDoc(collection(db, "orders"), order);

        return result;

    }    

    // static async updateOrder(){


    // }

    // static async deleteOrder(db){


    // }

    // static async getOrders(){

    // }

} // class ordersService

export default ordersService