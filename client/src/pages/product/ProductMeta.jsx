import React, { useContext, useState } from 'react';
import {currencyFormatter} from "../../utils/helpers";
import ItemCounter from "../../components/item-counter/ItemCounter";
import {Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToShoppingCart } from "../../redux/slices/cartActions.slice";
import { getMiniCartProducts } from "../../redux/slices/miniCart.slice";
import { Context } from "../../context/Context";

const ProductMeta = ({product}) => {
    const [productQuantity, setProductQuantity] = useState(1)
    const dispatch = useDispatch()
    const { setShow } = useContext(Context)

    const addToCart = (id)=>{
        setShow(true)
        dispatch(addToShoppingCart([{...product, qnty: productQuantity}, productQuantity]))
        dispatch(getMiniCartProducts())
    }

    return (
        <div className={"ProductMetaWrapper"}>
            <h2 className={"ProductMetaTitle"}>{product.title}</h2>
            <div className={"ProductMetaPriceWrapper"}>
                <p className={product.sale_price ? "ProductMetaPrice HasSale" : "ProductMetaPrice"}>{currencyFormatter.format(product.price)}</p>
                {
                    product.sale_price ? <p className={"ProductMetaSalePrice"}>{currencyFormatter.format(product.sale_price)}</p> : null
                }
                {
                    product.sale ? <p className={"ProductMetaSale"}>{product.sale}% Off</p> : null
                }
            </div>

            <p className={"ProductMetaCategory"}>{product.category.split("-").join(" ")}</p>
            <ItemCounter product={product} productQuantity={productQuantity} setProductQuantity={setProductQuantity} className={"ProductPageCounter"}/>
            <Button className={"ProductMetaButton"} onClick={()=>addToCart(product._id)}>Add to cart</Button>
        </div>
    );
};

export default ProductMeta;
