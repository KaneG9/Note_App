let circle = new Circle();

(function() {
  assert.isTrue('circle rad is 10', circle.radius === 10)
})();

(function() {
  assert.throwsError('Dog errors', circle.dog, 'it is a cat!')
})();

(function() {
  let bikeDouble = createDouble('bike', ['ride', 'isWorking']);
  assert.isEqual('description', bikeDouble.ride, null)
})();
