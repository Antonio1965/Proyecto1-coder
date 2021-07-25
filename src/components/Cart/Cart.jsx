import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { CartItem } from "./CartItem";
import { StyledCart, CartDetail } from "./CartStyles";

export const Cart = () => {
  const { cart, removeFromCart } = useContext(Context);

  return (
    <StyledCart>
      {!cart.length ? (
        <div className="no-items">
          <h2>No hay items en el carrito.</h2>
          <Link to="/">
            <button className='volver'>VOLVER</button>
          </Link>{" "}
        </div>
      ) : (
        <CartDetail>
          <h2>Items a comprar: </h2>
          {cart.map((item) => (
            <CartItem
              item={item}
              removeFromCart={removeFromCart}
              key={item.id}
            />
          ))}
        </CartDetail>
      )}
    </StyledCart>
  );
};


