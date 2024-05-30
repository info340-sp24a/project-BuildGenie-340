import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom'

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8vjprFQj7eUvhuXRfWVk4tXeBGzdqzyY",
    authDomain: "build-genie-info340.firebaseapp.com",
    databaseURL: "https://build-genie-info340-default-rtdb.firebaseio.com",
    projectId: "build-genie-info340",
    storageBucket: "build-genie-info340.appspot.com",
    messagingSenderId: "119422402584",
    appId: "1:119422402584:web:405c8b34dcbb626194c36d"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter >
);