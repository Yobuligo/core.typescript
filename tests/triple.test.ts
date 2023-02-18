import { expect } from "chai";
import { triple } from "./../src/core";
import { Triple } from "./../src/Triple";

describe("triple", () => {
  it("returns Triple with first, second and third value", () => {
    const myTriple: Triple<number, string, boolean> = triple(1, "Stacey", true);
    expect(myTriple).not.undefined;
  });

  it("returns first with correct value", () => {
    const myTriple = triple(1, "Stacey", true);
    expect(myTriple.first).equal(1);
  });

  it("returns second with correct value", () => {
    const myTriple = triple(1, "Stacey", true);
    expect(myTriple.second).equal("Stacey");
  });

  it("returns third with correct value", () => {
    const myTriple = triple(1, "Stacey", true);
    expect(myTriple.third).equal(true);
  });
});
