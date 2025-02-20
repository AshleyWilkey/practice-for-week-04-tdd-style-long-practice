class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError(`not a valid object`);
    }

    if (typeof obj.name !== "string") {
      throw new TypeError(`not a valid strings`);
    }

    if (typeof obj.age !== "number") {
      throw new TypeError(`not a number`);
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(obj) {
    return obj.map((person) => person.sayHello());
  }
}

module.exports = Person;
