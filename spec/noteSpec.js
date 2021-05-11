(function() {
  let note = new Note(1, 'some string inside a new notes trucated')
  assert.toEqual('expect the note to be trucated', note.title(), 'some string inside a')
})();

(function() {
  let note = new Note(1, 'some string inside a new notes')
  assert.toEqual('expect this note to be printed', note.read, 'some string inside a new notes' )
})();