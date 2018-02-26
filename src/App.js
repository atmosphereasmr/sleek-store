import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/header.js'
import Shop from './Components/Shop/shop.js'
import Footer from './Components/Footer/footer.js'

import router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      {router}
      <Footer />
      </div>
    );
  }
}

export default App;
