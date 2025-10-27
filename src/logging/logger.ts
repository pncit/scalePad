/**
 * Log levels supported by the SDK
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'none';

/**
 * Logger interface for the SDK
 */
export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  none: 4,
};

/**
 * Redacts sensitive information from strings
 */
function redactSensitive(value: unknown): unknown {
  if (typeof value === 'string') {
    // Redact API keys (format: xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx-...)
    return value.replace(
      /\b[a-f0-9]{8}-[a-f0-9]{8}-[a-f0-9]{8}-[a-f0-9]{8}(-[a-f0-9]{8})*\b/gi,
      '***REDACTED***'
    );
  }
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return value.map(redactSensitive);
    }
    const redacted: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      if (key.toLowerCase().includes('key') || key.toLowerCase().includes('token') || key.toLowerCase().includes('secret')) {
        redacted[key] = '***REDACTED***';
      } else {
        redacted[key] = redactSensitive(val);
      }
    }
    return redacted;
  }
  return value;
}

/**
 * Default console logger with log level gating and redaction
 */
export class ConsoleLogger implements Logger {
  private level: LogLevel;

  constructor(level: LogLevel = 'info') {
    this.level = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= LOG_LEVELS[this.level];
  }

  private formatArgs(args: unknown[]): unknown[] {
    return args.map(redactSensitive);
  }

  debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog('debug')) {
      console.debug(`[ScalePad SDK] ${message}`, ...this.formatArgs(args));
    }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.shouldLog('info')) {
      console.info(`[ScalePad SDK] ${message}`, ...this.formatArgs(args));
    }
  }

  warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog('warn')) {
      console.warn(`[ScalePad SDK] ${message}`, ...this.formatArgs(args));
    }
  }

  error(message: string, ...args: unknown[]): void {
    if (this.shouldLog('error')) {
      console.error(`[ScalePad SDK] ${message}`, ...this.formatArgs(args));
    }
  }
}

/**
 * No-op logger that discards all log messages
 */
export class NoOpLogger implements Logger {
  debug(_message: string, ..._args: unknown[]): void {
    // no-op
  }

  info(_message: string, ..._args: unknown[]): void {
    // no-op
  }

  warn(_message: string, ..._args: unknown[]): void {
    // no-op
  }

  error(_message: string, ..._args: unknown[]): void {
    // no-op
  }
}

/**
 * Creates a logger based on log level
 */
export function createLogger(level: LogLevel = 'info', customLogger?: Logger): Logger {
  if (customLogger) {
    return customLogger;
  }
  if (level === 'none') {
    return new NoOpLogger();
  }
  return new ConsoleLogger(level);
}

