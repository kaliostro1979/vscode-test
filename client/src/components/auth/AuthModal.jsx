import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { Context } from "../../context/Context";
import { Col, Form, ListGroup, ModalBody, ModalHeader, Row } from "react-bootstrap";
import CloseIcon from "../../icons/CloseIcon";
import Registration from "../../admin-dashboard/pages/auth/Registration";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const AuthModal = () => {
    const {showModal, setShowModal} = useContext(Context);
    const [login, setLogin] = useState(true)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: "650px",
            minHeight: "386px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
    };

    function closeModal() {
        setShowModal(false);
    }

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <div onClick={closeModal} className={"ModalNavbarClose"}>
                <CloseIcon/>
            </div>
            <Row>
                <Col>
                    {
                        login ? <h2>Login</h2> : <h2>Registration</h2>
                    }
                </Col>
            </Row>
            <ModalHeader className={"AuthModalHeader w-100 mt-4 mb-5"}>
                <Row className={"d-flex w-100"}>
                    <Col className={"col-2 TabButtons border-bottom pt-2 pb-3 me-3"} onClick={()=>setLogin(true)}>Login</Col>
                    <Col className={"col-2 TabButtons border-bottom pt-2 pb-3"} onClick={()=>setLogin(false)}>Registration</Col>
                </Row>
            </ModalHeader>
            <Row>
                <Col>
                    <ModalBody>
                        {
                            login ? <LoginForm/> : <RegistrationForm/>
                        }
                    </ModalBody>
                </Col>
            </Row>
            <Form>

            </Form>
        </Modal>
    );
};

export default AuthModal;