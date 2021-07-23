import { createContext, useState } from "react";

export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  ///FUNCIONES

  const isntInCart = (receivedItem) =>
    cart.filter((item) => item.id === receivedItem.id).length === 0;

  const addToCart = (receivedItem) => {
    if (isntInCart(receivedItem)) {
      setCart([...cart, receivedItem]);
    } else {
      alert("Ya está en el carrito");
    }
  };

  const removeFromCart = (receivedItem) => {
    let allItemsExceptRemoved = cart.filter(
      (item) => item.id !== receivedItem.id
    );
    setCart(allItemsExceptRemoved);

  };

  const clearCart = () => setCart([]);

  ///RETURN
  return (
    <Context.Provider value={{ addToCart, removeFromCart, clearCart }}>
      {children}
    </Context.Provider>
  );
};
