import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyBvKHgEbpI8Iv2nY85Mq0EgpOqcB-sUAVs",
    authDomain: "chaturvedi-todo-app-dcbaa.firebaseapp.com",
    databaseURL: "https://chaturvedi-todo-app-dcbaa.firebaseio.com",
    storageBucket: "chaturvedi-todo-app-dcbaa.appspot.com",
  }

  firebase.initializeApp(config)
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref()
export default firebase