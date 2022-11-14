import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { Button, Form } from "react-bootstrap";
import { userLogin } from "../../redux/slices/user.auth.slice";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {isLoggedIn, setShowModal} = useContext(Context)
    const error = useSelector(state => state.main.auth.error)

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/admin")
        }
    }, [navigate, isLoggedIn])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin({email, password}))
        setEmail("")
        setPassword("")
        setShowModal(false)
    }

    const handleEmailValue = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="UserLogin">
            <div className="FormWrapper">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleEmailValue}
                            value={email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handlePasswordValue}
                            value={password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {error ? <p>{error}</p> : null}
            </div>
        </div>
    )
};

export default LoginForm;
