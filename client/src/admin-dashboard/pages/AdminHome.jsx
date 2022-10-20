import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logoutAction} from "../../redux/slices/auth.slice";
import {Context} from "../../context/Context";
import {Outlet, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import AdminSidebar from "../components/AdminSidebar";
import ProductModal from "../components/modal/ProductModal";


const AdminHome = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoggedIn} = useContext(Context)
    const [name, setName] = useState(null)
    const {activeProduct} = useContext(Context);

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if (token) {
            const user = jwt_decode(token && token)
            setName(user.name)
        }

        if (!isLoggedIn) {
            navigate("login")
        }
    }, [navigate, isLoggedIn])


    return (
        <>
            <Container fluid={true}>
                <Navbar className={"justify-content-between"}>
                    <h3>Welcome {name}</h3>
                    <Button onClick={() => dispatch(logoutAction())}>Logout</Button>
                </Navbar>
                <Row>
                    <Col className={"col-2"}>
                        <AdminSidebar/>
                    </Col>
                    <Col className={"col-10"}>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
            {
                activeProduct ? <ProductModal product={activeProduct}/> : null
            }
        </>
    );
};

export default AdminHome;
