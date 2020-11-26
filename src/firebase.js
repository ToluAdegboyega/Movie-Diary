import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAdH3oNc28p55FCAoJYF_iKkEY2BhgC8hM",
    authDomain: "movie-database-crud.firebaseapp.com",
    databaseURL: "https://movie-database-crud.firebaseio.com",
    projectId: "movie-database-crud",
    storageBucket: "movie-database-crud.appspot.com",
    messagingSenderId: "11772955604",
    appId: "1:11772955604:web:ba24397d397030dc8ee441"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();