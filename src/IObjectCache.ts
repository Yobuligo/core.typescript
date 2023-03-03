export interface IObjectCache<K, T extends object> {
  add(key: K, object: T, expiresIn?: number): void;
  find(key: K): T | undefined;
  remove(key: K): T | undefined;
}
