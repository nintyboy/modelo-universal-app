import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { AuthGate } from '../auth/gate'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <AuthGate>
      <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
        >{`User ID: ${id}`}</Text>

        <TextLink href="/">👈 Go Home</TextLink>
      </View>
    </AuthGate>
  )
}
