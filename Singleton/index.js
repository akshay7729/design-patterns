// singleton pattern does not let us create more than one instance

let instance = null;

class Singleton {
  constructor(data) {
    if (!instance) {
      this.data = data;
      instance = this;
    } else {
      return instance;
    }
  }
}

const one = new Singleton("one");
const two = new Singleton("two");

console.log("1", one); // returns one
console.log("2", two); // returns one again (as it does not let us create more than one instance)
