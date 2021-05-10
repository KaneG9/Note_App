let assert = {
  isTrue: function(description, assertionToCheck) {
    if (assertionToCheck) {
      console.log(description + " Assertion passed: " + assertionToCheck + " is truthy");
    } else {
      console.log(description + " Assertion failed: " + assertionToCheck + " is falsey");
    }
  },
  isEqual: function(description, actual, expected) {
    if (actual === expected) {
      console.log(description + " Assertion passed: " + actual + " matched " + expected);
    } else {
      console.log(description + " Assertion failed: " + actual + " did not match " + expected);
    }
  },
  throwsError: function(description, codeToCheck, expectedErrorThrown) {
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
  }
};

function createDouble(doubleName, methods) {
  let tempObject = {
   name: doubleName
  }
  methods.forEach(method => tempObject[method] = null);
  return tempObject;
}
