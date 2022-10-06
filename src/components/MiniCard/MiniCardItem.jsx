import React from 'react'
import RemoveIcon from './../../icons/RemoveIcon'
import { Button } from 'react-bootstrap'
import { removeCardItem } from '../../redux/slices/card.slice'
import { useDispatch } from 'react-redux'

const MiniCardItem = ({ id, name, image, price, qnty }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    dispatch(removeCardItem(id))
  }

  return (
    <div className="MiniCardItem">
      <div className="MiniCardItemImage">
        <img src={image} alt={name} />
      </div>
      <div className="MiniCardMeta">
        <p>{name}</p>
        <p>{price}</p>
        <p>Quantity: {qnty}</p>
      </div>
      <Button
        variant="danger"
        className="MiniCardItemRemoveIcon p-1"
        onClick={() => handleRemoveItem(id)}
      >
        <RemoveIcon />
      </Button>
    </div>
  )
}

export default MiniCardItem
