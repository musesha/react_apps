import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  state = {  } 
  render() { 
    return ( 
    <div className="App">

      <Header />
      <h1>This is a heading</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Footer />
    </div>
     );
  }
}
 
export default App;