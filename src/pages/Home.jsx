import React from 'react'
import HeroBanner from './../components/hero-banner/HeroBanner'
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='Home'>
      <HeroBanner page={"home"}/>
      <Container>
        
      </Container>
    </div>
  )
}

export default Home
