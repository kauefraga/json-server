import { describe, it, expect } from 'vitest';
import { Log } from '../../src/lib/colorized-console';

describe('Colorized console', () => {
  it('should be able to create a logger', () => {
    const log = new Log();

    expect(log).toBeInstanceOf(Log);
  });

  it('should be able to log messages', () => {
    const log = new Log();

    // bad test
    expect(
      log.yellow('testing...'),
    ).not.toBeNull();
  });
});
