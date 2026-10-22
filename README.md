# JS Drill: Objects

## Overview

This project focuses on practicing JavaScript object manipulation by implementing commonly used object utility methods from scratch.

The goal is to understand how objects work internally, how to access and transform their properties, and how to work with loops, callbacks, and property checks without relying on built-in utility methods.

## Methods Implemented

### 1. `keys(object)`

Returns an array containing the names of the object's own enumerable properties.

### 2. `values(object)`

Returns an array containing the values of the object's own enumerable properties, excluding function values.

### 3. `mapObject(object, callback)`

Creates a new object by applying a callback function to each property value while preserving the original keys.

### 4. `pairs(object)`

Converts an object into an array of key-value pairs, where each pair is represented as an array containing the key and its corresponding value.

### 5. `invert(object)`

Creates a new object by swapping the keys and values of the original object. Values become keys, and original keys become values.

### 6. `defaults(object, defaultProps)`

Fills in properties whose values are `undefined` using values from a defaults object. It modifies and returns the original object without overwriting existing defined values.

## Author

Satyam Patel
