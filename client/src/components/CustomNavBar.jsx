import React, { useContext, useEffect, useState } from 'react'
import {Button, Container, ListGroup, Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from './../icons/ShoppingCartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from "../context/Context";
import {checkUserIsLoggedIn, userLogout} from "../redux/slices/user.auth.slice";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const CustomNavBar = () => {
    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.main.miniCartProducts.addedPorducts)
    const loggedInUser = useSelector(state => state.main.user.loggedInUser)

    const [itemsCount, setItemsCount] = useState(null)

    const { setShow, showDropDown, setShowDropDown, setShowModal } = useContext(Context)

    useEffect(() => {
      setItemsCount(
        cardItems &&
        cardItems.reduce((prev, current) => {
            return prev + current.qnty
          }, 0)
      )
    }, [cardItems])

    useEffect(()=>{
        dispatch(checkUserIsLoggedIn())
    }, [dispatch])

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
                      loggedInUser ? <div className={"AuthBlock"}>
                          <div className={"AuthBlockDropDown"}>
                              <div className={"AuthBlockIcon"} onClick={()=>setShowDropDown((prev)=>!prev)}>
                                  <ChevronDownIcon/>
                              </div>
                              <p className={"AuthBlockName"}>{loggedInUser.name}</p>
                              <div className={showDropDown ? "AuthBlockDropDownInner Open" : "AuthBlockDropDownInner"}>
                                  <ListGroup className={"AuthBlockDropDownList"}>
                                      <ListGroup.Item>
                                          <NavLink to={"/cart"}>Shopping cart</NavLink>
                                      </ListGroup.Item>
                                      <ListGroup.Item>
                                          <NavLink to={`/user/${loggedInUser.iat}`}>Account page</NavLink>
                                      </ListGroup.Item>
                                  </ListGroup>
                              </div>
                          </div>
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
