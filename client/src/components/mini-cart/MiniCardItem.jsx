import React from 'react'
import RemoveIcon from './../../icons/RemoveIcon'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../redux/slices/cartActions.slice'
import { getMiniCartProducts } from '../../redux/slices/miniCart.slice'

const MiniCardItem = ({ _id, name, image, price, qnty }) => {
    const dispatch = useDispatch()


    const handleRemoveItem = (id) => {
        dispatch(removeProductFromCart(id))
        dispatch(getMiniCartProducts())
    }

    return (
        <div className="MiniCardItem">
            <div className="MiniCardItemImage">
                {
                    image ? <img src={`${process.env.REACT_APP_IMAGE_PATH}` + image[0].filename} alt={name}/> : null
                }
            </div>
            <div className="MiniCardMeta">
                <p>{name}</p>
                <p>{price}</p>
                <p>Quantity: {qnty}</p>
            </div>
            <Button
                variant="danger"
                className="MiniCardItemRemoveIcon p-1"
                onClick={() => handleRemoveItem(_id)}
            >
                <RemoveIcon/>
            </Button>
        </div>
    )
}

export default MiniCardItem
