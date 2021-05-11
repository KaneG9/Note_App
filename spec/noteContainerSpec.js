
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