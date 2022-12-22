import { describe, it, expect } from 'vitest';
import { isUrl, isHttps } from '../src/lib/validators';

describe('Validators library', () => {
  it('should validate those urls', () => {
    expect(isUrl('http://localhost:3333')).toBeTruthy();
    expect(isUrl('https://www.example.com')).toBeTruthy();
    expect(isUrl('https://search.example.com?q=test')).toBeTruthy();
  });

  it('should not validate those urls', () => {
    expect(isUrl('c:\\test')).toBeFalsy();
    expect(isUrl('/home/user')).toBeFalsy();
  });

  it('should validate that the url is secure', () => {
    expect(isHttps('https://search.example.com')).toBeTruthy();
  });

  it('should not validate that the url is secure', () => {
    expect(isHttps('http://search.example.com')).toBeFalsy();
  });
});
