// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

function defaults(object, defaultProps) {
  for (let key in defaultProps) {
    if (object[key] === undefined) {
      object[key] = defaultProps[key];
    }
  }

  return object;
}

module.exports = defaults;
