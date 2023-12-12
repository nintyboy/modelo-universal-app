import { Dripsy } from './dripsy'
import RootProvider from './stores/RootProvider'
// import RootStore from './stores/RootStore'
// import {Provider as MobxProvider} from 'mobx-react'

export function Provider({ children }: { children: React.ReactNode }) {
  // const rootStore = new RootStore()
  return (
    <RootProvider>
      <Dripsy>{children}</Dripsy>
    </RootProvider>
    )
}
