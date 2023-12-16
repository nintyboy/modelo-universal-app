import useStores from 'app/hooks/useStores'
import { Logger } from 'app/utils/logger'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useRouter } from 'solito/router'

const useRedirectOnAuthStateChange = () => {
  const { userStore } = useStores()
  const router = useRouter()
  useEffect(() => {
    if (!userStore.isLoggedIn) {
      Logger.debug('user is not logged in, redirecting to login page')
      router.replace('/')
    }
  }, [userStore.isLoggedIn])
}

const AuthStateChangeHandler = observer(() => {
  useRedirectOnAuthStateChange()
  return null
})

export default AuthStateChangeHandler

// TODO: Need to add a SSR version of this for the Next app see: https://colinhacks.com/essays/nextjs-firebase-authentication
