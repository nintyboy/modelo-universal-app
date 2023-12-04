//TODO:[ ] Enable Log configuration based on enviroment
//TODO:[ ] Add support for logging to a database
//TODO:[ ] Pull in Config file to get this ready for production

import { Platform } from 'react-native'

export class Logger {
  private static getFunctionName(): string | undefined {
    try {
      const err = new Error()
      const stack = err.stack || ''

      const stackLines = stack.split('\n')
      // Adjust the index based on where the relevant line is in your environment
      const callerLine = stackLines[3] || ''
      // The format of the line might differ, so we need to handle different cases
      const match = callerLine.match(/at (\S+)/)
      if (match && match[1]) {
        return match[1].includes('.') ? match[1].split('.')[1] : match[1]
      }
    } catch (e) {
      // Fallback or default value in case of an error
    }
    return 'Unknown' // Default value if function name couldn't be determined
  }

  private static getPlatform(): string {
    return Platform.OS === 'web' ? 'WEB' : 'NATIVE'
  }

  static info = (...others: any): void => {
    console.log(
      `\x1b[94;1m[INFO]\x1b[0m [${this.getPlatform()}] [${this.getFunctionName()}]`,
      ...others
    ) // Cyan
  }

  static debug = (...others: any): void => {
    console.log(
      `\x1b[34;1m[DEBUG]\x1b[0m [${this.getPlatform()}] [${this.getFunctionName()}]`,
      ...others
    ) // Blue
  }

  static store = (...others: any): void => {
    console.log(
      `\x1b[95;1m[STORE]\x1b[0m [${this.getPlatform()}] [${this.getFunctionName()}]`,
      ...others
    ) // Purple
  }

  static warn = (...others: any): void => {
    console.log(
      `\x1b[33m[WARN]\x1b[0m [${this.getPlatform()}] [${this.getFunctionName()}]`,
      ...others
    ) // Yellow
  }

  static error = (...others: any): void => {
    console.log(
      `\x1b[31m[ERROR]\x1b[0m [${this.getPlatform()}] [${this.getFunctionName()}]`,
      ...others
    ) // Red
  }
}
