import { Logger } from 'app/utils/logger'
import {initializeApp, getApps} from 'firebase/app'


function FirebaseAppShell({
  children,
}: {
  children: React.ReactNode
}) {
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyAyEMFUuPK3Bce3M30_Uv-DjF2t67e_nTE',
  //   authDomain: 'modelo-base-3233a.firebaseapp.com',
  //   projectId: 'test',
  //   storageBucket: 'modelo-base-3233a.appspot.com',
  //   messagingSenderId: '523999729926',
  //   appId: '1:523999729926:web:07c98ff5b60b9dee72a687',
  //   measurementId: 'G-8XG3SPMFN4',
  // }

  // const app = initializeApp(firebaseConfig)
  if(typeof window !== 'undefined' && !getApps.length){
    initializeApp({
        apiKey: 'AIzaSyAyEMFUuPK3Bce3M30_Uv-DjF2t67e_nTE',
        authDomain: 'modelo-base-3233a.firebaseapp.com',
        projectId: 'test',
        storageBucket: 'modelo-base-3233a.appspot.com',
        messagingSenderId: '523999729926',
        appId: '1:523999729926:web:07c98ff5b60b9dee72a687',
        measurementId: 'G-8XG3SPMFN4',
    })
  }

  Logger.debug('FirebaseAppShell - Web  ')
  // const [auth, setAuth] = useState<firebase.auth.Auth>()
  // const [firestore, setFirestore] = useState<firebase.firestore.Firestore>()
  // const [storage, setStorage] = useState<firebase.storage.Storage>()

  // useEffect(() => {
  //   setAuth(firebaseApp.auth())
  //   setFirestore(firebaseApp.firestore())
  //   setStorage(firebaseApp.storage())
  // }, [firebaseApp])

  return <>{children}</>
}


export default FirebaseAppShell


