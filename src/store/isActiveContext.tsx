import { ui } from '../../interface'
import React, { useState } from 'react'

export const UiContext = React.createContext<ui>({
  isActive: false,
  toggleIsActive: () => {},
  setManuIsActive:(val)=> {},

})

const UiContextProvider: React.FC = (props) => {
  const [toggleHam, setToggleHam] = useState(false)
  const toggleHamHandler = () => {
    setToggleHam((prev) => !prev)
  }
const setManuIsActiveHandler = (val: boolean)=>{
  setToggleHam(val)
}


  const contextValue: ui = {
    isActive: toggleHam,
    toggleIsActive: toggleHamHandler,
    setManuIsActive :  setManuIsActiveHandler,
  }

  return (
    <UiContext.Provider value={contextValue}>
      {props.children}
    </UiContext.Provider>
  )
}

export default UiContextProvider
