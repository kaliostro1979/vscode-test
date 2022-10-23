import { createContext, useEffect, useState, useSyncExternalStore } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {checkIsLoggedIn} from "../redux/slices/auth.slice";
import jwtDecode from "jwt-decode";


export const Context = createContext(null)

export const ContextProvider = (({children}) => {
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1)
    const [activeCategory, setActiveCategory] = useState("all")
    const [activeProduct, setActiveProduct] = useState(null)
    const [activeImage, setActiveImage] = useState( '')
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.main.auth.isLoggedIn)

    useEffect(() => {
        dispatch(checkIsLoggedIn())
    }, [dispatch])

    useEffect(()=>{
        const token = sessionStorage.getItem("user_token")
        if (token){
            setUser(jwtDecode(token))
        }else{
            setUser(null)
        }
    },[])

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
                user,
                setUser
            }}
        >
            {children}
        </Context.Provider>
    )
})
