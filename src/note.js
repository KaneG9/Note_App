class Note {
  constructor(id, content) {
    this.id = id
    this.content = content
  }
  title() {
    let flatContent = this.content.replaceAll('\n', '⏎')
    return flatContent.substring(0, 20);
  }
  get read() {
    return this.content
  }
}
