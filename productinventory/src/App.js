import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProduct from './components/funcComponent';

function App() {
  return (
    <div className="App">
    <header className="App-header">
     <h1>Product Inventory</h1>
     <AddProduct/>
     
    </header>
  </div>
  );
}

export default App;
