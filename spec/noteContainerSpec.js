
(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something interesting')
  assert.isEqual('creates note with content', noteContainter.notes[0].content, 'Something interesting')
})();

(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something interesting')
  noteContainter.create('Something even more interesting')
  assert.isEqual('creates note with unique ids', noteContainter.notes[0].id, 1)
  assert.isEqual('creates second note with unique ids', noteContainter.notes[1].id, 2)
})();

(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something more interesting as a title of the list')
  noteContainter.create('an even more interesting note with some text inside')
  assert.toInclude('it should have a first title', noteContainter.titleWithId(), [1, 'Something more inter'])
  assert.toInclude('it should have a second title', noteContainter.titleWithId(), [2, 'an even more interes'])
})();
