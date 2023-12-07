import { useRootStore } from "app/stores/appContext"
import { useRouter} from 'solito/navigation'

export function AuthGate({
  children,
}: {
  children: React.ReactNode
}){
  const { userStore } = useRootStore()
  const { push } = useRouter()

  if (!userStore.isLogged) {
    push('/')
    return null
  }

  return <>{children}</>
}