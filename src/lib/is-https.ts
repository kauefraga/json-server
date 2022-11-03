// Verify if the url is secure
export function isHttps(url: string) {
  const { protocol } = new URL(url);

  if (protocol === 'https:') {
    return true;
  }

  return false;
}
