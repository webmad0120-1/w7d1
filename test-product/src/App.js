import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductGrid from "./ProductGrid";
import Student from './Student';

function App() {
  return (
    <div className="App">
      <img src={logo} height="100"/>
      <Student></Student>
      <ProductGrid></ProductGrid>
    </div>
  );
}

export default App;
