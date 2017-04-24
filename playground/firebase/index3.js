// fetch data from database

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
});

// // this fetch all the data from current ref, this return a promise
// firebaseRef.once("value").then((snapshot) => {
//     console.log("Got entire database", snapshot.val());
// }, (e) => {
//     console.log("Unable to fetch value", e);
// });

// // we can fetch subset of the data
// firebaseRef.child("app").once("value").then((snapshot) => {
//     console.log("Got data from app using", "KEY#:" + snapshot.key, snapshot.val());
// }, (err) => {
//     console.log("Unable to fetch data from app", err);
// });

// on listen for more than one triggering og an event
firebaseRef.on("value", (snapshot) => {
    console.log("Got value", snapshot.val());
});

// to off the "on" listener
firebaseRef.off();

// the other way to off is
var logData = (snapshot) => {
    console.log("logData value", snapshot.val());
};
firebaseRef.on("value", logData);

firebaseRef.off("value",logData);

firebaseRef.update({isRunning: false});

console.log("Task");

firebaseRef.child("user").on("value", (snapshot) => {
    console.log("User data", snapshot.val());
});

firebaseRef.child("user").update({
    name: "Faraz"
});
firebaseRef.child("app").update({
    appName: "Todo App delete"
});