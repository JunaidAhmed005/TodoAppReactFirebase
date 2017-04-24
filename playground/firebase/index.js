// set array in firebase and fetch data and print it in console

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

var notesRef = firebaseRef.child("notes");

// var newNotesRef = notesRef.push();
// newNotesRef.set({
//     text: "Ice cream"
// });

notesRef.on("child_added", (snapshot) => {
    console.log("child_added", snapshot.key, snapshot.val());
});

notesRef.on("child_changed", (snapshot) => {
    console.log("child_changed", snapshot.key, snapshot.val());
});

notesRef.on("child_removed", (snapshot) => {
    console.log("child_removed", snapshot.key, snapshot.val());
});

// this is same as
var newNotesRef = notesRef.push({
    text: "Ice cream!"
});

var newNotesRef2 = notesRef.push({
    text: "Cold drink"
});

newNotesRef.update({
    text: "Ideal 360 Ice cream"
});

newNotesRef2.update({
    text: null
});

var todosRef = firebaseRef.child("todos");

todosRef.on("child_added", (snapshot) => {
    console.log("todos child_added", snapshot.key, snapshot.val());
});

var newTodosRef1 = todosRef.push({
    text: "Kal ice cream khani hai"
});

var newTodosRef2 = todosRef.push({
    text: "gola ganda bhut ganda"
});

