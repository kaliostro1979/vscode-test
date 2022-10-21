import React from 'react';
import {NavLink} from "react-router-dom";
import { ListGroup } from 'react-bootstrap';

const AdminSidebar = () => {
    return (
        <div>
            <h2>SideBar</h2>
            <ListGroup className={'SideBarList'}>
                <ListGroup.Item><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"products"}>Products</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"best-sellers"}>Best sellers</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"add-new-product"}>Add new product</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink className={({ isActive }) => (isActive ? 'Active' : null)} to={"add-new-category"}>Category</NavLink></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default AdminSidebar;
