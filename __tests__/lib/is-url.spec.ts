import { describe, it, expect } from 'vitest';
import { isUrl } from '../../src/lib/is-url';

describe('', () => {
  it('should return true if the url is valid', () => {
    const urls = [
      'www.example.com',
      'http://example.com',
      'https://www.example.com/authors.json'
    ];

    for (const url of urls) {
      expect(isUrl(url)).toBeTruthy()
    }
  })

  it('should return false if the url is invalid', () => {
    const urls = [
      'query {  }',
      'c:/windows/example',
    ];

    for (const url of urls) {
      expect(isUrl(url)).toBeFalsy()
    }
  })
})
