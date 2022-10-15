import React, {useContext} from 'react';
import {Context} from "../../../context/Context";
import Modal from 'react-modal';
import {Button, Form, Navbar} from "react-bootstrap";

const ProductModal = ({product}) => {
    const {showModal, setShowModal} = useContext(Context);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: "650px"
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
            <Navbar>
                <Button onClick={closeModal}>close</Button>
            </Navbar>
            <Form>
                <h2>{product && product.price}</h2>
            </Form>
        </Modal>
    );
};

export default ProductModal;
