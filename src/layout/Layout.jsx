import React from 'react'
import CustomNavBar from '../components/CustomNavBar'
import { Container } from 'react-bootstrap'
import MiniCard from './../components/mini-cart/MiniCard'

export default function Layout({ children }) {
  return (
    <>
      <CustomNavBar />
      <MiniCard />
      <main>
        <div className="Layout">{children}</div>
      </main>
    </>
  )
}
