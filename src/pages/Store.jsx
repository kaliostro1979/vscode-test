import React, { useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import ProductCard from './../components/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import Preloader from './../components/Preloader'
import { getProducts } from '../redux/slices/products.slice'

const Store = () => {
  const products = useSelector((state) => state.main.shoppingCart.products)
  const isLoading = useSelector((state) => state.main.shoppingCart.isLoading)
  const error = useSelector((state) => state.main.shoppingCart.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Container>
      <Row md={2} xs={1} lg={3}>
        {error ? <p>{error}</p> : null}
        {isLoading ? (
          <Preloader />
        ) : (
          products &&
          products.map((product) => {
            return (
              <ProductCard {...product} product={product} key={product._id} />
            )
          })
        )}
      </Row>
    </Container>
  )
}

export default Store
