document.addEventListener('DOMContentLoaded', () => {
  let noteContainer = new NoteContainer

  document.querySelector('#new_note_form').addEventListener('submit', (event) => {
    event.preventDefault()
    let content = document.querySelector('#new_note_text_box').value
    let noteId = noteContainer.create(content)
    let noteTitle = noteContainer.getTitleById(noteId)
    let listNode = document.createElement('li');
    let linkNode = document.createElement('a')
    linkNode.setAttribute('href', `#${noteId}`)
    linkNode.innerText = noteTitle
    listNode.appendChild(linkNode)
    document.getElementById('saved_notes_list').appendChild(listNode);
    document.getElementById('new_note_text_box').value = null
  })

  window.addEventListener('hashchange', () => {
    let url = window.location.hash.split('#')
    if(url.length > 1) {
      let noteId = url[1]
      let noteContent = noteContainer.getContentById(parseInt(noteId))
      document.querySelector('#main_page_display').style.display = 'none'
      document.querySelector('#note_display').style.display = 'block'
      document.querySelector('#note_display_content').innerText = noteContent
    } else {
      document.querySelector('#main_page_display').style.display = 'block'
      document.querySelector('#note_display').style.display = 'none'
    }
  })
})