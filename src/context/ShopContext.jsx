import React, { createContext } from 'react'
import all_product from '../assets/all_product.js'

export const ShopContext = createContext(undefined)

const ShopContextProvider = ({children}) => {
    const contextValue = {all_product}

    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider