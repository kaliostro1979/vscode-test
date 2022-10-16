import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/slices/products.slice";
import AdminProductsItem from "./admin-best-sellers/AdminProductsItem";
import {ListGroup} from "react-bootstrap";

const AdminProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.main.shoppingCart.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    return (
        <div>
            <h1>Products</h1>
            <ListGroup className={"AdminProductsList"}>
                {
                    products && products.map((product) => {
                        return (
                            <ListGroup.Item className={"AdminProductsListItem"} key={product._id}>
                                <AdminProductsItem product={product} button_text={"Remove product"} edit={true}/>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>

        </div>
    );
};

export default AdminProducts;
