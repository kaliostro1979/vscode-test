import React, { useContext, useEffect } from 'react'
import { Context } from './../../context/Context';
import { useSelector, useDispatch } from 'react-redux';
import { getBestSellersProductsByCategory } from './../../redux/slices/best_sellers.slice';
import { Row } from 'react-bootstrap';
import BestSellersCard from './BestSellersCard';
import Preloader from './../Preloader';

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
          {activeCategoriesProducts ?
            activeCategoriesProducts.map((product) => {
              return <BestSellersCard product={product} key={product._id}/>
            }) : <Preloader/>}
        </Row>
      </>
    )
};

export default BestSellers;