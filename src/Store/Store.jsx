import React, { createContext, useState } from 'react'

const StoreContext = createContext();
const Store = (props) => {

    const [isOpen,setIsOpen] = useState(false);

    const value = {isOpen,setIsOpen};
  return (
    <StoreContext.Provider value={value}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default Store
export {StoreContext};
