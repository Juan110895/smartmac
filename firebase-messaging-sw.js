importScripts ('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js'); 
importScripts ('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');
firebase.initializeApp ({
    apiKey: "AIzaSyAwCkytAgZs4y7b8gw38uqGJTVfDvrkatQ",
    authDomain: "smartmac-1cb13.firebaseapp.com",
    projectId: "smartmac-1cb13",
    storageBucket: "smartmac-1cb13.appspot.com",
    messagingSenderId: "24357094889",
    appId: "1:24357094889:web:e1919deef997f2cb783778",
    measurementId: "G-72LXTEWJ8W"
});
const messaging = firebase.messaging ();