import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Product = ({products}) => {
    const params = useParams()
    const currentProduct = products && products.filter(prod=>prod.id === +params.id)[0]
    
    return (
      <>
        <Row>
          <Col>
            <img src={currentProduct.image} alt={currentProduct.name} style={{height: "800px", objectFit: "cover", objectPosition: "center"}}/>
          </Col>
        </Row>
        <Row>
          <p>Product - {currentProduct.name}</p>
          <p>{currentProduct.price}</p>
        </Row>
      </>
    )
};

export default Product;