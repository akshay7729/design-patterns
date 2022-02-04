// factory is an obj that creates another objects

function Developer(name) {
  this.name = name;
  this.type = "developer";
}

function Tester(name) {
  this.name = name;
  this.type = "tester";
}

// factory
function employeeFactory() {
  this.create = (name, type) => {
    if (type === "developer") {
      return new Developer(name);
    }
    if (type === "tester") {
      return new Tester(name);
    }
  };
}

const factory = new employeeFactory();
const employees = [];

employees.push(factory.create("akshay", "developer"));
employees.push(factory.create("ajeet", "tester"));

console.log("employees", employees);
