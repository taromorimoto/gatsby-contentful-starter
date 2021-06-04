import {createContext, useContext} from 'react'

const AppContext = createContext({
  location: undefined,
})
AppContext.displayName = 'AppContext'

export const useLocation = () => useContext(AppContext).location

export default AppContext
