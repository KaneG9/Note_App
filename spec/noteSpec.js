(function() {
  let note = new Note(1, 'some string inside a new notes trucated')
  assert.isEqual('expect the note to be trucated', note.title(), 'some string inside a')
})();

(function() {
  let note = new Note(1, 'some string inside a new notes')
  assert.isEqual('expect this note to be printed', note.read, 'some string inside a new notes' )
})();