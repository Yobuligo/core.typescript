/**
 * An implementation of this interface represents an object cache.
 * It stores objects by key, which needs to be retrieved afterwards.
 * It provides the possibility to set an expiration time to cleanup the cache in time if required.
 */
export interface IObjectCache<K, T extends object> {
  /**
   * Adds the *{@link object}* of *{@link T}* with the *{@link key}* of *{@link K}* to the cache.
   * Returns *true* if the *{@link object}* could be cached or *false* if they *{@link key}* is already available.
   */
  add(key: K, object: T): boolean;

  /**
   * Adds the *{@link object}* of *{@link T}* with the *{@link key}* of *{@link K}* to the cache.
   * The parameter *{@link expiresIn}* defines the expiration time in milliseconds, when to remove the *{@link object}* automatically from the cache.
   * Returns *true* if the *{@link object}* could be cached or *false* if they *{@link key}* is already available.
   */
  add(key: K, object: T, expiresIn: number): boolean;

  /**
   * Returns *true* if an object with *{@link key}* is part of the cache. Otherwise it returns *false*.
   */
  contains(key: K): boolean;
  find(key: K): T | undefined;
  remove(key: K): T | undefined;
  set(key: K, object: T): void;
  set(key: K, object: T, expiresIn: number): void;
}
