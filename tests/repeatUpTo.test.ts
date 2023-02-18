import { expect } from "chai";
import { repeatUpTo } from "../src/core";

describe("repeatUpTo", () => {
  let calledTimes: number = 0;

  beforeEach(() => (calledTimes = 0));

  it("throws IllegalArgumentException if from greater to", () => {
    let throwsError = false;
    try {
      repeatUpTo(5, 4, () => {
        calledTimes;
      });
    } catch (error) {
      throwsError = true;
    }
    expect(throwsError).true;
  });

  it("provides to be called 1 times", () => {
    repeatUpTo(5, 5, () => {
      calledTimes++;
    });
    expect(calledTimes === 1).true;
  });

  it("calls block specified times", () => {
    repeatUpTo(4, 5, () => {
      calledTimes++;
    });
    expect(calledTimes === 2).true;
  });

  it("hands over the correct index", () => {
    calledTimes = 4;
    repeatUpTo(4, 5, (index) => {
      expect(index === calledTimes).true;
      calledTimes++;
    });
  });
});
