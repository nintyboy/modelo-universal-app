import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import {initializeApp} from 'firebase/app'

// const firebaseConfig = {
//   apiKey: 'AIzaSyAyEMFUuPK3Bce3M30_Uv-DjF2t67e_nTE',
//   authDomain: 'modelo-base-3233a.firebaseapp.com',
//   projectId: 'modelo-base-3233a',
//   storageBucket: 'modelo-base-3233a.appspot.com',
//   messagingSenderId: '523999729926',
//   appId: '1:523999729926:web:07c98ff5b60b9dee72a687',
//   measurementId: 'G-8XG3SPMFN4',
// }

// const app = initializeApp(firebaseConfig)

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
