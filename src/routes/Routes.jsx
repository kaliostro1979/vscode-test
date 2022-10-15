import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Store from './../pages/Store';
import Product from './../pages/Product';
import About from './../pages/About';
import Cart from './../pages/Cart';
import PageNotFound from './../pages/PageNotFound';
import Test from './../components/Test';
import Login from "../admin-dashboard/pages/auth/Login";
import Registration from "../admin-dashboard/pages/auth/Registration";
import AdminHome from "../admin-dashboard/pages/AdminHome";
import AdminBestSellers from "../admin-dashboard/components/admin-best-sellers/AdminBestSellers";
import AdminProducts from "../admin-dashboard/components/AdminProducts";
import AddNewProductForm from './../admin-dashboard/components/add-new-product/AddNewProductForm';



const RoutesContainer = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/store"} element={<Store/>}/>
            <Route path={"/admin"}>
                <Route path={''} element={<AdminHome/>}>
                    <Route index element={<Navigate to={"products"} replace/>}/>
                    <Route exact path={"products"} element={<AdminProducts/>}/>
                    <Route exact path={"best-sellers"} element={<AdminBestSellers/>}/>
                    <Route exact path={"add-new-product"} element={<AddNewProductForm/>}/>
                </Route>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"registration"} element={<Registration/>}/>
            </Route>
            <Route path={"/store/:id"} element={<Product/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={'/test'} element={<Test/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
};

export default RoutesContainer
