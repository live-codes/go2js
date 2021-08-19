import { getUrl } from './get-url';

export const compile = async (code: string, baseUrl?: string): Promise<string> => {
  const url = getUrl(baseUrl);
  await import(url + '/go2js-compile.js');
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
