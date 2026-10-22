// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

exports.values = (object) => {
  const valuesArray = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      valuesArray.push(object[key]);
    }
  }

  return valuesArray;
};
