import './App.css';
import React, { useEffect } from 'react'
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import store from './store'
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
function App() {

  useEffect(() => {

    store.dispatch(loadUser())

  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/search/:keyword" />
        <Route element={<ProductDetails />} path="/product/:id" />


        {/* User Routes */}
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />

        {/* User Profile */}
        <Route element={<Profile />} path="/me" />



      </Routes>
      <Footer />


    </>
  );
}

export default App;
