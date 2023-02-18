import { expect } from "chai";
import { measureTimeMillis } from "./../src/core";

describe("measureTimeMillis", () => {
  it("returns time in millis", () => {
    const timeMillis = measureTimeMillis(async () => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Done");
        }, 100);
      });
      await promise;
    });
    expect(timeMillis > 0).true;
  });

  it("calls function block", () => {
    let called: boolean = false;
    measureTimeMillis(() => {
      called = true;
    });
    expect(called).true;
  });
});
