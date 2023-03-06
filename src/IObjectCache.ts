/**
 * An implementation of this interface represents an object cache.
 * It stores objects by key, which needs to be retrieved afterwards.
 * It provides the possibility to set an expiration time to cleanup the cache in time if required.
 */
export interface IObjectCache<K, T extends object> {
  /**
   * Adds the *{@link object}* of type *{@link T}* with the *{@link key}* of *{@link K}* to the cache.  
   * Returns *true* if the *{@link object}* could be cached or *false* if they *{@link key}* is already available.
   */
  add(key: K, object: T): boolean;

  /**
   * Adds the *{@link object}* of type *{@link T}* with the *{@link key}* of *{@link K}* to the cache.
   * The parameter *{@link expiresIn}* defines the expiration time in milliseconds, when to remove the *{@link object}* automatically from the cache.  
   * Returns *true* if the *{@link object}* could be cached or *false* if they *{@link key}* is already available.
   */
  add(key: K, object: T, expiresIn: number): boolean;

  /**
   * Returns *true* if an object with *{@link key}* is part of the cache. Otherwise it returns *false*.
   */
  contains(key: K): boolean;

  /**
   * Returns the cached object of type *{@link T}* for the passed in *{@link key}* or returns undefined if the *{@link key}* is unknown.
   */
  find(key: K): T | undefined;

  /**
   * Removes and returns the object for the passed in *{@link key}* or returns undefined if the *{@link key}* is unknown.
   */
  remove(key: K): T | undefined;

  /**
   * Sets the *{@link object}* of type *{@link T}* with the *{@link key}* of *{@link K}* to the cache.  
   * An already existing object for *{@link key}* will be overridden.
   */
  set(key: K, object: T): void;

  /**
   * Sets the *{@link object}* of type *{@link T}* with the *{@link key}* of *{@link K}* to the cache.
   * The parameter *{@link expiresIn}* defines the expiration time in milliseconds, when to remove the *{@link object}* automatically from the cache.  
   * An already existing object for *{@link key}* will be overridden.
   */
  set(key: K, object: T, expiresIn: number): void;
}
