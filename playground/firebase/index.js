import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBvKHgEbpI8Iv2nY85Mq0EgpOqcB-sUAVs",
  authDomain: "chaturvedi-todo-app-dcbaa.firebaseapp.com",
  databaseURL: "https://chaturvedi-todo-app-dcbaa.firebaseio.com",
  storageBucket: "chaturvedi-todo-app-dcbaa.appspot.com",
}

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Kartik',
    age: 21
  }
})

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('new todo added', snapshot.key, snapshot.val())
})

todosRef.push({
  text: 'Todo 1'
})

todosRef.push({
  text: 'Todo 2'
})







