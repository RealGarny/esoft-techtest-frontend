import { BuildConfig, GetterConfig, QueryParamsType } from './ClientPath.types';

export class ClientPath {
  pathName: string;
  isAbsolutePath: boolean;
  public constructor(pathName: string, isAbsolutePath: boolean = false) {
    this.pathName = pathName;
    this.isAbsolutePath = isAbsolutePath;
  }

  private joinEntries(separator: string, prefix: string, items: string[]) {
    if (!items.length) return '';
    const resultStr = items.join(separator);
    return prefix + resultStr;
  }

  private createParamsStr(obj: QueryParamsType) {
    const entries = [];
    for (const key of Object.keys(obj)) {
      const entry = key + '=' + encodeURIComponent(obj[key]);
      entries.push(entry);
    }
    return this.joinEntries('&', '?', entries);
  }

  private createPathStr(...pathNames: (string | undefined)[]) {
    const filteredPath = pathNames.filter((i) => i !== undefined);
    return this.joinEntries('/', this.isAbsolutePath ? '' : '/', filteredPath);
  }

  private build(config: BuildConfig = {}) {
    let result = this.createPathStr(this.pathName, config.item);
    if (config.params) result += this.createParamsStr(config.params);
    return result;
  }

  public get(config?: GetterConfig) {
    return this.build(config);
  }

  public getDetailed(pathName: string | number, config?: GetterConfig) {
    return this.build({ item: String(pathName), ...config });
  }
}
