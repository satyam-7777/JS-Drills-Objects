// Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
// http://underscorejs.org/#mapObject

function mapOjbects(object, callback) {
  const resultObject = {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      const result = callback(object[key], key);
      resultObject[key] = result;
    }
  }

  return resultObject;
}

module.exports = mapOjbects;
