import React from 'react';
import { Button } from 'react-bootstrap';
import PlusIcon from './../../icons/PlusIcon';
import MinusIcon from './../../icons/MinusIcon';
import { useDispatch } from 'react-redux';


const ItemCounter = ({ id, qnty }) => {
  const dispatch = useDispatch()
  
  const handleIncrementCount = (id) => {
    dispatch()
  }

  const handleDecrementCount = (id) => {
    dispatch()
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