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
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> 
      </nav> 
    );
  }
}
 
export default Header;