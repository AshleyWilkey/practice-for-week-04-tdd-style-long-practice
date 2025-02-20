const chai = require("chai");
const spies = require("chai-spies");
const myMap = require("../problems/my-map.js");
// Your code here

chai.use(spies);
const expect = chai.expect;

describe("myMap(inputArray, callback)", () => {
  it("return a new array where the callback has been called upon each element ", () => {
    const callback = chai.spy((x) => x * 2);
    const result = myMap([1, 2, 3], callback);
    expect(result).to.deep.equal([2, 4, 6]);
    expect(callback).to.have.been.called.exactly(3);
    expect(callback).to.have.been.called.with(1);
    expect(callback).to.have.been.called.with(2);
    expect(callback).to.have.been.called.with(3);
  });
});
