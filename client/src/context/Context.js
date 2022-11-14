import { createContext, useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {checkIsLoggedIn} from "../redux/slices/auth.slice";
import {useLocation} from "react-router-dom";
import {checkUserIsLoggedIn} from "../redux/slices/user.auth.slice";


export const Context = createContext(null)

export const ContextProvider = (({children}) => {
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1)
    const [activeCategory, setActiveCategory] = useState("all")
    const [activeProduct, setActiveProduct] = useState(null)
    const [activeImage, setActiveImage] = useState( '')
    const [showDropDown, setShowDropDown] = useState(false)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.main.auth.isLoggedIn)
    const userIsLoggedIn = useSelector(state => state.main.user.isLoggedIn)
    const loggedInUser = useSelector(state => state.main.user.loggedInUser)
    const location = useLocation()


    useEffect(() => {
        dispatch(checkIsLoggedIn())
        dispatch(checkUserIsLoggedIn())
    }, [dispatch])

    useEffect(()=>{
        setShowDropDown(false)
    }, [location])

    return (
        <Context.Provider
            value={{
                show,
                setShow,
                productQuantity,
                setProductQuantity,
                activeCategory,
                setActiveCategory,
                isLoggedIn,
                showModal,
                setShowModal,
                setActiveProduct,
                activeProduct,
                activeImage,
                setActiveImage,
                loggedInUser,
                userIsLoggedIn,
                showDropDown,
                setShowDropDown
            }}
        >
            {children}
        </Context.Provider>
    )
})
