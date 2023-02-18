import { expect } from "chai";
import { error } from "../src/core";
import { IllegalStateException } from "../src/Exceptions";
describe("error", () => {
  it("throws Error with empty message", () => {
    expect(error.bind(error)).throw;
  });

  it("throws Error with specific message", () => {
    const expectedErrorMessage = "my message";
    let actualErrorMessage: string = "";
    try {
      error(expectedErrorMessage);
    } catch (error: unknown) {
      actualErrorMessage = (error as Error).message;
    }

    expect(actualErrorMessage === expectedErrorMessage).true;
  });

  it("throws specific Exception", () => {
    expect(error.bind(error, new IllegalStateException())).throw;
  });
});
