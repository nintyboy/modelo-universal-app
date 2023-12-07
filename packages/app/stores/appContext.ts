import { createContext, useContext } from 'react'
import { Logger } from 'app/utils/logger'
import RootStore from './rootStore'
import UserStore from './userStore'

const rootStore = new RootStore()

export interface ApplicationContext {
  rootStore: RootStore
  userStore: UserStore
}

export const contextFactory = (): ApplicationContext => {
  return {
    rootStore,
    userStore: rootStore.userStore,
  }
}

export const appContext = createContext<ApplicationContext>(contextFactory())

export const Provider = appContext.Provider

export function useRootStore() {
  const store = useContext<ApplicationContext>(appContext)
  if (!store) {
    throw new Error('useRootStore must be used within a RootStoreProvider.')
  }
  return store
}
