import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PlusIcon from './../../icons/PlusIcon';
import MinusIcon from './../../icons/MinusIcon';


const ItemCounter = ({ product, setProductQuantity, productQuantity }) => {

    const handleIncrementCount = () => {
        setProductQuantity((prev) => prev + 1)
    }

    const handleDecrementCount = () => {
        setProductQuantity((prev) => prev - 1)
    }

    return (
        <div className="ItemCounter">
            <Button
                variant="outline-secondary"
                className="ItemCounterButton"
                onClick={() => handleDecrementCount(product)}
                disabled={productQuantity <= 0}
            >
                <MinusIcon/>
            </Button>
            <input
                type="text"
                className="ItemCounterValue"
                disabled
                value={productQuantity}
            />
            <Button
                variant="outline-secondary"
                className="ItemCounterButton"
                onClick={() => handleIncrementCount(product)}
            >
                <PlusIcon/>
            </Button>
        </div>
    )
}

export default ItemCounter;