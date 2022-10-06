import React from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from './../icons/ShoppingCartIcon';
import { useSelector } from 'react-redux';

const CustomNavBar = () => {
  const itemsInCardCount = useSelector(
    (state) => state.main.cart.cardItemsCount
  )

  return (
    <div className="NavBarContainer d-flex justify-content-between align-items-center mb-4">
      <Nav>
        <Nav.Link as={NavLink} to={'/'}>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to={'/store'}>
          Store
        </Nav.Link>
        <Nav.Link as={NavLink} to={'/about'}>
          About
        </Nav.Link>
      </Nav>

      <Button
        className="NavBarBagIcon d-flex justify-content-center align-items-center"
        variant="outline-primary"
      >
        <div className="NavBarBagIcon">
          <div className="CardItemsCount">{itemsInCardCount}</div>
          <ShoppingCartIcon />
        </div>
      </Button>
    </div>
  )
}

export default CustomNavBar
