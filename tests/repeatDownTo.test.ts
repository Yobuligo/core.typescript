import { expect } from "chai";
import { repeatDownTo } from "./../src/core";

describe("repeatDownTo", () => {
  let calledTimes: number = 0;

  beforeEach(() => (calledTimes = 0));

  it("throws IllegalArgumentException if from smaller to", () => {
    let throwsError = false;
    try {
      repeatDownTo(4, 5, () => {
        calledTimes;
      });
    } catch (error) {
      throwsError = true;
    }
    expect(throwsError).true;
  });

  it("provides to be called 1 times", () => {
    repeatDownTo(5, 5, () => {
      calledTimes++;
    });
    expect(calledTimes === 1).true;
  });

  it("calls block specified times", () => {
    repeatDownTo(5, 4, () => {
      calledTimes++;
    });
    expect(calledTimes === 2).true;
  });

  it("hands over the correct index", () => {
    calledTimes = 5;
    repeatDownTo(5, 4, (index) => {
      expect(index === calledTimes).true;
      calledTimes--;
    });
  });
});
