import { expect } from "chai";
import { checkNotNull } from "./../src/core";

class Test {}

describe("checkNotNull", () => {
  it("throws an exception for null value", () => {
    expect(checkNotNull.bind(checkNotNull, null)).throw("");
  });

  it("throws an exception for undefined value", () => {
    expect(checkNotNull.bind(checkNotNull, undefined)).throw("");
  });

  it("throws an exception for undefined value with error message", () => {
    expect(checkNotNull.bind(checkNotNull, undefined, "my message")).throw(
      "my message"
    );
  });

  it("returns value if not null and not undefined", () => {
    const test = new Test();
    expect(checkNotNull(test) === test).true;
  });
});
