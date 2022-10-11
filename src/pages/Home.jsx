import React from 'react'
import HeroBanner from './../components/hero-banner/HeroBanner'
import Categories from './../components/categories/Categories'
import { Container, Row, Col } from 'react-bootstrap'
import BestSellers from './../components/best-sellers/BestSellers';

const Home = () => {
  return (
    <div className="Home">
      <HeroBanner page={'home'} />
      <Container>
        <div className='BestSellersWrapper'>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center text-uppercase">Best Sellers</h2>
            </Col>
          </Row>
          <Categories />
          {/* <BestSellers /> */}
        </div>
      </Container>
    </div>
  )
}

export default Home
