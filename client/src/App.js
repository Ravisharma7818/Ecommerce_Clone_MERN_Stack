import './App.css';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
// import { useSelector } from "react-redux";
// import { getProducts } from './actions/productActions';

function App() {
  // const { products } = useSelector(state => state.products)

  // const dispatch = useDispatch();
  // // Get All Products
  // useEffect(() => {
  //   dispatch(getProducts());


  // }, [dispatch])
  // console.log(products);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/search/:keyword" />
        <Route element={<ProductDetails />} path="/product/:id" />


        {/* User Routes */}
        <Route element={<Login />} path="/login" />

      </Routes>
      <Footer />


    </>
  );
}

export default App;
