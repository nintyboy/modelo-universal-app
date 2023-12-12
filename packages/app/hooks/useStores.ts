import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'
import { RootStoreType } from 'app/provider/stores/RootStore'

const useStores = () => {
  return useContext(MobXProviderContext) as RootStoreType
}

export default useStores
