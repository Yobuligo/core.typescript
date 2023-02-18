import { expect } from "chai";
import { pair } from "../src/core";
import { Pair } from "./../src/Pair";

describe("pair", () => {
  it("returns Pair with first and second value", () => {
    const myPair: Pair<number, string> = pair(1, "Stacey");
    expect(myPair).not.undefined;
  });

  it("returns first with correct value", () => {
    const myPair = pair(1, "Stacey");
    expect(myPair.first).equal(1);
  });

  it("returns second with correct value", () => {
    const myPair = pair(1, "Stacey");
    expect(myPair.second).equal("Stacey");
  });
});
