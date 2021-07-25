import React from "react";
import { StyledCartItem } from './CartItemStyles';
import trash from '../../img/trash.jpg';


export const CartItem = ({ item, removeFromCart }) => {
  const handleRemoval = () => removeFromCart(item);

  return (
    <StyledCartItem>
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Estrella: {item.rating}</p>
        <span>
          {item.quantity} * ${item.price} = ${item.quantity * item.price}
        </span>
        <br />
        <img
          src={trash}
          onClick={handleRemoval}
          alt="Eliminar elemento"
          className="trash" 
        />
      </div>
      </StyledCartItem>
    
  );
};

