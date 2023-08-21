import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'insta';

 ngOnInit(): void{
  const firebaseConfig = {
    apiKey: "AIzaSyAKPqRQkoSUxP0RUhuxJsVq-jgC70Ghg14",
    authDomain: "insta-7a01c.firebaseapp.com",
    projectId: "insta-7a01c",
    databaseUrl: "https://insta-7a01c-default-rtdb.firebaseio.com/",
    storageBucket: "insta-7a01c.appspot.com",
    messagingSenderId: "273049955402",
    appId: "1:273049955402:web:a5969cbc3bbc3979dacab3",
    measurementId: "G-VVTYRHFWQS"
  };

  firebase.initializeApp(firebaseConfig);
 }
}