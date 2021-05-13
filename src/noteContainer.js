class NoteContainer {
  constructor(notes = [], idCounter = 1, noteClass = Note) {
    this.noteClass = noteClass
    this.notes = notes
    this.idCounter = idCounter
  }

  create(content) {
    let note = new this.noteClass(this.idCounter, content)
    this.notes.push(note)
    this.idCounter++
    return note.id
  }

  listTitleWithId() {
    return this.notes.map((note) => [note.id, note.title()])
  }

  getContentById(id) {
    return this.notes.filter(el => el.id === id)[0].content
  }

  getTitleById(id) {
    return this.notes.filter(el => el.id === id)[0].title()
  }
}
