import React, { Component } from 'react';
import Conversor from'./Conversor';
import './App.css'
import sifrao from './img/sifrao.png'

class App extends Component{
render() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className='linha'>
       <Conversor moedaA="USD" moedaB="BRL"></Conversor>
       <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className='linha'>
       <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
       <Conversor moedaA="BRL" moedaB="GBP"></Conversor>
      </div>
      <div className='linha'>
       <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
       <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}
}
export default App;
