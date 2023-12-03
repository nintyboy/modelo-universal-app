import {getApp} from '@firebase/app';

export function appName() {
  const app = getApp();
  console.log(`[WEB]`+ app.options.projectId);
} // Path: packages/app/firebase/firebase.web.tsx