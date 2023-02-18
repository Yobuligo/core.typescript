import { expect } from "chai";
import { repeat } from "./../src/core";
describe("repeat", () => {
  let calledTimes: number = 0;

  beforeEach(() => (calledTimes = 0));

  it("throws IllegalArgumentException if times < 0", () => {
    expect(repeat.bind(repeat, -1, () => {})).throw;
  });

  it("provides to be called 0 times", () => {
    repeat(0, () => {
      calledTimes++;
    });
    expect(calledTimes === 0).true;
  });

  it("calls block specified times", () => {
    repeat(2, () => {
      calledTimes++;
    });
    expect(calledTimes === 2).true;
  });

  it("hands over the correct index", () => {
    repeat(2, (index) => {
      calledTimes++;
      expect(index === calledTimes);
    });
  });
});
