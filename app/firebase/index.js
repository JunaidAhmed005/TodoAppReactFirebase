import firebase from "firebase";

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBufLINB25b5GDQu-NLE79gTfoGFUc-RgY",
        authDomain: "reacttodoapp-c643b.firebaseapp.com",
        databaseURL: "https://reacttodoapp-c643b.firebaseio.com",
        projectId: "reacttodoapp-c643b",
        storageBucket: "reacttodoapp-c643b.appspot.com",
        messagingSenderId: "673840687356"
    };
    firebase.initializeApp(config);
    
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase; // root firebase llibrary 
