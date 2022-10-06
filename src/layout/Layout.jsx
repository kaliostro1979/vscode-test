import React from 'react'
import CustomNavBar from '../components/CustomNavBar'
import { Container } from 'react-bootstrap'
import MiniCard from '../components/MiniCard/MiniCard';

export default function Layout({ children }) {
  return (
    <Container>
      <div className="Layout">
        <CustomNavBar/>
        <MiniCard />
        {children}
      </div>
    </Container>
  )
}
