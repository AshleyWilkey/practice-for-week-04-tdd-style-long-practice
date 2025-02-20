// Your code here
const { expect } = require("chai");
const reverseString = require("../problems/reverse-string.js");

describe("reverseString(string)", () => {
  it("should return string in reverse", () => {
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("Opie")).to.equal("eipO");
    expect(reverseString("Fun")).to.equal("nuF");
  });
});
