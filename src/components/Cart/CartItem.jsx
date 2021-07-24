import React from "react";
// import trash from "../../../assets/trash.svg";

export const CartItem = ({ item, removeFromCart }) => {
  const handleRemoval = () => removeFromCart(item);

  return (
    <div className='cart-item'>
      <img src={item.img} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <span>
          {item.quantity} * ${item.price} = ${item.quantity * item.price}
        </span>
        <br />
        {/* <img
          src={trash}
          onClick={handleRemoval}
          alt="Eliminar elemento"
          className="trash" */}
        {/* /> */}
      </div>
      </div>
    
  );
};

