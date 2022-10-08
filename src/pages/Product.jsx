import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from '../redux/slices/products.slice';

const Product = () => {
    const params = useParams()
    
    const product = useSelector((state) => state.main.shoppingCart.product)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getSingleProduct(params.id))
    }, [dispatch, params])
    
    return (
      <>
        <Row>
          <Col>
            <img src={product.image} alt={product.name} style={{height: "800px", objectFit: "cover", objectPosition: "center"}}/>
          </Col>
        </Row>
        <Row>
          <p>Product - {product.name}</p>
          <p>{product.price}</p>
        </Row>
      </>
    )
};

export default Product;