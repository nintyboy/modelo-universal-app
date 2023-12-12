import ProfileStore from './ProfileStore'
import UserStore from './UserStore'
// import { Provider } from 'mobx-react'

class RootStore {
  public userStore: UserStore
  public profileStore: ProfileStore

  public constructor() {
    this.userStore = new UserStore(this)
    this.profileStore = new ProfileStore(this)
  }
}

const rootStore = new RootStore()
export default rootStore

export type RootStoreType = RootStore
