import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../../context/Context";
import Modal from 'react-modal';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {addRemoveFromBestSeller, getProducts} from "../../../redux/slices/products.slice";
import {getCategories} from "../../../redux/slices/catyegory.slice";
import CloseIcon from "../../../icons/CloseIcon";
import {editProduct} from "../../../redux/slices/editProduct.slice";

const ProductModal = ({product}) => {

    const [price, setPrice] = useState(product.price)
    const [salePrice, setSalePrice] = useState(product.sale_price)
    const [sale, setSale] = useState(product.sale)
    const [description, setDescription] = useState(product.description)
    const [category, setCategory] = useState(product.category)

    const formRef= useRef()
    const {showModal, setShowModal} = useContext(Context);
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.main.categories.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

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

    const addToBestsellerHandler = (id, status)=>{
        dispatch(addRemoveFromBestSeller({id, status: true}))
        dispatch(getProducts())
        setShowModal(false);
    }

    function closeModal() {
        setShowModal(false);
    }

    const handleChange = (event)=>{

        switch (event.target.name){
            case event.target.name = 'category':
                setCategory(event.target.value)
                break
            case event.target.name = 'product_price':
                setPrice(event.target.value)
                break
            case event.target.name = 'product_sale_price':
                setSalePrice(event.target.value)
                break
            case event.target.name = 'sale':
                setSale(event.target.value)
                break
            case event.target.name = 'description':
                setDescription(event.target.value)
                break
            default:
                break
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(editProduct({...product, price, sale_price: salePrice, category: category, sale, description}))
        cancelEdit()
    }
    const cancelEdit = ()=>{
        setPrice(product.price)
        setSalePrice(product.sale_price)
        setSale(product.sale)
        setDescription(product.description)
        setCategory(product.category)
        closeModal()
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
            <Form onSubmit={handleSubmit} className={"ModalForm"} ref={formRef}>
                <Row>
                    <Col className={"mb-5"}>
                        <h4>{product && product.title}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className={"col-3"}>
                        <div className={"ModalProductImage"}>
                            <img src={`${process.env.REACT_APP_IMAGE_PATH}` + product.image} alt={product.title}/>
                        </div>
                    </Col>
                    <Col className={"col-9"}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Product regular price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={'product_price'}
                                        value={price ? price : ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Product sale price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={'product_sale_price'}
                                        value={salePrice ? salePrice : ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Product sale</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={'sale'}
                                        value={sale ? sale : ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="productDescription">
                                    <Form.Label>Product description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name={'description'}
                                        value={description ? description : ""}
                                        required={true}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`edit-best_seller`}
                                        onChange={()=>addToBestsellerHandler(product._id, product.best_seller)}
                                        checked={product && product.best_seller}
                                        disabled={product && product.best_seller}
                                        label={`Best Seller`}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Product category</Form.Label>
                                <Form.Select
                                    aria-label="Category select"
                                    onChange={handleChange}
                                    name={'category'}
                                    style={{ textTransform: 'capitalize' }}
                                    value={product.category}
                                >
                                    {categories.map((category) => {
                                        return (
                                            <option value={category.name} key={category._id}>
                                                {category.name}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type={"submit"} className={"mx-3"}>Save changes</Button>
                        <Button variant={"danger"} onClick={cancelEdit}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default ProductModal;
