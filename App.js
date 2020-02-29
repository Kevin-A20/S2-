import React from 'react';
import './App.css';
import Header from '../src/Componente/Header';
import Content from '../src/Componente/Content';
import Prices from '../src/Componente/Prices';
import Footer from '../src/Componente/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Prices/>
      <Footer/>
    </div>
  );
}

export default App;
