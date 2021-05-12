document.addEventListener('DOMContentLoaded', () => {
  let noteContainer = new NoteContainer

  document.querySelector('#new_note_form').addEventListener('submit', (event) => {
    event.preventDefault()
    let content = document.querySelector('#new_note_text_box').value
    let noteId = noteContainer.create(content)
    let noteTitle = noteContainer.getTitleById(noteId)
    var node = document.createElement('li');
    var textnode = document.createTextNode(noteTitle);
    node.appendChild(textnode);
    document.getElementById('saved_notes_list').appendChild(node);
  })
})