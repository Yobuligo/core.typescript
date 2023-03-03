import { ifNotNull } from "./core";
import { IObjectCache } from "./IObjectCache";
import { IObjectCacheElement } from "./IObjectCacheElement";

export class ObjectCache<K, T extends object> implements IObjectCache<K, T> {
  private cache: Map<K, IObjectCacheElement<T>> = new Map();

  add(key: K, object: T, expiresIn: number = 0): void {
    const timerId = this.setTimer(key, expiresIn);
    this.cache.set(key, { object, expiresIn, timerId });
  }

  find(key: K): T | undefined {
    return ifNotNull(this.cache.get(key), (objectCacheElement) => {
      this.resetTimer(key, objectCacheElement);
      return objectCacheElement.object;
    });
  }

  remove(key: K): T | undefined {
    const objectCacheElement = this.cache.get(key);
    this.cache.delete(key);
    return objectCacheElement?.object;
  }

  private resetTimer(key: K, objectCacheElement: IObjectCacheElement<T>) {
    clearTimeout(objectCacheElement.timerId);
    const timerId = this.setTimer(key, objectCacheElement.expiresIn);
    objectCacheElement.timerId = timerId;
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
