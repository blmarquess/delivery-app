import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [totalCarPrice, setTotalCarPrice] = useState(0);
  const [productsInCar, setProductsInCar] = useState([]);

  const providerObj = {
    totalCarPrice,
    productsInCar,
    setTotalCarPrice,
    setProductsInCar,
  };

  return (
    <Context.Provider value={ providerObj }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
