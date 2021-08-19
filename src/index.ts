const getUrl = (baseUrl: string) => {
  if (baseUrl) {
    if (typeof baseUrl === 'string') {
      if (baseUrl.endsWith('/')) {
        return baseUrl.slice(0, -1);
      }
      return baseUrl;
    } else {
      throw new Error('invalid baseUrl');
    }
  }

  const metaUrl = import.meta?.url;
  const currentScriptSrc = (document?.currentScript as HTMLScriptElement)?.src;
  const locationHref = location.href;

  const url =
    metaUrl && typeof metaUrl === 'string'
      ? metaUrl
      : currentScriptSrc && typeof currentScriptSrc === 'string'
      ? currentScriptSrc
      : locationHref && typeof locationHref === 'string'
      ? locationHref
      : '.';

  return url.split('/').slice(0, -1).join('/');
};

export const compile = async (code: string, baseUrl: string) => {
  const url = getUrl(baseUrl);
  await import(url + '/go2js.js');
  return new Promise((resolve, reject) => {
    (globalThis as any).go2jsCompile(code, url, (err: string, jsCode: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(jsCode);
      }
    });
  });
};
