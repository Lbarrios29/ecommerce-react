import { initializeApp } from 'firebase/app';
import { getFirestore    } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

    apiKey: "AIzaSyCKqiDPbMwMsNSLL4YvwIvLK1wIvo6VM2s",
    authDomain: "makeup-ecommerce.firebaseapp.com",
    projectId: "makeup-ecommerce",
    storageBucket: "makeup-ecommerce.appspot.com",
    messagingSenderId: "1029959937004",
    appId: "1:1029959937004:web:c4578d7699f6b4368caec9",
    measurementId: "G-6TRBR0DQ3X"

};

const app = initializeApp(firebaseConfig);

// Obtiene la conexion a bd
export const db = getFirestore(app);
