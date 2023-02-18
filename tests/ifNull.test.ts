import { expect } from "chai";
import { ifNull } from "../src/core";

describe("ifNull", () => {
  let called: boolean;

  beforeEach(() => {
    called = false;
  });

  it("calls block if value is null", () => {
    ifNull(undefined, () => {
      called = true;
    });

    expect(called).true;
  });

  it("doesn't call block if value is not null", () => {
    ifNull("", () => {
      called = true;
    });
    expect(called).false;
  });

  it("returns value if called", () => {
    const value = ifNull(undefined, () => {
      return 123;
    });
    expect(value === 123).true;
  });

  it("returns undefined if not called", () => {
    const value = ifNull("", () => {
      return 123;
    });
    expect(value).undefined;
  });
});
