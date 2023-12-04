import {getApp} from '@firebase/app';
import {Logger} from 'app/utils/logger';

export function appName() {
  const app = getApp();
  // console.log(`[WEB]`+ app.options.projectId);
  Logger.info(`[WEB] `+ app.options.projectId);
  Logger.debug(`[WEB] ` + app.options.projectId)
  Logger.warn(`[WEB] ` + app.options.projectId)
  Logger.error(`[WEB] ` + app.options.projectId)
  Logger.store(`[WEB] ` + app.options.projectId)
} // Path: packages/app/firebase/firebase.web.tsx