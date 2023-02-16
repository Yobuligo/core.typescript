import { expect } from "chai";
import { ILazy } from "../src/ILazy";
import { lazy } from "./../src/core";

class Test {
  test(): void {}
}

describe("lazy", () => {
  let countInits: number;
  let test: Test;
  let testObject: ILazy<Test>;

  beforeEach(() => {
    countInits = 0;
    test = new Test();
    testObject = lazy(() => {
      countInits++;
      return test;
    });
  });

  it("returns lazy instance", () => {
    expect(testObject).not.undefined;
  });

  it("returns isInitialized false without accessing the value", () => {
    expect(testObject.isInitialized).false;
  });

  it("returns isInitialized true when accessing the value", () => {
    testObject.value;
    expect(testObject.isInitialized).true;
  });

  it("returns the initialized value", () => {
    expect(testObject.value === test).true;
  });

  it("calls the initializer only once", () => {
    testObject.value;
    testObject.value;
    expect(countInits).eq(1);
  });

  it("doesn't call initializer when creating lazy instance", () => {
    expect(countInits === 0).true;
  });

  it("property isInitialized is readonly", () => {
    let successful: boolean = false;
    try {
      (testObject.isInitialized as any) = false;
    } catch (error) {
      successful = true;
    }
    expect(successful).true;
  });

  it("property value is readonly", () => {
    let successful: boolean = false;
    try {
      (testObject.value as any) = new Test();
    } catch (error) {
      successful = true;
    }
    expect(successful).true;
  });
});
