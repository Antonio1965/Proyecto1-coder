import React, { useState, useEffect } from "react";
import { products } from "../../product-data";
import { ItemList } from "./ItemList";
import { Loader } from "../../Loader/Loader";

export const ItemListContainer = () => {
  const [displayItems, setDisplayItems] = useState([]);

  const itemsArray = products;

  useEffect(() => {
    setDisplayItems([]);

    const getItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(itemsArray);
        }, 2000);
      });
    };

    getItems().then((result) => setDisplayItems(result));
  }, [itemsArray]);

  return !displayItems.length ? (
    <Loader />
  ) : (
    <ItemList displayItems={displayItems} />
  );
};
