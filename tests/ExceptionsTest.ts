import { expect } from "chai";
import {
  ClassCastException,
  IllegalArgumentException,
  IllegalStateException,
  NoSuchElementException,
  NotImplementedException,
  NotSupportedException,
  NullPointerException,
} from "./../src/Exceptions";

const testException = <T extends Error>(type: new (message: string) => T) => {
  const expectedErrorMessage = "was thrown";
  let actualErrorMessage: string;

  it(`${type.name} can be created and thrown`, () => {
    try {
      throw new type(expectedErrorMessage);
    } catch (error: unknown) {
      actualErrorMessage = (error as Error).message;
    }
    expect(actualErrorMessage).equal(expectedErrorMessage);
  });
};

describe("Exceptions", () => {
  const expectedErrorMessage = "was thrown";
  let actualErrorMessage: string;

  beforeEach(() => {
    actualErrorMessage = "";
  });

  testException(ClassCastException);

  testException(IllegalArgumentException);

  testException(IllegalStateException);

  testException(NoSuchElementException);

  testException(NotImplementedException);

  testException(NotSupportedException);

  testException(NullPointerException);
});
