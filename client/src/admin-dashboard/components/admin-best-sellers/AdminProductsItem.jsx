import React, { useContext } from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {Context} from "../../../context/Context";

const AdminProductsItem = ({product, button_text, edit, callBack}) => {
    const {setShowModal, setActiveProduct} = useContext(Context);
    const handleClick = ()=>{
        setShowModal(true)
        setActiveProduct(product)
    }

    return (
      <Row>
        <Col className={'col-1'}>
          <div className={'Image'}>
            <img
              src={
                product.image && !product.image.includes('https')
                  ? `${process.env.REACT_APP_IMAGE_PATH}` + product.image
                  : product.image
              }
              alt={product.title}
            />
          </div>
        </Col>
        {product.title ? (
          <Col>
            <p className={'Text'}>{product.title}</p>
          </Col>
        ) : null}
        {product.price ? (
          <Col>
            <p className={'Text'}>{product.price}</p>
          </Col>
        ) : null}

          <Col>
              {product.sale_price ? (
                  <p className={'Text'}>{product.sale_price}</p>
              ) : <p className={'Text'}>-</p>}
          </Col>
          <Col>
              {product.rate ? (
                  <p className={'Text'}>{product.rate}</p>
              ) : <p className={'Text'}>-</p>}
          </Col>
          <Col>
              {product.category ? (
                  <p className={'Text'}>{product.category}</p>
              ) : null}
          </Col>
          <Col>
              {product.sale ? (
                  <p className={'Text'}>{product.sale}%</p>
              ) : <p className={'Text'}>-</p>}
          </Col>


        <Col className={'col-2'}>
          <ul>
            <li>
              <Button variant={'danger'} className={'mb-3 w-100'} onClick={()=>callBack({id: product._id, status: false})}>
                {button_text}
              </Button>
            </li>
            {edit ? (
              <li>
                <Button className={'w-100'} onClick={handleClick}>
                  Edit
                </Button>
              </li>
            ) : null}
          </ul>
        </Col>
      </Row>
    )
};

export default AdminProductsItem;
