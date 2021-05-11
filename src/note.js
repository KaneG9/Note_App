class Note {
  constructor(id, content) {
    this.id = id
    this.content = content
  }
  title() {
    return this.content.substring(0, 20);
  }
  get read() {
    return this.content
  }
}
