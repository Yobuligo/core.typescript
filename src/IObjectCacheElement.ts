export interface IObjectCacheElement<T extends object> {
  object: T;
  expiresIn: number;
  timerId: number | NodeJS.Timeout;
}
