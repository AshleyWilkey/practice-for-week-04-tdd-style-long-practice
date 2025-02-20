const chai = require("chai");
const spies = require("chai-spies");
const Person = require("../problems/person.js");

chai.use(spies);
const expect = chai.expect;

const ash = new Person("Ashley", 29);
const jeff = new Person("Jeff", 80);

describe("Person", function () {
  describe("constructor", function () {
    it("should set name and age", function () {
      expect(ash.name).to.equal("Ashley");
      expect(ash.age).to.equal(29);
    });
  });

  describe("sayHello", function () {
    it("should return the instance's name and a greeting message", function () {
      expect(jeff.sayHello()).to.equal(`Hello ${jeff.name}`);
    });
  });

  describe("visit", function () {
    it("will return a string stating that this instance visited the passed-in person instance", function () {
      expect(ash.visit(jeff)).to.equal(`Ashley visited Jeff`);
    });
  });

  describe("switchVisit", function () {
    it(" will invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument.", function () {
      expect(ash.switchVisit(jeff)).to.equal(`Jeff visited Ashley`);
    });
  });

  describe("update", function () {
    it("this method will have two contexts if the incoming argument is or is not a valid object.", function () {
      const opie = new Person("Opie", 4);

      opie.update({ name: "Opie", age: 4.5 });
      expect(opie.age).to.equal(4.5);
    });
  });

  describe("tryUpdate", function () {
    it("return true if update is successful", function () {
      const maizy = new Person("Maizy", 6);

      expect(maizy.tryUpdate({ name: "Maizy", age: 7 })).to.equal(true);
      expect(maizy.age).to.equal(7);
    });

    it("return false if update is unsuccessful", function () {
      const percy = new Person("Percy", 8);

      expect(percy.tryUpdate({ name: "Percy", age: "8" })).to.equal(false);
    });
  });

  describe("greetAll", function () {
    it("the greetAll method will then call the sayHello() method on each Person instance and store each returned string in an array ", function () {
      expect(Person.greetAll([ash, jeff])).to.deep.equal([
        `Hello ${ash.name}`,
        `Hello ${jeff.name}`,
      ]);
    });
  });
});
