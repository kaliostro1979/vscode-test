import React, {useContext, useEffect, useRef} from 'react';
import {Context} from "../../../context/Context";
import Modal from 'react-modal';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {editProduct, getProducts} from "../../../redux/slices/products.slice";
import {getCategories} from "../../../redux/slices/catyegory.slice";
import CloseIcon from "../../../icons/CloseIcon";

const ProductModal = ({product}) => {

    const {
        price,
        setPrice,
        salePrice,
        setSalePrice,
        sale,
        setSale,
        description,
        setDescription,
        category,
        setCategory,
        bestSeller,
        setBestSeller
    } = useContext(Context)

    const formRef = useRef()
    const salePriceRef = useRef()
    const saleRef = useRef()
    const {showModal, setShowModal} = useContext(Context);
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.main.categories.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        setPrice(product.price || "")
        setSalePrice(product.sale_price || "")
        setSale(product.sale || "")
        setDescription(product.description || "")
        setCategory(product.category || "")
        setBestSeller(product.best_seller)
    }, [product, setBestSeller, setCategory, setDescription, setPrice, setSale, setSalePrice])

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

    const handleChange = (event) => {

        switch (event.target.name) {
            case event.target.name = 'category':
                setCategory(event.target.value)
                break
            case event.target.name = 'product_price':
                setPrice(event.target.value)
                break
            case event.target.name = 'sale':
                setSale(event.target.value)
                salePriceRef.current.value = saleRef.current.value > 0 || saleRef.current.value !== "" ? Math.floor(price - price * event.target.value / 100).toFixed(2) : ""
                setSalePrice(salePriceRef.current.value)
                break
            case event.target.name = 'description':
                setDescription(event.target.value)
                break
            case event.target.name = 'best_seller':
                setBestSeller(true)
                break
            default:
                break
        }
    }
    console.log(product)
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(editProduct({
            ...product,
            price,
            sale_price: salePriceRef.current.value,
            category: category,
            sale,
            description,
            best_seller: bestSeller
        }))
        dispatch(getProducts())
        cancelEdit()
    }
    const cancelEdit = () => {
        setPrice(product.price)
        setSalePrice(product.sale_price)
        setSale(product.sale || "")
        setDescription(product.description)
        setCategory(product.category)
        setBestSeller(false)
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
                            <img src={`${process.env.REACT_APP_IMAGE_PATH}` + product.image[0].filename}
                                 alt={product.title}/>
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
                                        disabled={true}
                                        value={salePrice || ""}
                                        ref={salePriceRef}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Product sale</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={'sale'}
                                        value={sale}
                                        onChange={handleChange}
                                        ref={saleRef}
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
                                        name={'best_seller'}
                                        onChange={handleChange}
                                        checked={bestSeller}
                                        disabled={bestSeller}
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
                                    style={{textTransform: 'capitalize'}}
                                    value={category ? category : 'all'}
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
