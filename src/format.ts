import { getUrl } from './get-url';

export const format = async (code: string, baseUrl?: string, imports = true): Promise<string> => {
  const url = getUrl(baseUrl);
  const filename = imports ? '/go2js-format.js' : '/go2js-format-no-imports.js';
  await import(url + filename);
  return new Promise((resolve, reject) => {
    const [formatted, err] = (globalThis as any).go2jsFormat(code);
    if (err) {
      reject(err);
    } else {
      resolve(formatted);
    }
  });
};
