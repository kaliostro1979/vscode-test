import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MiniCardItem from './MiniCardItem'
import CloseIcon from './../../icons/CloseIcon'
import { Context } from './../../context/Context'
import { Button } from 'react-bootstrap'
import { getMiniCartProducts } from '../../redux/slices/miniCart.slice'
import { removeAllProductsFromCart } from '../../redux/slices/cartActions.slice'
import { NavLink } from 'react-router-dom';


const MiniCard = () => {
    const dispatch = useDispatch()
    const cardItems = useSelector(
      (state) => state.main.miniCartProducts.addedPorducts
    )
    const { show, setShow } = useContext(Context)

    const handleRemoveAllItems = () => {
        dispatch(removeAllProductsFromCart())
        dispatch(getMiniCartProducts())
    }

    useEffect(() => {
      dispatch(getMiniCartProducts())
    }, [dispatch])

    

    return (
      <div className={!show ? 'MiniCard Hide' : 'MiniCard'}>
        <div className="MiniCardClose" onClick={() => setShow(false)}>
          <CloseIcon />
        </div>

        <div className={'MiniCardInner'}>
          {cardItems && cardItems.length ? (
            cardItems.map((item) => {
              return <MiniCardItem {...item} key={item.id * Math.random()} />
            })
          ) : (
            <div className="MiniCardNoItems">
              <p>You have not any items in your card</p>
            </div>
          )}
        </div>
        <div className={'MiniCardFooter'}>
          {cardItems && cardItems.length ? (
            <Button
              className="MiniCardClearButton"
              variant="danger"
              onClick={handleRemoveAllItems}
            >
              Remove All Items
            </Button>
          ) : null}
          <NavLink
            to={'/cart'}
            variant={'danger'}
            className={'btn btn-danger text-align-center mx-3'}
          >
            Open Cart
          </NavLink>
        </div>
      </div>
    )
}

export default MiniCard
