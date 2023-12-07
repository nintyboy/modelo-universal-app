import { Dripsy } from './dripsy'
import { Provider as MobxProvider, contextFactory } from 'app/stores/appContext'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MobxProvider value={contextFactory()}>
      <Dripsy>
        {children}
      </Dripsy>
    </MobxProvider>
    )
}
 