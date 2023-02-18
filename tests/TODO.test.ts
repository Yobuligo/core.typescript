import { expect } from "chai";
import { TODO } from "./../src/core";

describe("TODO", () => {
  it("throws NotImplementedException", () => {
    let throwsError = false;
    try {
      TODO();
    } catch (error) {
      throwsError = true;
    }
    expect(throwsError).true;
  });

  it("throws NotImplementedException with provided message", () => {
    const expectedMessage = "my message";
    let actualMessage: string = "";
    try {
      TODO(expectedMessage);
    } catch (error: unknown) {
      actualMessage = (error as Error).message;
    }
    expect(actualMessage === expectedMessage).true;
  });
});
