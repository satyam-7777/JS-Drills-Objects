const mapObjects = require("../mapOjbects");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

function callback(val, key) {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else if (typeof val === "number") {
    return val + 10;
  } else {
    return val;
  }
}

const result = mapObjects(testObject, callback);
console.log(result);
