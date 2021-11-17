import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC5JQiyxDYpB1WH6Rb1hx8nBhZ5-xotQ8w",
    authDomain: "api-cart-coder.firebaseapp.com",
    projectId: "api-cart-coder",
    storageBucket: "api-cart-coder.appspot.com",
    messagingSenderId: "260697470732",
    appId: "1:260697470732:web:0cc5ad13e7e080c1ec7b29"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}
