import {
  IllegalArgumentException,
  InvalidOperationException,
} from "./Exceptions";

/**
 * An implementation of this interface represents an object pool.
 * It keeps objects which are expensive to create in memory to be reused.
 */
export interface IObjectPool<T extends object> {
  /**
   * Acquires an object of *{@link T}* from the object pool or throws an *{@link InvalidOperationException}* if the object pool capacity is exhausted.
   */
  acquire(): T;

  /**
   * Acquires an object of *{@link T}* from the object pool or returns *undefined* if the object pool capacity is exhausted.
   */
  acquireOrNull(): T | undefined;

  /**
   * Returns the total object pool capacity.
   */
  readonly capacity: number;

  /**
   * Releases the passed in *{@link object}* of *{@link T}* or throws an *{@link IllegalArgumentException}* if the *{@link object}* was not acquired from that object pool.
   */
  release(object: T): void;
}
