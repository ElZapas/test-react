import { createContext, useState } from "react"
export const AppContext = createContext() 

export function AppProvider({children}) {
    const [user, setUser] = useState('valorInput')
    const contextValue = {user, setUser}
  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
}
