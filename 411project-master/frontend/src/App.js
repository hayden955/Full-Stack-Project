import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './components/NavBar/Navbar';
// import { Router } from 'react-router';
import Home from './pages';
import About from './pages/about';
import Signin from './pages/signin';
import Signup from "./pages/signup";
import Beaches from "./pages/beaches";
import firebase from "firebase/app";
import Form from './pages/form'
import WeatherSearch from './pages/weathersearch'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


  function App() {

  
    // useEffect(()=>{
    //   fetch("/beachdata?latitude=42.3601&longitude=-71.0589")
    //   .then(response => response.json())
    //   .then(data=>console.log(data));
    // }, []);

    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        console.log(user.uid);
      }else{
        console.log("Error");
      }
    });


    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>Beach Weather Application</p>
    //       <div>
         
    //       </div>
    //     </header>
    //   </div>
    // );

    return(
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/beaches' exact component={Beaches}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path = "/signup" exact component = {Signup}/>
            <Route path = "/mybeaches" exact component = {WeatherSearch}/> 
          </Switch>
        </Router>
      </div>
    );
  }

export default App;