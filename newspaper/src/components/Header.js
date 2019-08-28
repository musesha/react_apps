import React, { Component } from 'react';
import './../App.css';
// import './header.css'

class Header extends Component {
  state = {  } 
  render() { 
    return ( 
      <nav class="headerNav">
        <div className="mainContainer">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#Busines">Busines</a>
          <a href="#Health">Health</a>
          <a href="#travel">Travel</a>
          <a href="#science">Science</a>
          <a href="#sport">Sport</a>
        </div> 
      </nav> 
    );
  }
}
 
export default Header;