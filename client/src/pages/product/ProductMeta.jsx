import React, {useState} from 'react';
import {currencyFormatter} from "../../utils/helpers";
import ItemCounter from "../../components/item-counter/ItemCounter";
import {Button} from "react-bootstrap";

const ProductMeta = ({product}) => {
    const [productQuantity, setProductQuantity] = useState(0)

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{currencyFormatter.format(product.price)}</p>
            <p>{currencyFormatter.format(product.sale_price)}</p>
            <p>{product.sale}</p>
            <p>{product.category}</p>
            <ItemCounter product={product} productQuantity={productQuantity} setProductQuantity={setProductQuantity}/>
            <Button>Add to cart</Button>
        </div>
    );
};

export default ProductMeta;
