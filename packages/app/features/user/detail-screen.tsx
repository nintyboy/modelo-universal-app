import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import AuthStateChangeHandler from '../auth/AuthStateChangeHandler'
import { observer } from 'mobx-react-lite'
import useStores from 'app/hooks/useStores'

const { useParam } = createParam<{ id: string }>()

const UserDetailScreen =  observer(() => {
  const [id] = useParam('id')
  const {userStore} = useStores();

  return (
    <>
      <AuthStateChangeHandler />
      <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
        >{`User ID: ${id}`}</Text>

        <Text onPress={userStore.toggleIsLoggedIn}>👈 Go Home</Text>
      </View>
    </>
  )
})


export { UserDetailScreen }