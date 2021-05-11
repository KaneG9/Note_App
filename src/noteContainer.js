class NoteContainer {
  constructor(noteClass = Note) {
    this.noteClass = noteClass
    this.notes = []
    this.idCounter = 1
  }

  create(content) {
    let note = new this.noteClass(this.idCounter, content)
    this.notes.push(note)
    this.idCounter++
  }
}
