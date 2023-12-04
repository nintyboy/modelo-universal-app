import firebase from '@react-native-firebase/app'
import {Logger} from 'app/utils/logger'

export function appName(){

  // console.log(`[NATIVE]` + firebase.app().options.projectId);
  Logger.info(firebase.app().options.projectId);
}

// Path: packages/app/firebase/firebase.tsx
