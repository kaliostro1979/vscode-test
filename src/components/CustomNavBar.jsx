import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from './../icons/ShoppingCartIcon';
import { useSelector } from 'react-redux';
import { Context } from "../context/Context";

const CustomNavBar = () => {
    const itemsInCardCount = useSelector(
        (state) => state.main.cart.cardItemsCount
    )

    const { setShow } = useContext(Context)

    return (
        <Navbar fixed={"top"} className={"bg-light"}>
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
                    <Button
                        className="NavBarBagIcon d-flex justify-content-center align-items-center"
                        variant="outline-primary"
                        onClick={()=>setShow(true)}
                    >
                        <div className="NavBarBagIcon">
                            <div className="CardItemsCount">{itemsInCardCount}</div>
                            <ShoppingCartIcon/>
                        </div>
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default CustomNavBar
