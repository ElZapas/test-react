import { createContext, useState } from "react"
export const AppContext = createContext() // declarando context API

export function AppProvider({children}) {
    const [user, setUser] = useState('Fabian')
    const contextValue = {user, setUser}
  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
}
