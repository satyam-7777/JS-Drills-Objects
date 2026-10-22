// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert

function invert(object) {
  const resultObject = {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      resultObject[String(object[key])] = key;
    }
  }

  return resultObject;
}

module.exports = invert;
