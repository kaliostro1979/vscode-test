import React, { useContext } from 'react'
import { Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCard} from "../redux/slices/card.slice"
import { Context } from './../context/Context';
import ItemCounter from './item-counter/ItemCounter';

const ProductCard = ({ id, name, price, image, qnty }) => {
  const dispatch = useDispatch()
  const { setShow } = useContext(Context)

  const handleClick = (id) => {
    setShow(true)
    dispatch(addToCard(id))
  }

  return (
    <Col key={id}>
      <div className="ProiductCard mb-4">
        <div className="ProductCradImage">
          <img src={image} alt={name} />
        </div>
        <div className="ProductCradMeta">
          <div className="ProductMetaInfo d-flex align-items-baseline pt-3 pb-4">
            <Link to={`${id}`}>
              <div className="ProductCardTitle me-4">
                <p className="fw-bold mb-0 fs-3">{name}</p>
              </div>
            </Link>
            <div className="ProductCardPrice">
              <p className="fw-bold mb-0">{price}</p>
            </div>
          </div>
          <div className="ProductCardButton">
            <Button
              variant="danger text-align-center"
              style={{ zIndex: 1 }}
              onClick={() => handleClick(id)}
            >
              Add to Card
            </Button>
            <ItemCounter id={id} qnty={qnty} />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard
