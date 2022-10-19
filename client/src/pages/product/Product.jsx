import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Row, Col, Container, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ImageThumbsItem from "./ImageThumbsItem";
import {getSingleProduct} from "../../redux/slices/products.slice";
import Preloader from "../../components/Preloader";
import Slider from "../../components/UI/swiper/Slider";
import ProductMainImage from "./ProductMainImage";
import ProductMeta from "./ProductMeta";

const Product = () => {
    const params = useParams()
    const product = useSelector((state) => state.main.shoppingCart.product)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getSingleProduct(params.id))
    }, [dispatch, params])

    return (
        <>
            {
                product ? <Container>
                    {
                        Object.keys(product).length <= 0  ? <Preloader/> : <Row>
                            <Col className={"col-4"}>
                                <ProductMainImage image={product.image[0]}/>
                                <div className={"ProductImagesThumbs"}>
                                    <Slider data={product.image && product.image} Component={ImageThumbsItem}/>
                                </div>
                            </Col>
                            <Col className={"col-7 offset-1"}>
                                <ProductMeta product={product}/>
                            </Col>
                        </Row>
                    }
                </Container> : <Container>
                    <Row>
                        <Col>
                            <div>
                                <h2>There are no such product</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </>

    )
};

export default Product;
