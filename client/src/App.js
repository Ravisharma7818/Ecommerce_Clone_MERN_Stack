import './App.css';
import React, { useEffect, useState } from 'react'
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
import Payment from './components/cart/Payment';
import axios from 'axios';
// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import OrderSuccess from './components/cart/OrderSuccess';
import ListOrders from './components/order/ListOrders';
import OrderDetails from './components/order/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/NewProduct';
import { useSelector } from 'react-redux'
import UpdateProduct from './components/admin/UpdateProduct';



// Admin 



function App() {
  const [stripeApiKey, setStripeApiKey] = useState('')
  useEffect(() => {

    store.dispatch(loadUser())
    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();
  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

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

        <Route element={<ProtectedRoute> <ConfirmOrder /> </ProtectedRoute>} path="/order/confirm" />
        <Route element={<ProtectedRoute> <OrderSuccess /> </ProtectedRoute>} path="/success" />
        <Route element={<ProtectedRoute> <ListOrders /> </ProtectedRoute>} path="/orders/me" />
        <Route element={<ProtectedRoute> <OrderDetails /> </ProtectedRoute>} path="/order/:id" />

        {/* Admin */}

        <Route element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} isAdmin={true} path="/dashboard" />
        <Route element={<ProtectedRoute> <ProductsList /> </ProtectedRoute>} isAdmin={true} path="/admin/products" />
        <Route element={<ProtectedRoute> <NewProduct /> </ProtectedRoute>} isAdmin={true} path="/admin/product" />
        <Route element={<ProtectedRoute> <UpdateProduct /> </ProtectedRoute>} isAdmin={true} path="/admin/product/:id" />

        {stripeApiKey && (
          <Route
            path="/payment"
            element={(
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            )}
          />
        )}
      </Routes>
      {!loading && (!isAuthenticated || user.role !== 'admin') && (
        <Footer />
      )}
      {/* <Footer /> */}


    </>
  );
}

export default App; 