
( function() {
  let noteContainter = new NoteContainer
  let noteDouble = createDouble('noteDouble', [])
  let note = noteContainter.create('Something interesting')
  assert.isEqual('creates note with content', note.content, 'Something interesting')
})()

