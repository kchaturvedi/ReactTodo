import firebase from 'firebase/firebase-browser'

var config = {
  apiKey: "AIzaSyBvKHgEbpI8Iv2nY85Mq0EgpOqcB-sUAVs",
  authDomain: "chaturvedi-todo-app-dcbaa.firebaseapp.com",
  databaseURL: "https://chaturvedi-todo-app-dcbaa.firebaseio.com",
  storageBucket: "chaturvedi-todo-app-dcbaa.appspot.com",
}

firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Todo App',
  isRunning: true,
  user: {
    name: 'Kartik',
    age: 21
  }
})

firebase.database().ref().set({
  appName: 'Todo Application'
})