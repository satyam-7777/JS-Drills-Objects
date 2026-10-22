// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs

exports.pairs = (object) => {
  const pairsArray = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      pairsArray.push([key, object[key]]);
    }
  }

  return pairsArray;
};
