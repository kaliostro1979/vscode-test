import { createContext, useState } from 'react'


export const Context = createContext(null)

export const ContextProvider = (({ children }) => {
    const [ show, setShow ] = useState(false)
    const [ productQuantity, setProductQuantity ] = useState(1)


    return (
        <Context.Provider
            value={{
                show,
                setShow,
                productQuantity,
                setProductQuantity
            }}
        >
            {children}
        </Context.Provider>
    )
})
