import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {registrationAction} from "../../../redux/slices/auth.slice";
import {NavLink} from "react-router-dom";

const Registration = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const error = useSelector(state => state.main.auth.error)

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registrationAction({email, name, password}))
    }

    const handleNameValue = (e)=>{
        setName(e.target.value)
    }

    const handleEmailValue = (e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={'AdminAuth'}>
            <div className="FormWrapper">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" onChange={handleNameValue} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordValue}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {error ? <p>{error}</p> : null}
                <NavLink to={"/admin/login"}>Login</NavLink>
            </div>
        </div>
    );
};

export default Registration
