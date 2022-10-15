import React, {useContext, useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../../../context/Context";
import {loginAction} from "../../../redux/slices/auth.slice";


const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {isLoggedIn} = useContext(Context)
    const error = useSelector(state => state.main.auth.error)

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/admin")
        }
    }, [navigate, isLoggedIn])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction({email, password}))
    }

    const handleEmailValue = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="AdminAuth">
            <div className="FormWrapper">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleEmailValue}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handlePasswordValue}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <NavLink to={"/admin/registration"}>Register account</NavLink>
                </Form>
                {error ? <p>{error}</p> : null}
            </div>
        </div>
    )
};

export default Login;
