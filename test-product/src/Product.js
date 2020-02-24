import React from "react";
import "./Product.css";

function Product(props) {
  // var price = Math.round(Math.random() * 100)
  let element = <h1>Hello, world!</h1>;

  return (
    <div class="product">
      {element}
      <h1>{props.nombre}</h1>
      <img src={props.img} alt="" width="100" />
      {props.price >=50 && <span class="price green">{props.price}</span>}
      {props.price <50 && <span class="price red">{props.price}</span>}
      {/* <span class="price green">{Math.round(Math.random() * 100)}eur</span> */}
      <button onClick={() => test()}>Add to cart {props.price}</button>
      {element}
    </div>
  );
}

export default Product;
