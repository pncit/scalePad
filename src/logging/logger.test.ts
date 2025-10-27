import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ConsoleLogger, NoOpLogger, createLogger } from './logger.js';

describe('ConsoleLogger', () => {
  let consoleSpy: {
    debug: any;
    info: any;
    warn: any;
    error: any;
  };

  beforeEach(() => {
    consoleSpy = {
      debug: vi.spyOn(console, 'debug').mockImplementation(() => {}),
      info: vi.spyOn(console, 'info').mockImplementation(() => {}),
      warn: vi.spyOn(console, 'warn').mockImplementation(() => {}),
      error: vi.spyOn(console, 'error').mockImplementation(() => {}),
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should respect log level', () => {
    const logger = new ConsoleLogger('warn');
    
    logger.debug('debug message');
    logger.info('info message');
    logger.warn('warn message');
    logger.error('error message');

    expect(consoleSpy.debug).not.toHaveBeenCalled();
    expect(consoleSpy.info).not.toHaveBeenCalled();
    expect(consoleSpy.warn).toHaveBeenCalled();
    expect(consoleSpy.error).toHaveBeenCalled();
  });

  it('should redact API keys', () => {
    const logger = new ConsoleLogger('debug');
    const apiKey = 'c4d67eca-3b32ed26-b2412e47-2f634617-7e91a0f4-5c8d2b67-e3a19f0b-46d7c582';
    
    logger.debug('API key:', apiKey);

    expect(consoleSpy.debug).toHaveBeenCalledWith(
      '[ScalePad SDK] API key:',
      '***REDACTED***'
    );
  });

  it('should redact keys in objects', () => {
    const logger = new ConsoleLogger('debug');
    
    logger.debug('Headers:', { 'x-api-key': 'secret', 'content-type': 'application/json' });

    expect(consoleSpy.debug).toHaveBeenCalledWith(
      '[ScalePad SDK] Headers:',
      { 'x-api-key': '***REDACTED***', 'content-type': 'application/json' }
    );
  });
});

describe('NoOpLogger', () => {
  it('should not log anything', () => {
    const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});
    
    const logger = new NoOpLogger();
    logger.debug('test');
    logger.info('test');
    logger.warn('test');
    logger.error('test');

    expect(consoleSpy).not.toHaveBeenCalled();
    
    vi.restoreAllMocks();
  });
});

describe('createLogger', () => {
  it('should create NoOpLogger for "none" level', () => {
    const logger = createLogger('none');
    expect(logger).toBeInstanceOf(NoOpLogger);
  });

  it('should create ConsoleLogger for other levels', () => {
    const logger = createLogger('info');
    expect(logger).toBeInstanceOf(ConsoleLogger);
  });

  it('should use custom logger if provided', () => {
    const customLogger = new NoOpLogger();
    const logger = createLogger('info', customLogger);
    expect(logger).toBe(customLogger);
  });
});

