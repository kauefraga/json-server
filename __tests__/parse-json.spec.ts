import { describe, it, expect } from 'vitest';
import { readJson } from '../src/lib/parse-json';

describe('Parse JSON library', () => {
  it('should be able to read JSON', async () => {
    expect(readJson('mock/users.json')).resolves.not.toThrow();
  });

  it('should not be able to read JSON', async () => {
    expect(readJson('mock')).rejects.toThrow();
  });
});
