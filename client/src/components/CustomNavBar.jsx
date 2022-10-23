import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from './../icons/ShoppingCartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from "../context/Context";
import { userLogout } from "../redux/slices/user.auth.slice";

const CustomNavBar = () => {
    const dispatch = useDispatch()
    const cardItems = useSelector(
      (state) => state.main.miniCartProducts.addedPorducts
    )

    const [itemsCount, setItemsCount] = useState(null)

    const { setShow, user } = useContext(Context)
    const {setShowModal} = useContext(Context);

    useEffect(() => {
      setItemsCount(
        cardItems &&
        cardItems.reduce((prev, current) => {
            return prev + current.qnty
          }, 0)
      )
    }, [cardItems])

    return (
      <Navbar fixed={'top'} className={'bg-light'}>
        <Container>
          <div className="NavBarContainer d-flex justify-content-between align-items-center w-100">
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
              <div className="NavBarIcons">
                  <Button
                      className="NavBarBagIcon d-flex justify-content-center align-items-center"
                      variant="outline-primary"
                      onClick={() => setShow(true)}
                  >
                      <div className="NavBarBagIcon">
                          <div className="CardItemsCount">{itemsCount || 0}</div>
                          <ShoppingCartIcon />
                      </div>
                  </Button>
                  {
                      user ? <div>
                          <p>{user.name}</p>
                          <Button className={"NavBarLoginIcon"} onClick={()=>dispatch(userLogout())}>Logout</Button>
                      </div> : <Button className={"NavBarLoginIcon"} onClick={()=>setShowModal(true)}>
                          Login
                      </Button>
                  }
              </div>
          </div>
        </Container>
      </Navbar>
    )
}

export default CustomNavBar
