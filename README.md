# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Mpsingh4/lotide2`

**Require it:**

`const _ = require('@Mpsingh4/lotide2');`

**Call it:**
`const results = _.head([1, 2, 3]) // => [1]`
`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.middle([1, 2, 3, 4, 5]) // => [3]`
## Documentation

The following functions are currently implemented:

* `head`: calls the first index of an array or string
* `tail`: calls all but the first index of an array or string
* `middle`: call the middle index or middle two indexes
* `Assert Equal`: takes in 2 values and returns true if they are equal and false otherwise.
* `eqArrays`:  takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `assertArraysEqual`: A function that prints an appropriate message after comparing the two arrays.
* `without`: A function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
* `flatten`: A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `countOnly`: Returns an object containing the count of specified items in an input collection.
* `countLetters`: Returns an object containing the count of each letter in an input sentence.
* `letterPositions`: Returns an object containing the indices of each letter in an input string.
* `findKeyByValue`: Returns the first key in an input object that corresponds to a given value.
* `eqObjects`: Returns true if two input objects are equal and false otherwise.
* `assertObjectsEqual`: Prints a message indicating whether two input objects are equal or not.
* `map`: Returns a new array based on the results of applying a given function to each element of an input array.
* `takeUntil`: Returns a slice of an input array until a given condition is met.
* `findKey`: Returns the first key in an input object that meets a given condition.

### HomePage

https://github.com/Mpsingh4/lotide2