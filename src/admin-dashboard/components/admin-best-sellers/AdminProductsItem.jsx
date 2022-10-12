import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Context} from "../../../context/Context";

const AdminProductsItem = ({product, button_text, edit}) => {
    const {setShowModal, setActiveProduct} = useContext(Context);
    const handleClick = ()=>{
        setShowModal(true)
        setActiveProduct(product)
    }

    return (
        <Row>
            <Col className={"col-1"}>
                <div className={"Image"}>
                    <img src={product.image} alt={product.title}/>
                </div>
            </Col>
            <Col className={"col-4"}>
                <p className={"Text"}>{product.title}</p>
            </Col>
            <Col className={"col-1"}>
                <p className={"Text"}>{product.price}</p>
            </Col>
            <Col className={"col-1"}>
                <p className={"Text"}>{product.sale_price}</p>
            </Col>
            <Col className={"col-1"}>
                <p className={"Text"}>{product.rate}</p>
            </Col>
            <Col className={"col-1"}>
                <p className={"Text"}>{product.category}</p>
            </Col>
            <Col className={"col-1"}>
                <p className={"Text"}>{product.sale}%</p>
            </Col>
            <Col className={"col-2"}>
                <ul>
                    <li><Button variant={"danger"} className={"mb-3 w-100"}>{button_text}</Button></li>
                    {
                        edit ? <li><Button className={"w-100"} onClick={handleClick}>Edit</Button></li> : null
                    }
                </ul>
            </Col>
        </Row>
    );
};

export default AdminProductsItem;
