"use strict";

let assert = {
  toBeTrue: function(description, assertionToCheck) {
    if (assertionToCheck) {
      console.log(description + " Assertion passed: " + assertionToCheck + " is truthy");
    } else {
      console.log(description + " Assertion failed: " + assertionToCheck + " is falsey");
    }
  },
  toEqual: function(description, actual, expected) {
    if (actual === expected) {
      console.log(description + " Assertion passed: " + actual + " matched " + expected);
    } else {
      console.log(description + " Assertion failed: " + actual + " did not match " + expected);
    }
  },
  toThrowError: function(description, codeToCheck, expectedErrorThrown) {
    let errorCaught = false
    try {
      codeToCheck()
    } catch(err) {
      errorCaught = true
      if (expectedErrorThrown === err.message) {
        console.log(description + " Assertion passed: " + err.message + " matched " + expectedErrorThrown);
      } else {
        console.log(description + " Assertion failed: " + err.message + " did not match " + expectedErrorThrown);
      }
    }
    if (errorCaught === false) {
      console.log(description + " Assertion failed: NO ERROR");
    }
  },
  toInclude: function(description, actual, expected) {
    if (actual.includes(expected)) {
      console.log(description + " Assertion passed: " + actual + " includes " + expected);
    } else {
      console.log(description + " Assertion failed: " + actual + "  does not include " + expected)
    }
  },
  
  toIncludeNestedArray: (function(description, actual, expected) {
    let matchArr = false
    actual.forEach(function(nestedArr) {
      let matchEl = true
      for (var i = 0; i < nestedArr.length; ++i) {
        if (nestedArr[i] !== expected[i]) {
        matchEl = false 
        }
      }
      if(matchEl) {matchArr = true}
    })
    if (matchArr) {
      console.log(description + " Assertion passed: " + actual + " includes " + expected);
    } else {
      console.log(description + " Assertion failed: " + actual + "  does not include " + expected)
    }
  })
};

function createDouble(doubleName, methods) {
  let tempObject = {
   name: doubleName
  }
  methods.forEach(method => tempObject[method] = null);
  return tempObject;
}

