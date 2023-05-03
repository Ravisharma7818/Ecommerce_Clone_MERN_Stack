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
import ProtectedRoute from './components/routes/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
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
        <Route element={<Cart />} path="/cart" />


        {/* User Routes */}
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<ForgotPassword />} path="/password/forgot" />
        <Route element={<NewPassword />} path="/password/reset/:token" />

        {/* User Profile */}
        <Route element={<ProtectedRoute> <Profile /> </ProtectedRoute>} path="/me" />

        <Route element={<ProtectedRoute> <UpdateProfile /> </ProtectedRoute>} path="/me/update" />


        <Route element={<ProtectedRoute> <UpdatePassword /> </ProtectedRoute>} path="/password/update" />


        {/* Shipping*/}
        <Route element={<ProtectedRoute> <Shipping /> </ProtectedRoute>} path="/shipping" />

        <Route element={<ProtectedRoute> <ConfirmOrder /> </ProtectedRoute>} path="/confirm" />

      </Routes>
      <Footer />


    </>
  );
}

export default App;
