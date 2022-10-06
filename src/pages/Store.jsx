import React from 'react';
import { Row } from 'react-bootstrap'
import items from "../data/items.json"
import ProductCard from './../components/ProductCard';

const Store = () => {
    
    return (
        <Row md={2} xs={1} lg={3}>
            {
                items.products.map(product=>{
                    return (
                      <ProductCard
                        {...product}
                        product={product}
                        key={product.id}
                      />
                    )
                })
            }
        </Row>
    );
};

export default Store;