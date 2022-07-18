import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState({
    totalCarPrice: 0,
    productsInCar: [],
  });

  const addCartItem = (item) => {
    const newCart = [...cart.productsInCar, item];
    setCart(() => ({
      productsInCar: newCart,
      totalCarPrice: newCart.reduce((acc, curr) => acc + parseFloat(curr.price), 0),
    }));
  };

  const removeCartItem = (_id) => {
    const newCart = cart.productsInCar.filter((item) => item.id !== _id);
    setCart(() => ({
      productsInCar: newCart,
      totalCarPrice: newCart.reduce((acc, curr) => acc + parseFloat(curr.price), 0),
    }));
  };

  const providerObj = {
    addCartItem,
    removeCartItem,
    cart,
  };

  return (
    <Context.Provider value={ providerObj }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = { children: PropTypes.node.isRequired };
