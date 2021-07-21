import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../product-data";
import{ Loader } from "../../Loader/Loader";
import {ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  ///ARRAY DE ITEMS
  const itemsArray = products;

  ///GUARDO EN UN ESTADO EL ITEM A MOSTRAR
  const [itemToDisplay, setItemToDisplay] = useState();

  ///OBTENGO LOS PARAMETROS DE LA URL
  const { id: idParams } = useParams();

  ///OBTENGO Y FILTRO EL ARRAY DE ITEMS PARA QUE ME TRAIGA EL QUE TENGO QUE MOSTRAR
  const getSelectedItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsArray.find((item) => item.id.toString() === idParams));
      }, 4000);
    });
  };

  ///HAGO UN USEEFFECT PARA QUE CAMBIE SEGUN CAMBIA EL ITEM
  useEffect(
    () => {
      setItemToDisplay(); ///SACO EL ANTERIOR
      getSelectedItem().then((result) => setItemToDisplay(result));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idParams]
  ); ///CADA VEZ QUE CAMBIA IDPARAMS, SE EJECUTA

  ///FINALMENTE RETORNO ITEMDETAIL
  return !itemToDisplay ? (<Loader/> ) : (<ItemDetail itemToDisplay={itemToDisplay} />);

};

