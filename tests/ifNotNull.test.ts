import { expect } from "chai";
import { ifNotNull } from "../src/core";

describe("ifNotNull", () => {
  let called: boolean;

  beforeEach(() => {
    called = false;
  });

  it("calls block if value is not null", () => {
    ifNotNull("", () => {
      called = true;
    });

    expect(called).true;
  });

  it("doesn't call block if value is null", () => {
    ifNotNull(null, () => {
      called = true;
    });
    expect(called).false;
  });

  it("returns value if called", () => {
    const value = ifNotNull("", () => {
      return 123;
    });
    expect(value === 123).true;
  });

  it("returns undefined if not called", () => {
    const value = ifNotNull(undefined, () => {
      return 123;
    });
    expect(value).undefined;
  });
});
