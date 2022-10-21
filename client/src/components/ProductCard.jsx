import React, { useContext, useState } from 'react'
import {Col, Button, Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemCounter from './item-counter/ItemCounter'
import { addToShoppingCart } from '../redux/slices/cartActions.slice'
import { getMiniCartProducts } from '../redux/slices/miniCart.slice'
import { Context } from "../context/Context";

const ProductCard = ({ _id, title, price, sale_price, sale, image, qnty, product }) => {
  const [ productQuantity, setProductQuantity ] = useState(1)

  const dispatch = useDispatch()
  const { setShow } = useContext(Context)

  const handleClick = (product) => {
    setShow(true)
    dispatch(addToShoppingCart([{...product, qnty: productQuantity}, productQuantity]))
    dispatch(getMiniCartProducts())
  }

  return (
    <Col key={_id}>
      <div className="ProiductCard mb-5">
        <div className={'ProductCradImage'}>
          {
            image[0] ? <img
                src={`${process.env.REACT_APP_IMAGE_PATH}` + image[0].filename}
                alt={product.title}
                className={"ImageOne"}
            /> : null
          }
          {
            image[1] ?  <img
                src={`${process.env.REACT_APP_IMAGE_PATH}` + image[1].filename}
                alt={product.title}
                className={"ImageTwo"}
            /> : null
          }
        </div>
        <div className="ProductCradMeta">
          <div className="ProductMetaInfo pt-3 pb-4">
            <Link
            className='ProductMetaInfoLink'
              to={{
                pathname: `/store/${product._id}`,
                search: `?product=${product._id}`,
              }}
            >
              <div className="ProductCardTitle me-4" title={title}>
                <p className="fw-bold mb-0 fs-3">{title}</p>
              </div>
            </Link>
            <Row className={"align-items-center"}>
              <Col className={"col-2"}>
                <div className={sale_price ? "ProductCardPrice HasSale me-3" : "ProductCardPrice me-3"}>
                  <p className="fw-bold mb-0">${price}</p>
                </div>
              </Col>
              <Col className={"col-2"}>
                {
                  sale_price ? <div className="ProductCardSalePrice">
                    <p className="fw-bold mb-0">${sale_price}</p>
                  </div> : null
                }
              </Col>
            </Row>
          </div>
          <div className="ProductCardButton">
            <Button
              variant="danger text-align-center"
              style={{ zIndex: 1 }}
              onClick={() => handleClick(product)}
            >
              Add to Card
            </Button>
            <ItemCounter
              product={product}
              setProductQuantity={setProductQuantity}
              productQuantity={productQuantity}
            />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard
