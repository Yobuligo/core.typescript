import { ifNotNull } from "./core";
import { IObjectCache } from "./IObjectCache";
import { IObjectCacheElement } from "./IObjectCacheElement";

export class ObjectCache<K, T extends object> implements IObjectCache<K, T> {
  private cache: Map<K, IObjectCacheElement<T>> = new Map();

  add(key: K, object: T): boolean;
  add(key: K, object: T, expiresIn: number | undefined): boolean;
  add(key: K, object: T, expiresIn?: number): boolean {
    if (this.cache.has(key)) {
      return false;
    }
    this.setCacheValue(key, object, expiresIn);
    return true;
  }

  contains(key: K): boolean {
    return this.cache.has(key);
  }

  find(key: K): T | undefined {
    return ifNotNull(this.cache.get(key), (objectCacheElement) => {
      return objectCacheElement.object;
    });
  }

  remove(key: K): T | undefined {
    const objectCacheElement = this.cache.get(key);
    if (objectCacheElement) {
      clearTimeout(objectCacheElement.timerId);
      this.cache.delete(key);
      return objectCacheElement.object;
    } else {
      return undefined;
    }
  }

  set(key: K, object: T): void;
  set(key: K, object: T, expiresIn: number): void;
  set(key: K, object: T, expiresIn?: number): void {
    this.remove(key);
    this.setCacheValue(key, object, expiresIn);
  }

  private setCacheValue(key: K, object: T, expiresIn?: number) {
    let expiresInValue = expiresIn ?? 0;
    const timerId = this.setTimer(key, expiresInValue);
    this.cache.set(key, { object, expiresIn: expiresInValue, timerId });
  }

  private setTimer(key: K, expiresIn: number) {
    if (expiresIn === 0) {
      return 0;
    }

    return setTimeout(() => {
      this.cache.delete(key);
    }, expiresIn);
  }
}
