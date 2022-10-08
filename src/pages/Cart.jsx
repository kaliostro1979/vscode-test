import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMiniCartProducts } from '../redux/slices/miniCart.slice'
import { Row, Col, Button } from 'react-bootstrap'
import MiniCardItem from '../components/mini-cart/MiniCardItem'

const Cart = () => {
  const miniCartitems = useSelector(
    (state) => state.main.miniCartProducts.addedPorducts
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMiniCartProducts())
  }, [dispatch])

  return (
    <>
      <Row>
        <Col>
          <h2 className="mb-4 text-center">Your shopping cart</h2>
        </Col>
      </Row>
      {miniCartitems && miniCartitems.length ? (
        <div>
          {miniCartitems.map((product) => {
            return (
              <Row key={product.id * Math.random()}>
                <Col>
                  <MiniCardItem {...product} />
                </Col>
              </Row>
            )
          })}
          <Row>
            <Col className="text-end">
              <Button variant="danger">Buy now</Button>
            </Col>
          </Row>
        </div>
      ) : (
        <Row>
          <Col className="text-center">
            <h4>Your shopping cart is empty</h4>
          </Col>
        </Row>
      )}
    </>
  )
}

export default Cart
