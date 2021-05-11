
(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something interesting')
  assert.toEqual('creates note with content', noteContainter.notes[0].content, 'Something interesting')
})();

(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something interesting')
  noteContainter.create('Something even more interesting')
  assert.toEqual('creates note with unique ids', noteContainter.notes[0].id, 1)
  assert.toEqual('creates second note with unique ids', noteContainter.notes[1].id, 2)
})();

(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something more interesting as a title of the list')
  noteContainter.create('an even more interesting note with some text inside')
  assert.toIncludeNestedArray('it should have a first title', noteContainter.titleWithId(), [1, 'Something more inter'])
  assert.toIncludeNestedArray('it should have a second title', noteContainter.titleWithId(), [2, 'an even more interes'])
})();

(function() {
  let noteContainter = new NoteContainer()
  noteContainter.create('Something more interesting as a title of the list')
  assert.toEqual('Note Container can read by note id', noteContainter.read(1), 'Something more interesting as a title of the list')
})();