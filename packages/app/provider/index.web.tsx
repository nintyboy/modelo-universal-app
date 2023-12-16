import { Dripsy } from './dripsy'
import FirebaseAppShell from './firebase/FirebaseAppShell'
import RootProvider from './stores/RootProvider'
// import RootStore from './stores/RootStore'
// import {Provider as MobxProvider} from 'mobx-react'

export function Provider({ children }: { children: React.ReactNode }) {
  // const rootStore = new RootStore()

  return (
    <RootProvider>
      <FirebaseAppShell>
        <Dripsy>{children}</Dripsy>
      </FirebaseAppShell>
    </RootProvider>
  )
}


