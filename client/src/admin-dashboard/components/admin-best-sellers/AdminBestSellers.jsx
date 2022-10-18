import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {addRemoveFromBestSeller, getBestSellersProductsByCategory} from "../../../redux/slices/best_sellers.slice";
import AdminProductsItem from "./AdminProductsItem";
import {Context} from "../../../context/Context";

const AdminBestSellers = () => {
    const dispatch = useDispatch()
    const bestSellerProducts = useSelector(state=>state.main.best_sellers.products)
    const {setActiveProduct} = useContext(Context);

    useEffect(() => {
        dispatch(getBestSellersProductsByCategory())
    }, [dispatch])

    const removeFromBestsellerHandler = (arg)=>{
        dispatch(addRemoveFromBestSeller({id: arg.id, status: arg.status}))
        dispatch(getBestSellersProductsByCategory())
      }

    return (
        <div className={"AdminBestSellers"}>
            <h1>Best sellers</h1>
            <ListGroup className={"AdminBestSellersList"}>
                {
                    bestSellerProducts && bestSellerProducts.map((product)=>{
                        return (
                            <ListGroup.Item key={product._id} onClick={()=>setActiveProduct(product)} className={"AdminProductsListItem"}>
                                <AdminProductsItem
                                product={product}
                                button_text={"Remove from best sellers"}
                                edit={false}
                                callBack={removeFromBestsellerHandler}
                                />
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    );
};

export default AdminBestSellers;
