import { makeObservable, observable, action } from 'mobx'
import RootStore, { RootStoreType } from './RootStore'
import { Logger } from 'app/utils/logger'

class UserStore {
  private readonly rootStore: RootStoreType

  isLoggedIn = false
  constructor(rootStore: RootStoreType) {
    Logger.debug('Initializing UserStore')
    this.rootStore = rootStore
    makeObservable(this, {
      isLoggedIn: observable,
      setIsLoggedIn: action,
      toggleIsLoggedIn: action,
    })
  }

  setIsLoggedIn = (isLoggedIn: boolean) => {
    this.isLoggedIn = isLoggedIn
  }

  toggleIsLoggedIn = () => {
    this.isLoggedIn = !this.isLoggedIn
  }
}

export default UserStore
