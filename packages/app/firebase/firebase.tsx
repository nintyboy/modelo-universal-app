import firebase from '@react-native-firebase/app'

export function appName(){

  console.log(`[NATIVE]` + firebase.app().options.projectId);
}

// Path: packages/app/firebase/firebase.tsx
