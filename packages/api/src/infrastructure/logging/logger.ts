export interface Logger {
  info(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  debug(message: string, ...args: any[]): void;
}

export function createLogger(): Logger {
  return {
    debug: (message: string, ...args: any[]) => {
      if (process.env.NODE_ENV !== `production`) {
        console.debug(`[DEBUG] ${message}`, ...args);
      }
    },
    error: (message: string, ...args: any[]) => {
      console.error(`[ERROR] ${message}`, ...args);
    },
    info: (message: string, ...args: any[]) => {
      console.log(`[INFO] ${message}`, ...args);
    },
    warn: (message: string, ...args: any[]) => {
      console.warn(`[WARN] ${message}`, ...args);
    },
  };
}

export const Logger = Symbol.for(`Logger`);
