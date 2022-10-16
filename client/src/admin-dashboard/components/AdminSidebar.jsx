import React from 'react';
import {NavLink} from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div>
            <h2>SideBar</h2>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"products"}>Products</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"best-sellers"}>Best sellers</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"add-new-product"}>Add new product</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"add-new-category"}>Add new Category</NavLink></li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
