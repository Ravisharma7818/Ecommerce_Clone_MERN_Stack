import './App.css';
import React from 'react'

import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
