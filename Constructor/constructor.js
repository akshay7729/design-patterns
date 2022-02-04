// everything in js is objects

// create obj
// set and get properties
//

const obj = {};

obj.name = "Akshay";

const val = obj.name;

console.log("val", val);

// constructor function

function abc(data) {
  this.data = data;
  this.draw = function () {
    return data;
  };
}

const xyz = new abc("akshay");
console.log("xyz", xyz);
console.log("xyz2", xyz.draw());
