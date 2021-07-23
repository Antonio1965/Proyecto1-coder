import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../product-data";
import{ Loader } from "../../Loader/Loader";
import {ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
 
  const itemsArray = products;

  const [itemToDisplay, setItemToDisplay] = useState();

  const { id: idParams } = useParams();

  const getSelectedItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsArray.find((item) => item.id.toString() === idParams));
      }, 4000);
    });
  };

  useEffect(
    () => {
      setItemToDisplay(); 
      getSelectedItem().then((result) => setItemToDisplay(result));
    },

    [idParams]
  );

  return !itemToDisplay ? (<Loader/> ) : (<ItemDetail itemToDisplay={itemToDisplay} />);

};

