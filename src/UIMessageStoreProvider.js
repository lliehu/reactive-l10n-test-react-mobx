import React from 'react'

const storeContext = React.createContext(null)

export const UIMessageStoreProvider = ({ store, children }) => {
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
