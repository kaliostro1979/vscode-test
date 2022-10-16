import React from 'react';
import { Button } from 'react-bootstrap';
import PlusIcon from './../../icons/PlusIcon';
import MinusIcon from './../../icons/MinusIcon';


const ItemCounter = ({ setProductQuantity, productQuantity, product }) => {

    const handleIncrementCount = () => {
        setProductQuantity((prev) => prev + 1)
    }

    const handleDecrementCount = () => {
        setProductQuantity((prev) => prev - 1)
    }

    console.log(product.on_stock >= productQuantity);


    return (
        <div className="ItemCounter">
            <Button
                variant="outline-secondary"
                className="ItemCounterButton"
                onClick={() => handleDecrementCount()}
                disabled={productQuantity <= 1}
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
                onClick={() => handleIncrementCount()}
                disabled={product.on_stock && product.on_stock <= productQuantity}
            >
                <PlusIcon/>
            </Button>
        </div>
    )
}

export default ItemCounter;