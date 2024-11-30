import { get, reduce } from 'lodash';

export function getObjectKeys(options: any, prefix: string): string[] {
  let keys: string[] = [];
  if (typeof options !== 'object') {
    return [];
  }

  Object.keys(options).forEach((key) => {
    keys.push(`${prefix}.${key}`);
    if (typeof options[key] !== 'object' || ('$$typeof' in options[key])) {
      return;
    }

    const subKeys = getObjectKeys(options[key], prefix);
    keys = [
      ...keys,
      ...subKeys.map((subKey) => {
        const formattedSubKey = subKey.replace(prefix, key);
        return `${prefix}.${formattedSubKey}`;
      })
    ];
  });

  return keys;
}

export function countMissingKeys(options: any, optionsKeys: string[]) {
  const missingKeys = reduce(
    optionsKeys,
    (missing: string[], key: string): string[] => {
      const value = get(options, key);
      if (value === undefined || value === null) {
        missing.push(key);
      }
      return missing;
    },
    []
  );

  return missingKeys.length;
}
