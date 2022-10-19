import React, { useContext, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import {Col, Row} from 'react-bootstrap';
import BestSellersCard from './BestSellersCard';
import {getBestSellersProductsByCategory} from "../../redux/slices/best_sellers.slice";
import {Context} from "../../context/Context";

const BestSellers = () => {
    const { activeCategory } = useContext(Context)
    const dispatch = useDispatch()
    const activeCategoriesProducts = useSelector(state=>state.main.best_sellers.products)

    useEffect(() => {
      dispatch(getBestSellersProductsByCategory(activeCategory))
    }, [dispatch, activeCategory])

    return (
      <>
        <Row className="BestSellers" lg={4}>
          {activeCategoriesProducts.length ?
            activeCategoriesProducts.map((product) => {
              return <BestSellersCard product={product} key={product._id}/>
            }) : <Col className={"NoProducts"}>
                  <p>There are no any product in this category</p>
              </Col>}
        </Row>
      </>
    )
};

export default BestSellers;
