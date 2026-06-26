import './App.css';
import Navbar from './componetnts/Navbar'; 
import React, { Component } from 'react'
import News from './componetnts/News';
const API_KEY = "498bbeb28963476a83093378cc4ca4b3"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Navbar" mode="dark"/>
        <div className="contianer">
          <News API_KEY={API_KEY}/>
        </div>
        <h1>Hello!</h1>
      </div>
    )
  }
}


