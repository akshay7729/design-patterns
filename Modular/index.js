// IIFE

const people = (function () {
  var name = "Akshay";
  console.log("name in", name);
})();

console.log("name out", name); // fails as var name is socped inside the people module
