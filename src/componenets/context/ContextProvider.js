import React, {  createContext, useState } from 'react';

export const deleteContext = createContext("");

 const ContextProvider = ({children}) => {
    const [dltTask, setDeltTask] = useState(false);
  return (
    <>
    <deleteContext.Provider value={{dltTask,setDeltTask}}>
        {children}
    </deleteContext.Provider>
    </>
  )
}

export default ContextProvider