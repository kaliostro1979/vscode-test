import React, {useContext} from 'react';
import {Context} from "../../../context/Context";
import Modal from 'react-modal';
import {Button, Form, Navbar} from "react-bootstrap";
import { getProducts, removeFromBestSeller } from './../../../redux/slices/products.slice';
import { useDispatch } from 'react-redux';

const ProductModal = ({product}) => {
    const {showModal, setShowModal} = useContext(Context);
    const dispatch = useDispatch()

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

    console.log(product);

    const addToBestsellerHandler = (id, status)=>{
        dispatch(removeFromBestSeller({id, status: true}))
        dispatch(getProducts())
        setShowModal(false);
    }

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
                <Button 
                onClick={()=>addToBestsellerHandler(product._id, product.best_seller)}
                disabled={product && product.best_seller}
                >Add to bestseller</Button>
            </Form>
        </Modal>
    );
};

export default ProductModal;
