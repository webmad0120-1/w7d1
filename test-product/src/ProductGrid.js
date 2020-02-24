import React from "react";
import "./ProductGrid.css";
import Product from "./Product";

function ProductGrid() {
  return (
    <div class="product-grid">
      <Product nombre="Pantalon" price="20" img="https://tienda.granadacf.es/827-large_default/pantalon-chandal-gris-adulto-nike-19-20.jpg"></Product>
      <Product nombre="Jersey" price="40" img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/755586/01/fnd/SEA/fmt/png/Man-City-Men's-Home-Replica-Jersey"></Product>
      <Product nombre="Sueter" price="10" img="https://unonueveocho.es/1621-tm_large_default/sweter-bella-ciao.jpg"></Product>
    </div>
  );
}

export default ProductGrid;
