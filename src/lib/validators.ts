export function isUrl(url: string) {
  // source: https://urlregex.com
  // eslint-disable-next-line no-useless-escape
  const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;

  return urlRegEx.test(url);
}

export function isHttps(url: string) {
  const { protocol } = new URL(url);

  if (protocol === 'https:') {
    return true;
  }

  return false;
}
