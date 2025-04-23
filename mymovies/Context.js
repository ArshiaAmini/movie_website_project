import React, { useState, createContext } from 'react'

export const Context = createContext();

const userProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  return (
    <Context.Provider value={[user, setUser]}>
      {children}
    </Context.Provider>
  )
  
}

export default userProvider

