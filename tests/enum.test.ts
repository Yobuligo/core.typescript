import { expect } from "chai";
import { Enum } from "./../src/core";

enum Empty {}

enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}

describe("Enum", () => {
  describe("first", () => {
    it("returns first value of enum", () => {
      expect(Enum.first(Gender)).equal(Gender.MALE);
    });

    it("throws NoSuchElementException for empty enum", () => {
      let throwsError = false;
      try {
        Enum.first(Empty);
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });
  });

  describe("firstOrNull", () => {
    it("returns first value of enum", () => {
      expect(Enum.firstOrNull(Gender)).equal(Gender.MALE);
    });

    it("returns undefined for empty enum", () => {
      expect(Enum.firstOrNull(Empty)).equal(undefined);
    });
  });

  describe("firstKey", () => {
    it("returns first key of enum", () => {
      expect(Enum.firstKey(Gender)).equal("MALE");
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

  describe("firstKeyOrNull", () => {
    it("returns first key value of enum", () => {
      expect(Enum.firstKeyOrNull(Gender)).equal("MALE");
    });

    it("returns undefined for empty enum", () => {
      expect(Enum.firstKeyOrNull(Empty)).equal(undefined);
    });
  });

  describe("keys", () => {
    it("returns keys of enum", () => {
      const keys = Enum.keys(Gender);
      expect(keys.length).equal(2);
      expect(keys[0]).equal("MALE");
      expect(keys[1]).equal("FEMALE");
    });

    it("returns empty list for empty enum", () => {
      expect(Enum.keys(Empty).length).equal(0);
    });
  });

  describe("values", () => {
    it("returns values of enum", () => {
      const values = Enum.values(Gender);
      expect(values.length).equal(2);
      expect(values[0]).equal("Male");
      expect(values[1]).equal("Female");
    });

    it("returns empty list for empty enum", () => {
      expect(Enum.values(Empty).length).equal(0);
    });
  });
});
