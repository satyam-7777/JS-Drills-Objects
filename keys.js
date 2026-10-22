// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys

function keys(object) {
  const keysArray = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keysArray.push(key);
    }
  }

  return keysArray;
}

module.exports = keys;
