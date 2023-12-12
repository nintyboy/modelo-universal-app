import { makeObservable, observable, action } from 'mobx'
import RootStore, { RootStoreType } from './RootStore'
import { Logger } from 'app/utils/logger'

class ProfileStore {
  private readonly rootStore: RootStoreType

  userName = 'John Doe'

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore
    Logger.debug('Initializing ProfileStore')
    makeObservable(this, {
      userName: observable,
      setUserName: action,
    })
  }

  setUserName = (name: string) => {
    this.userName = name
  }
}

export default ProfileStore
