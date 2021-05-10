var circle = new Circle();

(function() {
  assert.isTrue('circle rad is 10', circle.radius === 10)
})();

// (function() {
//   assert.isEqual('Dog returns woof', circle.dog(), 'woof!')
// })();

(function() {
  assert.throwsError('Dog errors', circle.dog, 'it is a cat!')
})();
