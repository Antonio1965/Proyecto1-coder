import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { DataProvider} from '../../Context'
import { CartItem } from "./CartItem";


export const Cart = ({children}) => {
  const { cart, removeFromCart } = useContext(Context);

  return (
      <div>
      {!cart.length ? (
        <div className="no-items">
          <h2>No hay items en el carrito.</h2>
          <Link to="/">
            <button>VOLVER</button>
          </Link>{" "}
        </div>
      ) : (
        <div className="cart-detail">
          <h2>Items a comprar: </h2>
          {cart.map((item) => (
            <CartItem
              item={item}
              removeFromCart={removeFromCart}
              key={item.id}
            />
          ))}
        </div>
      )}
      </div>
  );
};
