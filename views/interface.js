document.addEventListener('DOMContentLoaded', () => {
  let noteContainer = new NoteContainer

  document.querySelector('#new_note_form').addEventListener('submit', (event) => {
    event.preventDefault()
    let content = document.querySelector('#new_note_text_box')
    let noteId = noteContainer.create(content.value)
    let noteTitle = noteContainer.getTitleById(noteId)
    let listNode = document.createElement('li');
    let linkNode = document.createElement('a')
    linkNode.setAttribute('href', `#${noteId}`)
    linkNode.innerText = noteTitle
    listNode.appendChild(linkNode)
    document.getElementById('saved_notes_list').appendChild(listNode);
    content.value = null
  })

  window.addEventListener('hashchange', () => {
    let url = window.location.hash.split('#')
    if(url.length > 1) {
      let noteId = url[1]
      let noteContent = noteContainer.getContentById(parseInt(noteId))
      showNotePage()
      document.querySelector('#note_display_content').innerText = noteContent
    } else {
      hideNotePage()
    }
  })

  document.querySelector('#note_display').addEventListener('submit', (event) => {
    event.preventDefault()
    hideNotePage()
    history.replaceState(null, null, ' ');
  })
})

function showNotePage() {
  document.querySelector('#main_page_display').style.display = 'none'
  document.querySelector('#note_display').style.display = 'block'
}

function hideNotePage() {
  document.querySelector('#main_page_display').style.display = 'block'
  document.querySelector('#note_display').style.display = 'none'
}
