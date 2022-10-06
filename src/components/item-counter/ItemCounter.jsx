import React from 'react';
import { Button } from 'react-bootstrap';
import PlusIcon from './../../icons/PlusIcon';
import MinusIcon from './../../icons/MinusIcon';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItemCount , decrementItemCount} from '../../redux/slices/card.slice'

const ItemCounter = ({ id, qnty }) => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.main.cart.product)

  const handleIncrementCount = (id) => {
    dispatch(incrementItemCount(id))
  }

  const handleDecrementCount = (id) => {
    dispatch(decrementItemCount(id))
  }

  return (
    <div className="ItemCounter">
      <Button
        variant="outline-secondary"
        className="ItemCounterButton"
        onClick={() => handleDecrementCount(id)}
      >
        <MinusIcon />
      </Button>
      <input
        type="text"
        className="ItemCounterValue"
        disabled
        value={qnty || '0'}
      />
      <Button
        variant="outline-secondary"
        className="ItemCounterButton"
        onClick={() => handleIncrementCount(id)}
      >
        <PlusIcon />
      </Button>
    </div>
  )
}

export default ItemCounter;