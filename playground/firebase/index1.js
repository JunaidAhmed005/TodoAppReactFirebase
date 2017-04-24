// Set and Update database

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

// {
//     appName: "Todo app",
//     isRunning: true
// }

var firebaseRef = firebase.database().ref();

// this line is equal to the starting curly bracket of obj, means we reference the database only
firebaseRef.set({
    app: {
        appName: "Todo App",
        version: "1.0"
    },
    isRunning: true,
    user: {
        name: "Junaid",
        age: 22
    }
}).then(() => { // alse return promise
    console.log("Set worked"); // if run successfully
}, (e) => {
    console.log("Set failed"); // if doesn't run, ERROR!
});

// set completely wipe all the data at the current ref and replace it with the new one, 
// the reason is we use root reference

// firebaseRef.set({
//     appName: "Todo Application"
// });

// firebaseRef.child("user").set({
//     name: "Ahmed"
// });

// firebaseRef.child("app").set({
//     appName: "Updated Todo App"
// });


// Update() only update the first level of property

/*
firebaseRef.update({
    isRunning: false,
    app: {
        appName: "Updated Todo with removing version"
    }
});
*/

// two way to fix this: 
// 1) multi path update solution

firebaseRef.update({
    isRunning: false,
    "app/appName": "Update Todo without effect version"
}).then(() => {
    console.log("Updated Successfully")
},(error) => {
    console.log("Updated Failed")    
});

// 2) Child update solution
/*
firebaseRef.child("app").update({
    appName: "Update Todo App without effecting version"
});
*/

firebaseRef.update({
    "app/appName": "Todo Task",
    "user/name": "Junaid"
});

firebaseRef.child("app").update({
    version: "1.1"
});

firebaseRef.child("user").update({
    age: 21
});