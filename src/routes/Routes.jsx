import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './../pages/Home';
import Store from './../pages/Store';
import Product from './../pages/Product';
import About from './../pages/About';
import Cart from './../pages/Cart';
import PageNotFound from './../pages/PageNotFound';
import Test from './../components/Test';


const RoutesContainer = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={'/test'} element={<Test />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    )
};

export default RoutesContainer