import { error, ifNotNull } from "./core";
import {
  IllegalArgumentException,
  InvalidOperationException,
} from "./Exceptions";
import { IObjectPool } from "./IObjectPool";

export class ObjectPool<T extends object> implements IObjectPool<T> {
  private acquired: Map<T, boolean> = new Map();
  private released: Map<T, boolean> = new Map();

  constructor(
    readonly capacity: number,
    private creator: (index: number) => T
  ) {
    if (capacity <= 0) {
      throw new IllegalArgumentException(
        `Error when initializing object pool. Object pool capacity must be greater than 0.`
      );
    }
  }

  acquire(): T {
    return (
      this.acquireOrNull() ??
      error(
        new InvalidOperationException(
          `Error when acquiring object from object pool. Object pool capacity is exhausted.`
        )
      )
    );
  }

  acquireOrNull(): T | undefined {
    return ifNotNull(this.fetch(), (object) => {
      return this.checkout(object);
    });
  }

  release(object: T): void {
    if (!this.acquired.has(object)) {
      throw new IllegalArgumentException(
        `Error while releasing object to object pool. Object was not acquired from that object pool.`
      );
    }
    this.released.set(object, true);
    this.acquired.delete(object);
  }

  private checkout(object: T): T {
    this.acquired.set(object, true);
    this.released.delete(object);
    return object;
  }

  private fetch(): T | undefined {
    return this.findFirst() ?? this.create();
  }

  private findFirst(): T | undefined {
    let next: T | undefined = undefined;
    this.released.forEach((value, object) => {
      if (next === undefined) {
        next = object;
      }
    });
    return next;
  }

  private create(): T | undefined {
    if (this.acquired.size < this.capacity) {
      const object = this.creator(this.acquired.size);
      this.released.set(object, true);
      return object;
    }
  }
}

class Test {
  constructor(public index: number, name: string) {}
}

const testPool = new ObjectPool<Test>(3, (index) => {
  return new Test(index, "");
});

testPool.release(testPool.acquire());
testPool.release(testPool.acquire());
testPool.release(testPool.acquire());
testPool.release(testPool.acquire());
testPool.release(testPool.acquire());
testPool.release(testPool.acquire());
testPool.release(testPool.acquire());
testPool.acquire();
