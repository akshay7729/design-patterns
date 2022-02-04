class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

// in this method we can provide optional values
class User {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Akshay", { age: 10 });

console.log(user);

// conventional method
// we have to pass undefiend everything we wish to skip the param
// not recommended
class OldUserMethod {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let oldUserMethod = new OldUserMethod(
  "Akshay",
  undefined,
  undefined,
  new Address("345678", "CBD")
);
