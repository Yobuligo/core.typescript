import { expect } from "chai";
import { objectPool } from "./../src/core";
import { IObjectPool } from "./../src/IObjectPool";

class Test {
  hash = new Date().getTime();
}

describe("objectPool", () => {
  let testPool: IObjectPool<Test>;

  beforeEach(() => {
    testPool = objectPool(3, () => {
      return new Test();
    });
  });

  describe("constructor", () => {
    it("throws IllegalArgumentException when creating instance for capacity smaller 1", () => {
      let throwsError = false;
      try {
        objectPool(0, () => {
          return new Test();
        });
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });

    it("creates object pool", () => {
      const testPool: IObjectPool<Test> = objectPool<Test>(3, () => {
        return new Test();
      });
      expect(testPool).not.undefined;
    });
  });

  describe("acquire", () => {
    it("returns object", () => {
      const test: Test = testPool.acquire();
      expect(test).not.undefined;
    });

    it("returns different object instances", () => {
      const first = testPool.acquire();
      const second = testPool.acquire();
      expect(first !== second).true;
    });

    it("returns released object instance", () => {
      const first = testPool.acquire();
      testPool.release(first);
      const second = testPool.acquire();
      expect(first === second).true;
    });

    it("throws InvalidOperationException if capacity is exhausted", () => {
      const first = testPool.acquire();
      const second = testPool.acquire();
      const third = testPool.acquire();
      let fourth: Test | undefined;
      let throwsError = false;
      try {
        fourth = testPool.acquire();
      } catch (error) {
        throwsError = true;
      }
      expect(first).not.undefined;
      expect(second).not.undefined;
      expect(third).not.undefined;
      expect(fourth).undefined;
      expect(throwsError).true;
    });
  });

  describe("acquireOrNull", () => {
    it("returns object", () => {
      const test: Test | undefined = testPool.acquireOrNull();
      expect(test).not.undefined;
    });

    it("returns different object instances", () => {
      const first = testPool.acquireOrNull();
      const second = testPool.acquireOrNull();
      expect(first !== second).true;
    });

    it("returns released object instance", () => {
      const first = testPool.acquireOrNull();
      testPool.release(first!);
      const second = testPool.acquireOrNull();
      expect(first === second).true;
    });

    it("returns undefined if capacity is exhausted", () => {
      const first = testPool.acquireOrNull();
      const second = testPool.acquireOrNull();
      const third = testPool.acquireOrNull();
      const fourth = testPool.acquireOrNull();
      expect(first).not.undefined;
      expect(second).not.undefined;
      expect(third).not.undefined;
      expect(fourth).undefined;
    });
  });

  describe("release", () => {
    it("releases object instance", () => {
      const first = testPool.acquire();
      testPool.release(first);
      const second = testPool.acquire();
      expect(first === second).true;
    });

    it("throws IllegalArgumentException if unknown instance is released", () => {
      let throwsError = false;
      try {
        testPool.release(new Test());
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });
  });
});
