const defaults = require("../defaults");

const testObject = { name: "Bruce Wayne", location: "Gotham" };
const defaultProps = { film: "Batman", age: 36 };

const result = defaults(testObject, defaultProps);
console.log(result);
