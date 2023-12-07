import { Logger } from 'app/utils/logger'
import UserStore from './userStore'
import { createContext, useContext } from 'react'

class RootStore {
  public readonly userStore
  constructor() {
    Logger.debug('Initializing')
    this.userStore = new UserStore(this)
  }
}

export default RootStore

// const RootStoreContext = createContext<null | RootStore>(null)

// export const Provider = RootStoreContext.Provider

// export function useRootStore() {
//   const store = useContext(RootStoreContext)
//   if (!store) {
//     throw new Error('useRootStore must be used within a RootStoreProvider.')
//   }
//   return store
// }

// export const InitalState = new RootStore()
