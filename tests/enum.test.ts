import { expect } from "chai";
import { Enum } from "./../src/core";

enum Empty {}

enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}

describe("Enum", () => {
  describe("firstKey", () => {
    it("returns first key of enum", () => {
      expect(Enum.firstKey(Gender)).equal(Gender.MALE);
    });

    it("throws NoSuchElementException for empty enum", () => {
      let throwsError = false;
      try {
        Enum.firstKey(Empty);
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });
  });
});
