// delete database

import firebase from "firebase";

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        appName: "Todo App",
        version: "1.0.0"
    },
    isRunning: true,
    user: {
        name: "Junaid",
        age: 22
    }
}).then(() => {
    console.log("Set Worked");
}, (error) => {
    console.log("Set Failed");
})

//firebaseRef.remove(); // remove database completely

// 1) 
//firebaseRef.child("app/appName").remove();

// 2) 
// firebaseRef.child("app").update({
//     version: "2.0",
//     appName: null
// });

firebaseRef.update({
    isRunning: null
});

firebaseRef.child("user/age").remove();