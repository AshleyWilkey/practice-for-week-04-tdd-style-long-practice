const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun.js");
// Your code here

describe("returnsThree()", () => {
  it("returns 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal(n)", () => {
  it("return the reciprocal of the given argument", () => {
    expect(reciprocal(2)).to.equal(0.5);
    expect(reciprocal(-3)).to.equal(-1 / 3);
  });
});
