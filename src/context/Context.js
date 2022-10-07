import { createContext, useState } from 'react'


export const Context = createContext(null)

export const ContextProvider = (({ children }) => {
  const [show, setShow] = useState(false)
  

  return (
    <Context.Provider
      value={{
        show,
        setShow
      }}
    >
      {children}
    </Context.Provider>
  )
})
