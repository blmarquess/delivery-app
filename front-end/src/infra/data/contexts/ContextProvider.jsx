import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './Context';
import formateProducts from '../../../main/useCases/formateProducts';

export default function ProductsContextProvider({ children }) {
  const [cart, setCart] = useState({
    totalCarPrice: 0,
    productsInCar: [],
  });
  const [listOfOrders, setListOfOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(0);

  const updateTotalPrices = () => {
    setCart((state) => ({
      ...state,
      totalCarPrice: state.productsInCar
        .reduce((acc, crv) => acc + (Number(crv.price) * Number(crv.qtd)), 0),
    }));
  };

  const updateProductsState = (key, data) => {
    setCart((state) => ({ ...state, [key]: data }));
    updateTotalPrices();
  };

  const handleChangeInputQtd = (id, _qtd) => {
    const newCartQtd = cart.productsInCar.map((prod) => {
      if (prod.id === Number(id)) {
        return { ...prod, qtd: Number(_qtd), subTotal: Number(_qtd) * prod.price };
      } return prod;
    });
    return updateProductsState('productsInCar', newCartQtd);
  };

  const addOneItemOnCart = (id) => {
    const newCartQtd = cart.productsInCar.map((prod) => {
      if (prod.id === Number(id)) {
        const newQtd = Number(prod.qtd) + 1;
        return { ...prod, qtd: newQtd, subTotal: newQtd * prod.price };
      } return prod;
    });
    return updateProductsState('productsInCar', newCartQtd);
  };

  const removeOneItemOnCart = (id) => {
    const newCartQtd = cart.productsInCar.map((prod) => {
      if (prod.id === Number(id)) {
        const newQtd = Number(prod.qtd) - 1;
        return { ...prod, qtd: newQtd, subTotal: newQtd * prod.price };
      } return prod;
    });
    return updateProductsState('productsInCar', newCartQtd);
  };

  const removeProduct = (id) => {
    const newCartQtd = cart.productsInCar.map((prod) => {
      if (prod.id === Number(id)) {
        const newQtd = 0;
        return { ...prod, qtd: newQtd, subTotal: newQtd * prod.price };
      } return prod;
    });
    return updateProductsState('productsInCar', newCartQtd);
  };

  const addProducts = (products) => setCart((prev) => ({
    ...prev,
    productsInCar: products
      .map((product) => formateProducts(product)) }));

  const providerObj = {
    addProducts,
    cart,
    listOfOrders,
    setListOfOrders,
    handleChangeInputQtd,
    addOneItemOnCart,
    removeOneItemOnCart,
    selectedOrder,
    setSelectedOrder,
    setCart,
    removeProduct,
  };

  return (
    <ProductsContext.Provider value={ providerObj }>
      { children }
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = { children: PropTypes.node.isRequired };
