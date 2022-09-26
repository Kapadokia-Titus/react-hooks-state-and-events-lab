import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, hasCartItem]=useState(false); 
  
  function handleCart(e){
    hasCartItem(!cart)
  }
  return (
    <li className={cart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
