import { Logger } from 'app/utils/logger'
import { makeObservable } from 'mobx'
import RootStore from './rootStore'

class UserStore {
  private readonly rootStore: RootStore

  isLogged = false

  public constructor(rootStore: RootStore) {
    Logger.debug('Initializing')
    makeObservable(this, {
      isLogged: false,
    })
    this.rootStore = rootStore
  }

  public toggleLogin() {
    this.isLogged = !this.isLogged
  }
}

export default UserStore
