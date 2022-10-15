import React, { useContext, useState } from 'react'
import { Col, Button } from 'react-bootstrap'
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
      <div className="ProiductCard mb-4">x
        <div className="ProductCradImage">
          <img src={image} alt={title} />
        </div>
        <div className="ProductCradMeta">
          <div className="ProductMetaInfo d-flex align-items-baseline pt-3 pb-4">
            <Link
              to={{
                pathname: `/store/${product._id}`,
                search: `?product=${product._id}`,
              }}
            >
              <div className="ProductCardTitle me-4">
                <p className="fw-bold mb-0 fs-3">{title}</p>
              </div>
            </Link>
            <div className="ProductCardPrice">
              <p className="fw-bold mb-0">${price}</p>
            </div>
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
