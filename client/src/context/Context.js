import {createContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {checkIsLoggedIn} from "../redux/slices/auth.slice";


export const Context = createContext(null)

export const ContextProvider = (({children}) => {
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1)
    const [activeCategory, setActiveCategory] = useState("all")
    const [activeProduct, setActiveProduct] = useState(null)
    const [activeImage, setActiveImage] = useState( '')
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.main.auth.isLoggedIn)

    const [price, setPrice] = useState("")
    const [salePrice, setSalePrice] = useState("")
    const [sale, setSale] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [bestSeller, setBestSeller] = useState(false)
    const [onStock, setOnStock] = useState('')
    const [hasSale, setHasSale] = useState(false)


    useEffect(() => {
        dispatch(checkIsLoggedIn())
    }, [dispatch])

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
                price,
                setPrice,
                salePrice,
                setSalePrice,
                sale,
                setSale,
                description,
                setDescription,
                category,
                setCategory,
                bestSeller,
                setBestSeller,
                onStock,
                setOnStock,
                hasSale,
                setHasSale
            }}
        >
            {children}
        </Context.Provider>
    )
})
