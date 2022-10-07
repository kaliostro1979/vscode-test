import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MiniCardItem from './MiniCardItem'
import CloseIcon from './../../icons/CloseIcon'
import { Context } from './../../context/Context'
import { Button } from 'react-bootstrap'
import { removeAllItems } from '../../redux/slices/card.slice'

const MiniCard = () => {
    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.main.cart.cardItems)
    const { show, setShow } = useContext(Context)

    const handleRemoveAllItems = () => {
        dispatch(removeAllItems())
    }

    return (
        <div className={!show ? 'MiniCard Hide' : 'MiniCard'}>
            <div className="MiniCardClose" onClick={() => setShow(false)}>
                <CloseIcon/>
            </div>

            <div className={"MiniCardInner"}>
                {cardItems.length ? (
                    cardItems.map((item) => {
                        return <MiniCardItem {...item} key={item.id * Math.random()}/>
                    })
                ) : (
                    <div className="MiniCardNoItems">
                        <p>You have not any items in your card</p>
                    </div>
                )}
            </div>
            <div className={"MiniCardFooter"}>
                <Button
                    className="MiniCardClearButton"
                    variant="danger"
                    onClick={handleRemoveAllItems}
                >
                    Remove All Items
                </Button>
            </div>
        </div>
    )
}

export default MiniCard
